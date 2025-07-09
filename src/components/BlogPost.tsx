import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { format } from 'date-fns';
import { blogPosts, categories } from '../data/contentData';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/resources" className="text-blue-600 hover:text-blue-700">
            Return to Resources
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find(c => c.id === post.category);
  const getCategoryColor = () => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800',
      purple: 'bg-purple-100 text-purple-800',
      green: 'bg-green-100 text-green-800',
      orange: 'bg-orange-100 text-orange-800',
      teal: 'bg-teal-100 text-teal-800',
      red: 'bg-red-100 text-red-800'
    };
    return colors[category?.color as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <Link 
            to="/resources" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Resources
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor()}`}>
              {category?.name}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {format(post.publishedAt, 'MMMM dd, yyyy')}
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              {post.readTime} min read
            </div>
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="aspect-video overflow-hidden rounded-xl mb-8">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Excerpt */}
          <div className="text-xl text-gray-600 leading-relaxed mb-8 p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl border-l-4 border-slate-500">
            {post.excerpt}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: post.content.replace(/\n/g, '<br />').replace(/# /g, '<h1>').replace(/<h1>/g, '<h1 class="text-3xl font-bold text-gray-900 mb-6 mt-8">').replace(/## /g, '<h2>').replace(/<h2>/g, '<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-6">').replace(/### /g, '<h3>').replace(/<h3>/g, '<h3 class="text-xl font-bold text-gray-900 mb-3 mt-4">')
              }} 
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center flex-wrap gap-2">
              <Tag className="h-5 w-5 text-gray-400 mr-2" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Posts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="block group">
                  <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {relatedPost.featuredImage && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {format(relatedPost.publishedAt, 'MMM dd, yyyy')}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 text-white text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Let's discuss how our SAP cloud and AI solutions can help you achieve your goals.
          </p>
          <Link
            to="/#contact"
            className="bg-white text-slate-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium inline-block shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;