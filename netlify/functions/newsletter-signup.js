const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only handle POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    // Parse form data
    const params = new URLSearchParams(event.body);
    const email = params.get('email');
    const timestamp = params.get('timestamp');
    
    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Email is required' })
      };
    }

    // Configure your email service (example with Gmail)
    const transporter = nodemailer.createTransporter({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your Outlook email
        pass: process.env.EMAIL_PASS  // Your Outlook app password
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    // Send thank you email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Teranotion Insights!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #374151 0%, #1f2937 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Teranotion!</h1>
          </div>
          
          <div style="padding: 40px 20px; background: #f9fafb;">
            <h2 style="color: #374151; margin-bottom: 20px;">Thank you for subscribing!</h2>
            
            <p style="color: #6b7280; line-height: 1.6; margin-bottom: 20px;">
              We're excited to have you join our community of SAP professionals and digital transformation enthusiasts.
            </p>
            
            <p style="color: #6b7280; line-height: 1.6; margin-bottom: 30px;">
              You'll receive our latest insights on:
            </p>
            
            <ul style="color: #6b7280; line-height: 1.8; margin-bottom: 30px;">
              <li>SAP Business Data Cloud innovations</li>
              <li>AI agents and intelligent automation</li>
              <li>Analytics and business intelligence trends</li>
              <li>Digital transformation best practices</li>
            </ul>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://dev-teranotion.netlify.app" 
                 style="background: #374151; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">
                Visit Our Website
              </a>
            </div>
            
            <p style="color: #9ca3af; font-size: 14px; margin-top: 30px;">
              If you have any questions, feel free to reach out to us at 
              <a href="mailto:contact@teranotion.com" style="color: #059669;">contact@teranotion.com</a>
            </p>
          </div>
          
          <div style="background: #374151; padding: 20px; text-align: center;">
            <p style="color: #9ca3af; margin: 0; font-size: 12px;">
              © 2024 Teranotion. All rights reserved.
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message: 'Thank you email sent successfully',
        email: email 
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Error sending thank you email',
        error: error.message 
      })
    };
  }
};