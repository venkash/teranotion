import { BlogPost, Newsletter, ExternalLink, Video, ContentCategory } from '../types/content';

export const categories: ContentCategory[] = [
  { id: 'sap-cloud', name: 'SAP Cloud', description: 'Cloud solutions and architecture', color: 'blue' },
  { id: 'ai-ml', name: 'AI & Machine Learning', description: 'Artificial intelligence and ML insights', color: 'purple' },
  { id: 'analytics', name: 'Analytics', description: 'Data analytics and business intelligence', color: 'green' },
  { id: 'automation', name: 'Automation', description: 'Process automation and efficiency', color: 'orange' },
  { id: 'integration', name: 'Integration', description: 'System integration and connectivity', color: 'teal' },
  { id: 'industry-insights', name: 'Industry Insights', description: 'Market trends and analysis', color: 'red' }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of SAP Business Data Cloud: Transforming Enterprise Analytics',
    slug: 'future-sap-business-data-cloud',
    excerpt: 'Explore how SAP Business Data Cloud is revolutionizing enterprise analytics with real-time processing, AI integration, and cloud-native architecture.',
    content: `# The Future of SAP Business Data Cloud

SAP Business Data Cloud represents a paradigm shift in how enterprises handle data analytics and business intelligence. As organizations increasingly move to cloud-first strategies, understanding the capabilities and potential of this platform becomes crucial for digital transformation success.

## Key Transformations

### Real-Time Analytics Revolution
The traditional batch processing model is giving way to real-time analytics. SAP Business Data Cloud enables organizations to process and analyze data as it flows through their systems, providing immediate insights that drive faster decision-making.

### AI-Powered Insights
Machine learning algorithms are now embedded directly into the analytics pipeline, automatically identifying patterns, anomalies, and opportunities that human analysts might miss.

### Cloud-Native Architecture
Built from the ground up for the cloud, this platform offers unprecedented scalability, reliability, and performance compared to traditional on-premises solutions.

## Implementation Best Practices

1. **Start with a clear data strategy**
2. **Ensure proper data governance**
3. **Train your team on new capabilities**
4. **Implement gradually with pilot projects**

The future of enterprise analytics is here, and SAP Business Data Cloud is leading the way.`,
    author: 'Teranotion Team',
    publishedAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    tags: ['SAP', 'Cloud', 'Analytics', 'Digital Transformation'],
    category: 'sap-cloud',
    featuredImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'published',
    readTime: 8
  },
  {
    id: '2',
    title: 'AI Agents in Business Process Automation: A Complete Guide',
    slug: 'ai-agents-business-process-automation',
    excerpt: 'Discover how intelligent AI agents are transforming business processes through autonomous decision-making and continuous learning capabilities.',
    content: `# AI Agents in Business Process Automation

Artificial Intelligence agents are no longer science fiction—they're actively transforming how businesses operate, making decisions, and serving customers. This comprehensive guide explores the current state and future potential of AI agents in enterprise environments.

## What Are AI Agents?

AI agents are autonomous software entities that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional automation tools, AI agents can:

- Learn from interactions and improve over time
- Handle complex, unstructured scenarios
- Make contextual decisions without human intervention
- Adapt to changing business conditions

## Key Applications

### Customer Service Automation
AI agents can handle customer inquiries 24/7, providing personalized responses and escalating complex issues to human agents when necessary.

### Invoice Processing
Intelligent agents can extract data from invoices, validate information against purchase orders, and route approvals automatically.

### Inventory Management
AI agents monitor stock levels, predict demand patterns, and automatically trigger reorders based on business rules and market conditions.

## Implementation Strategy

The key to successful AI agent deployment is starting small and scaling gradually. Begin with well-defined processes and expand as the agents learn and improve.`,
    author: 'Teranotion Team',
    publishedAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    tags: ['AI', 'Automation', 'Business Process', 'Machine Learning'],
    category: 'ai-ml',
    featuredImage: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'published',
    readTime: 12
  },
  {
    id: '3',
    title: 'SAP Analytics Cloud: Democratizing Data-Driven Decision Making',
    slug: 'sap-analytics-cloud-democratizing-data',
    excerpt: 'Learn how SAP Analytics Cloud is making advanced analytics accessible to business users across all organizational levels.',
    content: `# SAP Analytics Cloud: Democratizing Data-Driven Decision Making

The democratization of data analytics is one of the most significant trends in modern business intelligence. SAP Analytics Cloud is at the forefront of this movement, making sophisticated analytics tools accessible to users regardless of their technical expertise.

## Breaking Down Barriers

### Self-Service Analytics
Business users can now create their own reports and dashboards without relying on IT departments, accelerating the time from question to insight.

### Natural Language Queries
Users can ask questions in plain English and receive immediate visual responses, making data exploration intuitive and accessible.

### Collaborative Planning
Teams can work together on forecasts and budgets in real-time, with built-in workflow and approval processes.

## Key Benefits

- **Faster Decision Making**: Immediate access to insights
- **Reduced IT Burden**: Self-service capabilities
- **Improved Accuracy**: AI-powered recommendations
- **Better Collaboration**: Shared workspaces and real-time updates

The future belongs to organizations that can turn data into actionable insights quickly and efficiently.`,
    author: 'Teranotion Team',
    publishedAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    tags: ['SAP Analytics Cloud', 'Business Intelligence', 'Self-Service Analytics'],
    category: 'analytics',
    featuredImage: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'published',
    readTime: 6
  }
];

export const newsletters: Newsletter[] = [
  {
    id: '1',
    title: 'SAP Cloud & AI Quarterly Report Q1 2024',
    description: 'Comprehensive analysis of SAP cloud adoption trends, AI implementation strategies, and market insights for the first quarter of 2024.',
    publishedAt: new Date('2024-01-20'),
    fileUrl: '/newsletters/sap-cloud-ai-q1-2024.pdf',
    fileName: 'sap-cloud-ai-q1-2024.pdf',
    fileSize: 2.4,
    downloadCount: 156
  },
  {
    id: '2',
    title: 'Digital Transformation Success Stories',
    description: 'Real-world case studies showcasing successful digital transformation projects using SAP Business Technology Platform.',
    publishedAt: new Date('2024-01-15'),
    fileUrl: '/newsletters/digital-transformation-stories.pdf',
    fileName: 'digital-transformation-stories.pdf',
    fileSize: 3.1,
    downloadCount: 203
  },
  {
    id: '3',
    title: 'AI in Enterprise: Implementation Guide',
    description: 'Step-by-step guide for implementing AI solutions in enterprise environments, including best practices and common pitfalls.',
    publishedAt: new Date('2024-01-10'),
    fileUrl: '/newsletters/ai-enterprise-implementation.pdf',
    fileName: 'ai-enterprise-implementation.pdf',
    fileSize: 1.8,
    downloadCount: 89
  }
];

export const externalLinks: ExternalLink[] = [
  {
    id: '1',
    title: 'SAP Help Portal - Business Technology Platform',
    description: 'Official SAP documentation for Business Technology Platform, including setup guides, APIs, and best practices.',
    url: 'https://help.sap.com/docs/btp',
    category: 'sap-cloud',
    addedAt: new Date('2024-01-18'),
    tags: ['Documentation', 'SAP BTP', 'Developer Resources'],
    thumbnail: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    title: 'SAP Community - AI and Machine Learning',
    description: 'SAP Community hub for AI and machine learning discussions, tutorials, and best practices from experts.',
    url: 'https://community.sap.com/topics/artificial-intelligence',
    category: 'ai-ml',
    addedAt: new Date('2024-01-16'),
    tags: ['SAP Community', 'AI', 'Machine Learning'],
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    title: 'SAP Analytics Cloud Documentation',
    description: 'Complete documentation for SAP Analytics Cloud including planning, analytics, and predictive capabilities.',
    url: 'https://help.sap.com/docs/SAP_ANALYTICS_CLOUD',
    category: 'sap-cloud',
    addedAt: new Date('2024-01-14'),
    tags: ['SAP Analytics Cloud', 'Documentation', 'Business Intelligence'],
    thumbnail: 'https://images.pexels.com/photos/590018/pexels-photo-590018.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    title: 'SAP Build Platform Documentation',
    description: 'Official documentation for SAP Build platform including low-code development and process automation.',
    url: 'https://help.sap.com/docs/build-platform',
    category: 'automation',
    addedAt: new Date('2024-01-12'),
    tags: ['SAP Build', 'Low-Code', 'Process Automation'],
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '5',
    title: 'SAP Datasphere Documentation',
    description: 'Comprehensive guide to SAP Datasphere for data fabric, data warehousing, and analytics.',
    url: 'https://help.sap.com/docs/SAP_DATASPHERE',
    category: 'analytics',
    addedAt: new Date('2024-01-10'),
    tags: ['SAP Datasphere', 'Data Fabric', 'Data Warehouse'],
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '6',
    title: 'SAP AI Core Documentation',
    description: 'Official documentation for SAP AI Core platform for machine learning operations and AI model management.',
    url: 'https://help.sap.com/docs/AI_CORE',
    category: 'ai-ml',
    addedAt: new Date('2024-01-08'),
    tags: ['SAP AI Core', 'MLOps', 'AI Platform'],
    thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '7',
    title: 'SAP Integration Suite Documentation',
    description: 'Complete guide to SAP Integration Suite for hybrid integration, API management, and event mesh.',
    url: 'https://help.sap.com/docs/SAP_INTEGRATION_SUITE',
    category: 'integration',
    addedAt: new Date('2024-01-06'),
    tags: ['SAP Integration Suite', 'API Management', 'Hybrid Integration'],
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '8',
    title: 'SAP Developer Center',
    description: 'Central hub for SAP developers with tutorials, code samples, and development resources.',
    url: 'https://developers.sap.com/',
    category: 'sap-cloud',
    addedAt: new Date('2024-01-04'),
    tags: ['SAP Developers', 'Tutorials', 'Code Samples'],
    thumbnail: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '9',
    title: 'SAP Learning Hub',
    description: 'Official SAP learning platform with courses, certifications, and training materials.',
    url: 'https://learning.sap.com/',
    category: 'industry-insights',
    addedAt: new Date('2024-01-02'),
    tags: ['SAP Learning', 'Certification', 'Training'],
    thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const videos: Video[] = [
  {
    id: '1',
    title: 'SAP Datasphere Overview - Data Fabric for the Enterprise',
    description: 'Official SAP overview of Datasphere and how it creates a unified data fabric for enterprise data management.',
    videoUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    thumbnailUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '15:32',
    category: 'sap-cloud',
    addedAt: new Date('2024-01-19'),
    tags: ['SAP Datasphere', 'Data Fabric', 'Enterprise Data'],
    platform: 'youtube'
  },
  {
    id: '2',
    title: 'SAP Analytics Cloud - Business Intelligence Reimagined',
    description: 'Discover how SAP Analytics Cloud transforms business intelligence with embedded AI and collaborative planning.',
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    thumbnailUrl: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '22:45',
    category: 'analytics',
    addedAt: new Date('2024-01-17'),
    tags: ['SAP Analytics Cloud', 'Business Intelligence', 'AI Analytics'],
    platform: 'youtube'
  },
  {
    id: '3',
    title: 'SAP Business Technology Platform Introduction',
    description: 'Complete introduction to SAP BTP and how it serves as the foundation for digital transformation.',
    videoUrl: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
    thumbnailUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '18:20',
    category: 'sap-cloud',
    addedAt: new Date('2024-01-15'),
    tags: ['SAP BTP', 'Digital Transformation', 'Cloud Platform'],
    platform: 'youtube'
  },
  {
    id: '4',
    title: 'SAP Build Apps - Low-Code Application Development',
    description: 'Learn how SAP Build Apps enables rapid application development with visual, low-code tools.',
    videoUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    thumbnailUrl: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '28:15',
    category: 'automation',
    addedAt: new Date('2024-01-13'),
    tags: ['SAP Build Apps', 'Low-Code', 'Citizen Development'],
    platform: 'youtube'
  },
  {
    id: '5',
    title: 'SAP AI and Machine Learning Overview',
    description: 'Comprehensive overview of SAP AI capabilities including AI Core, AI Foundation, and embedded intelligence.',
    videoUrl: 'https://www.youtube.com/watch?v=8kJQP7kiw5Fk',
    thumbnailUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '20:15',
    category: 'ai-ml',
    addedAt: new Date('2024-01-11'),
    tags: ['SAP AI', 'Machine Learning', 'AI Core'],
    platform: 'youtube'
  },
  {
    id: '6',
    title: 'SAP Integration Suite - Hybrid Integration Platform',
    description: 'Learn about SAP Integration Suite and how it connects cloud and on-premise systems seamlessly.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '13:40',
    category: 'integration',
    addedAt: new Date('2024-01-09'),
    tags: ['SAP Integration Suite', 'Hybrid Integration', 'API Management'],
    platform: 'youtube'
  }
];