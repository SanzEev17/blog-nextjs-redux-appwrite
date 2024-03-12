import React from 'react'
import { featuredPosts } from '@/constants/data'
import BlogList from './utility/BlogList'

export default function FeaturedPosts() {
  return (
    <div className='w-full'>
      <h1 className='title-text'>Featured Posts</h1>
      <div className='py-6 flex flex-col gap-6'>
        {featuredPosts.map((item, index) => (
          <BlogList
            key={index}
            title={item.title}
            category={item.category}
            author={item.author}
            date={item.date}
          />
        ))}
      </div>
    </div>
  )
}
