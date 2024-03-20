import React from 'react'
import RecentPosts from "@/components/RecentPosts"
import MostPopularPosts from './MostPopularPosts'
import FeaturedPosts from './FeaturedPosts'

/**
 * Renders a section containing recent posts, most popular posts, and optionally featured posts.
 * @param category - Optional category of posts to display.
 * @returns JSX.Element
 */
export default function BlogContainer({category}:{category?: string}): JSX.Element {
  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <RecentPosts category={category} />
        <div className="md:w-[40%] flex flex-col items-start gap-8">
          <MostPopularPosts />
          {!category && <FeaturedPosts />}
        </div>
      </div>
    </section>
  );
}
