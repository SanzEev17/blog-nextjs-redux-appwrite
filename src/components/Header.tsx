import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import blogImage from "../../public/images/blog.png"
import { Button } from './ui/button'

const navItems = ["home", "about", "contact"]
export default function Header(): React.JSX.Element {
  return (
    <header className="fixed w-full px-24 py-3 flex justify-between items-center">
      <div className="flex justify-center items-center gap-3">
        <Image src={blogImage} alt="blog" width={50} height={50} className="rounded-full" />
        <span className="font-bold text-xl">Blog</span>
      </div>
      <div className="px-5 py-2 lg:border-2 border-gray-700 rounded-full flex flex-col lg:flex-row justify-center items-center gap-7">
        {navItems.map(item => (
          <Link key={item} href={`/${item}`} className="hover:text-red-600 capitalize">
            {item}
          </Link>
        ))}
      </div>
      <div>
        <Button variant="outline" asChild>
          <Link href="/login">
            Login
          </Link>
        </Button>
      </div>
    </header>
  );
}
