import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  BookOpen, 
  FileText, 
  ExternalLink, 
  Video, 
  Calendar,
  Clock,
  Download,
  Tag,
  ArrowRight,
  Eye
} from 'lucide-react';
import { format } from 'date-fns';
import { blogPosts, newsletters, externalLinks, videos, categories } from '../data/contentData';

const Resources = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'blog' | 'newsletters' | 'links' | 'videos'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'blog', label: 'Blog Posts', icon: BookOpen },
    { id: 'newsletters', label: 'Newsletters', icon: FileText },
    { id: 'links', label: 'External Links', icon: ExternalLink },
    { id: 'videos', label: 'Videos', icon: Video }
  ];

  // Filter content based on active tab, category, and search term
  const getFilteredContent = () => {
    let content: any[] = [];

    if (activeTab === 'all' || activeTab === 'blog') {
      content = [...content, ...blogPosts.map(post => ({ ...post, type: 'blog' }))];
    }
    if (activeTab === 'all' || activeTab === 'newsletters') {
      content = [...content, ...newsletters.map(newsletter => ({ ...newsletter, type: 'newsletter' }))];
    }
    if (activeTab === 'all' || activeTab === 'links') {
      content = [...content, ...externalLinks.map(link => ({ ...link, type: 'link' }))];
    }
    if (activeTab === 'all' || activeTab === 'videos') {
      content = [...content, ...videos.map(video => ({ ...video, type: 'video' }))];
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      content = content.filter(item => item.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      content = content.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort by date (newest first)
    content.sort((a, b) => {
      const dateA = a.publishedAt || a.addedAt;
      const dateB = b.publishedAt || b.addedAt;
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    });

    return content;
  };

  const filteredContent = getFilteredContent();

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
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

  const getTypeIcon = (type: string) => {
    const icons = { blog: BookOpen, newsletter: FileText, link: ExternalLink, video: Video };
    const Icon = icons[type as keyof typeof icons];
    return Icon ? <Icon className="h-5 w-5" /> : null;
  };

  const renderContentCard = (item: any) => {
    const category = categories.find(c => c.id === item.category);

    return (
      <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
        {/* Image/Thumbnail */}
        {(item.featuredImage || item.thumbnailUrl) && (
          <div className="aspect-video overflow-hidden">
            <img
              src={item.featuredImage || item.thumbnailUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="p-6">
          {/* Type and Category */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              {getTypeIcon(item.type)}
              <span className="text-sm font-medium text-gray-600 capitalize">{item.type}</span>
            </div>
            {category && (
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                {category.name}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {item.title}
          </h3>

          {/* Description/Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {item.description || item.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {format(item.publishedAt || item.addedAt, 'MMM dd, yyyy')}
              </div>
              {item.readTime && (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {item.readTime} min read
                </div>
              )}
              {item.duration && (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {item.duration}
                </div>
              )}
              {item.downloadCount && (
                <div className="flex items-center">
                  <Download className="h-4 w-4 mr-1" />
                  {item.downloadCount} downloads
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.slice(0, 3).map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
              {item.tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                  +{item.tags.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Action Button */}
          <div className="flex items-center justify-between">
            {item.type === 'blog' ? (
              <Link
                to={`/blog/${item.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            ) : item.type === 'newsletter' ? (
              <a
                href={item.fileUrl}
                download={item.fileName}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Download PDF
                <Download className="ml-2 h-4 w-4" />
              </a>
            ) : item.type === 'link' ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Visit Link
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            ) : (
              <a
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Watch Video
                <Eye className="ml-2 h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SAP Resources & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of SAP cloud and AI resources, including blog posts, 
            newsletters, documentation links, and video content to accelerate your digital transformation.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-gray-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-gray-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        {filteredContent.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map(renderContentCard)}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl p-12 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Need Custom SAP Solutions?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Our experts are ready to help you implement the perfect SAP cloud and AI strategy for your business.
            </p>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/#contact';
              }}
              className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium inline-flex items-center shadow-lg hover:shadow-xl"
            >
              Get Expert Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;