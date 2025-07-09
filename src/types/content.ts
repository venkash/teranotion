export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  updatedAt: Date;
  tags: string[];
  category: string;
  featuredImage?: string;
  status: 'draft' | 'published';
  readTime: number;
}

export interface Newsletter {
  id: string;
  title: string;
  description: string;
  publishedAt: Date;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  downloadCount: number;
}

export interface ExternalLink {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  addedAt: Date;
  tags: string[];
  thumbnail?: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
  duration?: string;
  category: string;
  addedAt: Date;
  tags: string[];
  platform: 'youtube' | 'vimeo' | 'direct';
}

export interface ContentCategory {
  id: string;
  name: string;
  description: string;
  color: string;
}