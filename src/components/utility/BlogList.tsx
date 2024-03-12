import React from 'react'
import Link from 'next/link'

type blogListType = {
    title:string
    category:string
    author:string
    date:string
}

export default function BlogList({title, category, author, date}:blogListType) {
    return (
        <div className='flex flex-col justify-center gap-1'>
            <div className='border bg-accent text-sm font-bold px-2 p-0.5 rounded-full w-fit'>
                {category}
            </div>
            <Link href="" className='text-lg font-bold'>
                {title}
            </Link>
            <div>
                <span className='text-sm font-bold'>{author} </span>
                {date}
            </div>
        </div>
    )
}
