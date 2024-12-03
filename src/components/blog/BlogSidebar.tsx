import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePopularPosts } from '../../hooks/usePopularPosts';
import { useSubscribe } from '../../hooks/useSubscribe';
import { blogPosts } from '../../data/blogPosts';

interface BlogSidebarProps {
  currentPostId: string;
}

export default function BlogSidebar({ currentPostId }: BlogSidebarProps) {
  const popularPosts = usePopularPosts();
  const [email, setEmail] = useState('');
  const { subscribe, status, error } = useSubscribe();

  // Calculate actual post counts per category
  const categoryPostCounts = blogPosts.reduce((acc, post) => {
    const categorySlug = post.category.toLowerCase().replace(/\s+/g, '-');
    acc[categorySlug] = (acc[categorySlug] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = [
    { name: 'Pet Health', slug: 'pet-health' },

    { name: 'Local Activities', slug: 'local-activities' },
    { name: 'Pet Nutrition', slug: 'pet-nutrition' }
  ].map(category => ({
    ...category,
    count: categoryPostCounts[category.slug] || 0
  }));

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    await subscribe(email);
    if (status === 'success') {
      setEmail('');
    }
  };

  return (
    <aside className="space-y-8">
      {/* Popular Posts */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Posts</h2>
        <div className="space-y-4">
          {popularPosts
            .filter(post => post.id !== currentPostId)
            .slice(0, 3)
            .map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="flex items-start gap-4 group"
              >
                <img
                  src={post.featuredImage}
                  alt=""
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
        <div className="space-y-2">
          {categories.map(category => (
            <Link
              key={category.slug}
              to={`/blog/category/${category.slug}`}
              className="flex items-center justify-between py-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <span>{category.name}</span>
              <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-600 mb-4">
          Get the latest pet care tips and updates delivered to your inbox.
        </p>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            disabled={status === 'loading'}
            aria-label="Email address"
            required
          />
          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
          {status === 'success' && (
            <p className="text-sm text-green-600" role="alert">
              Thanks for subscribing! Please check your email for confirmation.
            </p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors disabled:bg-primary-400"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </aside>
  );
}