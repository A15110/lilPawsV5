import { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';
import { blogPosts } from '../data/blogPosts';

export function usePopularPosts() {
  const [popularPosts, setPopularPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // In a real application, this would fetch from an API
    // For now, we'll just return the most recent posts
    setPopularPosts(blogPosts.slice(0, 5));
  }, []);

  return popularPosts;
}