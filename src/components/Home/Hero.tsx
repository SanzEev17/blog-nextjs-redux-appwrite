import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import heroImg from "../../../public/images/hero.jpg"
import { Button } from '../ui/button'

export default function Hero() {
    return (
        <section className='h-screen flex flex-col justify-center items-center gap-6'>
            <div className='pt-8 text-3xl lg:text-[3.5rem] leading-normal tracking-wide'>
                <span className='font-bold'>Hey Blogger here!</span> Discover my stories and creative ideas
            </div>
            <div className='flex flex-col-reverse lg:flex-row gap-8'>
                <div className='w-full flex flex-col justify-center items-start gap-5'>
                    <h1 className='title-text'>
                        Some title goes here brrr........
                    </h1>
                    <p className='text-gray-600 text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nisi. Natus, quaerat magnam, quo odit quasi consequatur ad repudiandae totam, a voluptate cupiditate ipsam atque rem ducimus quae ut ea nostrum veritatis! Molestiae, modi?
                    </p>
                    <Button variant="outline" asChild>
                        <Link href="">
                            Read More
                        </Link>
                    </Button>
                </div>
                <div className='w-full rounded-md overflow-hidden relative h-60 lg:min-h-96'>
                    <Image
                        src={heroImg}
                        alt='Hero'
                        fill
                        quality={100}
                    />
                    <div className='darker-shade'></div>
                </div>
            </div>
        </section>
    )
}
