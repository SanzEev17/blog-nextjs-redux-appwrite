import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

const categories = ["Food", "Travel", "Fashion", "Coding", "Politics"]

export default function PopularCategories() {
  return (
    <section className='py-8'>
        <h1 className='title-text'>Popular Categories</h1>
        <div className='py-8 flex flex-wrap items-center gap-7 md:gap-8'>
            {categories.map((item, index)=>(
              <Button key={index} size="xl" variant="outline" className='text-md' asChild>
                <Link  href="">{item}</Link>
              </Button>
            ))}
        </div>
    </section>
  )
}
