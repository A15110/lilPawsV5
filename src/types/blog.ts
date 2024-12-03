export interface Author {
  id: string;
  name: string;
  url: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: React.ReactNode;
  featuredImage: string;
  imageAlt: string;
  publishDate: string;
  modifiedDate?: string;
  author: Author;
  keywords: string[];
  category: string;
}