import React from 'react'
import { recentPosts } from '@/constants/data'
import Link from 'next/link'
import BlogCard from './utility/BlogCard'
import { Button } from './ui/button'


export default function RecentPosts() {
  return (
    <div className='w-full'>
      <h1 className='title-text'>Recent Posts</h1>
      <div className='py-6 w-full flex flex-col gap-6'>
        {recentPosts.map((item, index) => (
          <BlogCard
            key={index}
            title={item.title}
            category={item.category}
            author={item.author}
            date={item.date}
          />
        ))}
      </div>
      <div className='flex justify-between'>
        <Button variant="outline" asChild>
            <Link href="">Previous</Link>
        </Button>
        <Button variant="outline" asChild>
            <Link href="">Next</Link>
        </Button>
      </div>
    </div>
  )
}
