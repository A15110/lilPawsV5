import React from 'react';
import { BlogPost } from '../../types/blog';

interface BlogSchemaProps {
  post: BlogPost;
}

export default function BlogSchema({ post }: BlogSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.featuredImage,
    datePublished: post.publishDate,
    dateModified: post.modifiedDate || post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: post.author.url
    },
    publisher: {
      '@type': 'Organization',
      name: 'Little Paws JAX',
      logo: {
        '@type': 'ImageObject',
        url: 'https://littlepawsjax.com/logo.png'
      }
    },
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': window.location.href
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}