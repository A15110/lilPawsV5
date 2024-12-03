import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import BlogSidebar from './BlogSidebar';

interface CategoryListProps {
  category: string;
  posts: BlogPost[];
}

export default function CategoryList({ category, posts }: CategoryListProps) {
  const categoryName = category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <nav className="text-sm mb-6">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="text-primary-600 hover:text-primary-800">
                  Home
                </Link>
                <span className="mx-2 text-gray-500">/</span>
              </li>
              <li className="flex items-center">
                <Link to="/blog" className="text-primary-600 hover:text-primary-800">
                  Blog
                </Link>
                <span className="mx-2 text-gray-500">/</span>
              </li>
              <li className="text-gray-500">{categoryName}</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryName}</h1>
          <p className="text-gray-600 mb-8">
            Browse our collection of articles about {categoryName.toLowerCase()}.
          </p>
          
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