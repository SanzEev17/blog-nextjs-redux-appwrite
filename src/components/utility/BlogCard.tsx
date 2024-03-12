import React from 'react'
import Image from 'next/image'
import heroImg from "../../../public/images/hero.jpg"
import Link from 'next/link'

type cardType = {
    title: string,
    category: string,
    author: string,
    date: string,
    imgPath?: string
}

export default function BlogCard({ title, category, author, date, imgPath }: cardType) {
    return (
        <div className='w-full flex items-center gap-4'>
            <div
                className="
                    w-full
                    max-w-36
                    md:max-w-80
                    min-h-32
                    md:min-h-60
                    rounded-md
                    overflow-hidden
                    relative"
            >
                <Image
                    src={heroImg}
                    alt='Blog'
                    fill
                    quality={100}
                />
                <div className='darker-shade'></div>
            </div>
            <div className='flex flex-col justify-center'>
                <div className='text-xs lg:text-md uppercase text-blue-700'>
                    {category}
                </div>
                <h1 className='title-text'>
                    {title}
                </h1>
                <div className='font-bold'>
                    {author}
                    <span className='text-gray-600'> {date}</span>
                </div>
                <Link href="">Read more</Link>
            </div>
        </div>
    )
}
