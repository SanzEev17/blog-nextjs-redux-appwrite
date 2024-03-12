import React from 'react'
import { recentPosts } from '@/constants/data'
import Link from 'next/link'
import BlogCard from './BlogCard'
import { Button } from './ui/button'


export default function RecentPosts() {
  return (
    <div className='w-full'>
      <h1 className='title-text'>Recent Posts</h1>
      <div className='py-6 w-full flex flex-col gap-6'>
        {recentPosts.map((items, index) => (
          <BlogCard
            key={index}
            title={items.title}
            category={items.category}
            date={items.date}
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
