import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import BlogLayout from '../components/blog/BlogLayout';
import BlogList from '../components/blog/BlogList';
import CategoryList from '../components/blog/CategoryList';

export default function Blog() {
  const { slug, category } = useParams();
  
  // If category is provided, show filtered posts
  if (category) {
    const categoryPosts = blogPosts.filter(
      post => post.category.toLowerCase().replace(' ', '-') === category
    );
    return <CategoryList category={category} posts={categoryPosts} />;
  }
  
  // If no slug is provided, show the blog list
  if (!slug) {
    return <BlogList posts={blogPosts} />;
  }

  // Find the specific blog post
  const post = blogPosts.find(post => post.slug === slug);

  // If post not found, show the blog list
  if (!post) {
    return <BlogList posts={blogPosts} />;
  }

  return <BlogLayout post={post} />;
}