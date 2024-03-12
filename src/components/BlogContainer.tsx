import React from 'react'
import RecentPosts from "@/components/RecentPosts"
import MostPopular from './MostPopular'
import FeaturedPosts from './FeaturedPosts'

export default function BlogContainer() {
  return (
    <section className='py-8'>
        <div className='flex gap-8'>
          <RecentPosts />
          <div className='w-[40%] flex flex-col items-start gap-8'>
            <MostPopular />
            <FeaturedPosts />
          </div>
        </div>
      </section>
  )
}
