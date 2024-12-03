import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import BlogSidebar from './BlogSidebar';

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Pet Care Blog</h1>
          
          <div className="space-y-12">
            {posts.map(post => (
              <article key={post.id} className="group">
                <Link to={`/blog/${post.slug}`}>
                  <img
                    src={post.featuredImage}
                    alt={post.imageAlt}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                    {post.title}
                  </h2>
                </Link>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.category}</span>
                </div>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>

        <BlogSidebar currentPostId="" />
      </div>
    </div>
  );
}