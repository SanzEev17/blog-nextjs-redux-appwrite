import React from 'react'
import RecentPosts from "@/components/RecentPosts"
import MostPopularPosts from './MostPopularPosts'
import FeaturedPosts from './FeaturedPosts'

export default function BlogContainer({category}:{category?:string}) {
  return (
    <section className='py-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          <RecentPosts />
          <div className='md:w-[40%] flex flex-col items-start gap-8'>
            <MostPopularPosts />
            {!category && <FeaturedPosts />}
          </div>
        </div>
      </section>
  )
}
