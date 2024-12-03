import React from 'react';
import { Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import BlogSidebar from './BlogSidebar';
import { BlogPost } from '../../types/blog';
import BlogSchema from './BlogSchema';

interface BlogLayoutProps {
  post: BlogPost;
}

export default function BlogLayout({ post }: BlogLayoutProps) {
  const shareUrl = window.location.href;

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BlogSchema post={post} />

      <nav className="text-sm mb-6">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <a href="/" className="text-primary-600 hover:text-primary-800">Home</a>
            <span className="mx-2 text-gray-500">/</span>
          </li>
          <li className="flex items-center">
            <a href="/blog" className="text-primary-600 hover:text-primary-800">Blog</a>
            <span className="mx-2 text-gray-500">/</span>
          </li>
          <li className="text-gray-500">{post.title}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>Written by {post.author.name}</span>
            </div>

            <img
              src={post.featuredImage}
              alt={post.imageAlt}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
          </header>

          <div className="prose prose-lg max-w-none mb-8">
            {post.content}
          </div>

          {/* Social Share */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-4">
              <span className="font-medium text-gray-700 flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share this article:
              </span>
              <div className="flex gap-2">
                <a
                  href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-sky-500 hover:bg-sky-50 rounded-full transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-blue-700 hover:bg-blue-50 rounded-full transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary-50 p-8 rounded-xl mt-12">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Ready to give your pet the care they deserve?
            </h3>
            <p className="text-primary-700 mb-6">
              Schedule a consultation with our pet care experts today and discover how we can help keep your furry friend happy and healthy.
            </p>
            <a
              href="https://forms.gle/rKCaesmab1A8VUon7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Schedule Your Pet Care Consultation
            </a>
          </div>
        </div>

        <BlogSidebar currentPostId={post.id} />
      </div>
    </article>
  );
}