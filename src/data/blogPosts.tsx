import React from 'react';
import { defaultAuthor } from './author';

export const blogPosts = [
  {
    id: 'pawsome-adventures',
    title: 'Paw-some Adventures: Exploring Jacksonville\'s Pet-Friendly Trails and Parks',
    slug: 'pawsome-adventures-jacksonville',
    excerpt: 'Discover the best pet-friendly outdoor spots in Jacksonville, from scenic trails to beautiful beaches. Learn where to take your furry friend for the perfect outdoor adventure.',
    content: (
      <div className="blog-content">
        <h2>Why Do Dogs Love Walks?</h2>
        <p>
          Why do dogs go wild for walks? Is it the fresh air? The exercise? The sniffing opportunities? 
          Whatever the reason, we're paws-itive that our furry friends love exploring new trails and parks. 
          And, with Jacksonville's pet-friendly atmosphere, there's no shortage of options.
        </p>

        <h2>Top Pet-Friendly Trails and Parks in Jacksonville</h2>
        <p>
          From the scenic trails of Timucuan Ecological and Historic Preserve to the dog-friendly beaches 
          of Jacksonville Beach, there are plenty of options for you and your pup to get outside and enjoy 
          the great outdoors. Here are some of our top picks:
        </p>
        <ul>
          <li>Timucuan Ecological and Historic Preserve</li>
          <li>Jacksonville Beach</li>
          <li>Kathryn Abbey Hanna Park</li>
          <li>Riverside Arts Market</li>
          <li>Riverside Park</li>
        </ul>

        <h2>Benefits of Outdoor Exercise for Pets</h2>
        <p>
          Outdoor exercise is essential for our furry friends. It provides them with vitamin D, socialization, 
          and mental stimulation. In fact, a study by the American Heart Association found that dogs who 
          exercise regularly are 15% less likely to develop heart disease. That's a paws-itive outcome if 
          we've ever seen one!
        </p>

        <h2>How Little Paws JAX Can Help</h2>
        <p>
          At Little Paws JAX, we understand the importance of exercise for our furry friends. That's why 
          we offer a range of services designed to keep your pup active and healthy. From dog walking to 
          pet sitting, we've got you covered. Contact us today to learn more about how we can help you 
          discover new exercise spots for your pet.
        </p>
      </div>
    ),
    featuredImage: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&auto=format&fit=crop&q=60',
    imageAlt: 'Dog enjoying a walk on Jacksonville Beach',
    publishDate: '2024-03-23',
    author: defaultAuthor,
    keywords: ['Jacksonville parks', 'dog walking trails', 'pet-friendly beaches', 'outdoor activities with pets'],
    category: 'Local Activities'
  },
  {
    id: 'nutrition-guide',
    title: 'The Ultimate Guide to Pet Nutrition: What Your Pet Really Needs',
    slug: 'pet-nutrition-guide',
    excerpt: 'Understanding your pet\'s nutritional needs is crucial for their health and happiness. Learn about proper diet selection, feeding schedules, and special dietary considerations.',
    content: (
      <div className="blog-content">
        <h2>Understanding Basic Nutritional Needs</h2>
        <p>
          Just like humans, pets require a balanced diet to maintain optimal health. The key nutrients 
          include proteins, fats, carbohydrates, vitamins, and minerals. According to veterinary studies, 
          proper nutrition can extend your pet's life by up to 2 years.
        </p>

        <h2>Age-Appropriate Nutrition</h2>
        <ul>
          <li>Puppies and Kittens: High protein for growth and development</li>
          <li>Adult Pets: Balanced maintenance diet</li>
          <li>Senior Pets: Lower calories, higher fiber</li>
          <li>Special Needs: Prescription diets as needed</li>
        </ul>

        <h2>Common Nutrition Mistakes</h2>
        <p>
          Avoid these common pitfalls in pet nutrition:
        </p>
        <ul>
          <li>Overfeeding (affects 59% of pets)</li>
          <li>Inappropriate treats</li>
          <li>Inconsistent feeding schedules</li>
          <li>Poor quality food choices</li>
          <li>Ignoring special dietary needs</li>
        </ul>

        <h2>How Little Paws JAX Helps</h2>
        <p>
          Our pet care professionals ensure your pet maintains their dietary routine:
        </p>
        <ul>
          <li>Precise portion control</li>
          <li>Consistent feeding schedules</li>
          <li>Special diet accommodation</li>
          <li>Monitoring eating habits</li>
          <li>Regular updates on food intake</li>
        </ul>
      </div>
    ),
    featuredImage: 'https://images.unsplash.com/photo-1585559700398-1385b3a8aeb6?w=800&auto=format&fit=crop&q=60',
    imageAlt: 'Dog food in a bowl with healthy ingredients around it',
    publishDate: '2024-03-24',
    author: defaultAuthor,
    keywords: ['pet nutrition', 'dog food', 'cat food', 'healthy pets', 'pet diet'],
    category: 'Pet Nutrition'
  },
  {
    id: 'separation-anxiety',
    title: 'Understanding and Managing Pet Separation Anxiety',
    slug: 'pet-separation-anxiety',
    excerpt: 'Learn how to recognize signs of separation anxiety in pets and discover effective strategies to help them cope when you\'re away.',
    content: (
      <div className="blog-content">
        <h2>Recognizing Separation Anxiety</h2>
        <p>
          Separation anxiety affects up to 40% of dogs and can significantly impact their quality of life. 
          Understanding the signs is the first step to helping your pet cope.
        </p>

        <h2>Common Signs of Anxiety</h2>
        <ul>
          <li>Excessive barking or howling</li>
          <li>Destructive behavior</li>
          <li>Inappropriate elimination</li>
          <li>Pacing or restlessness</li>
          <li>Loss of appetite when alone</li>
        </ul>

        <h2>Professional Solutions</h2>
        <p>
          Little Paws JAX offers specialized services to help pets with separation anxiety:
        </p>
        <ul>
          <li>Regular check-in visits</li>
          <li>Extended play sessions</li>
          <li>Anxiety-reducing activities</li>
          <li>Consistent routines</li>
          <li>Progress monitoring</li>
        </ul>

        <h2>Long-term Management Strategies</h2>
        <p>
          Building confidence and independence in your pet requires a comprehensive approach:
        </p>
        <ul>
          <li>Gradual desensitization</li>
          <li>Positive reinforcement</li>
          <li>Environmental enrichment</li>
          <li>Professional support</li>
          <li>Consistent schedules</li>
        </ul>
      </div>
    ),
    featuredImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=60',
    imageAlt: 'Dog looking sad near window',
    publishDate: '2024-03-25',
    author: defaultAuthor,
    keywords: ['separation anxiety', 'pet behavior', 'dog anxiety', 'pet mental health'],
    category: 'Pet Health'
  }
];