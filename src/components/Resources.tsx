import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  ExternalLink, 
  Play, 
  Calendar,
  Clock,
  Download,
  Tag,
  Filter,
  Search,
  Eye,
  ArrowRight,
  ArrowUp
  X,
  ArrowUp
} from 'lucide-react';
import { format } from 'date-fns';
import { blogPosts, newsletters, externalLinks, videos, categories } from '../data/contentData';

const Resources = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'newsletters' | 'links' | 'videos'>('blog');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = [
    { id: 'blog', label: 'Blog Posts', icon: BookOpen, count: blogPosts.length },
    { id: 'newsletters', label: 'Newsletters', icon: FileText, count: newsletters.length },
    { id: 'links', label: 'External Links', icon: ExternalLink, count: externalLinks.length },
    { id: 'videos', label: 'Videos', icon: Play, count: videos.length }
  ];

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

  const filterContent = (content: any[]) => {
    return content.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.tags && item.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  };

  const openVideoExternal = (video: any) => {
    // Convert embed URL to watch URL
    let watchUrl = video.videoUrl;
    if (watchUrl.includes('/embed/')) {
      const videoId = watchUrl.split('/embed/')[1].split('?')[0];
      watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
    }
    window.open(watchUrl, '_blank', 'noopener,noreferrer');
  };

  const openVideoExternal = (video: any) => {
    // Convert embed URL to watch URL
    let watchUrl = video.videoUrl;
    if (watchUrl.includes('/embed/')) {
      const videoId = watchUrl.split('/embed/')[1].split('?')[0];
      watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
    }
    window.open(watchUrl, '_blank', 'noopener,noreferrer');
  };

  const renderBlogPosts = () => {
    const filteredPosts = filterContent(blogPosts);
    
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.slug}`} className="block group">
            <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {post.featuredImage && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime} min read
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {format(post.publishedAt, 'MMM dd, yyyy')}
                  </div>
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    );
  };

  const renderNewsletters = () => {
    const filteredNewsletters = newsletters.filter(newsletter => 
      searchTerm === '' || 
      newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="grid md:grid-cols-2 gap-6">
        {filteredNewsletters.map((newsletter) => (
          <div key={newsletter.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-right text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {format(newsletter.publishedAt, 'MMM dd, yyyy')}
                </div>
                <div className="flex items-center mt-1">
                  <Download className="h-4 w-4 mr-1" />
                  {newsletter.downloadCount} downloads
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {newsletter.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {newsletter.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                {newsletter.fileSize} MB • PDF
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderExternalLinks = () => {
    const filteredLinks = filterContent(externalLinks);

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {link.thumbnail && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={link.thumbnail}
                    alt={link.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(link.category)}`}>
                    {categories.find(c => c.id === link.category)?.name}
                  </span>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {link.description}
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  Added {format(link.addedAt, 'MMM dd, yyyy')}
                </div>
                <div className="flex flex-wrap gap-2">
                  {link.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  };

  const renderVideos = () => {
    const filteredVideos = filterContent(videos);

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div 
            key={video.id} 
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            onClick={() => openVideoExternal(video)}
          >
            key={video.id} 
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            onClick={() => openVideoExternal(video)}
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white bg-opacity-90 rounded-full p-4 flex items-center space-x-2">
                  <Play className="h-6 w-6 text-blue-600" />
                  <ExternalLink className="h-5 w-5 text-blue-600" />
                  <ExternalLink className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              {video.duration && (
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(video.category)}`}>
                  {categories.find(c => c.id === video.category)?.name}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Eye className="h-4 w-4 mr-1" />
                  {video.platform}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {video.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {video.description}
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-4 flex-wrap">
                <Calendar className="h-4 w-4 mr-1" />
                {format(video.addedAt, 'MMM dd, yyyy')}
                <span className="mx-2">•</span>
                <ExternalLink className="h-4 w-4 mr-1" />
                Opens in YouTube
                <span className="mx-2">•</span>
                <ExternalLink className="h-4 w-4 mr-1" />
                Opens in YouTube
              </div>
              <div className="flex flex-wrap gap-2">
                {video.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-16">
      {/* Sticky Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollToTop}
          className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
          title="Back to Top"
        >
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Sticky Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollToTop}
          className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
          title="Back to Top"
        >
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resources & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, resources, and industry knowledge 
            on SAP cloud solutions, AI technologies, and digital transformation.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="h-5 w-5 mr-2" />
              {tab.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeTab === tab.id
                  ? 'bg-slate-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            {(activeTab === 'blog' || activeTab === 'links' || activeTab === 'videos') && (
              <div className="md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mb-16">
          {activeTab === 'blog' && renderBlogPosts()}
          {activeTab === 'newsletters' && renderNewsletters()}
          {activeTab === 'links' && renderExternalLinks()}
          {activeTab === 'videos' && renderVideos()}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Stay Updated with Our Latest Insights
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and never miss important updates on SAP cloud solutions and AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
            />
            <button className="bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;