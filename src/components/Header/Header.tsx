import Image from 'next/image'
import React from 'react'
import blogImage from "../../../public/images/blog.png"
import NavItems from './NavItems'
import AuthButton from './AuthButton'
import Link from 'next/link'


export default function Header(): React.JSX.Element {
  return (
    <header className="z-10 bg-gray-100 fixed w-full px-24 py-3 flex justify-between items-center">
      <Link href="/" className="flex justify-center items-center gap-3">
        <Image src={blogImage} alt="blog" width={50} height={50} className="rounded-full" />
        <span className="font-bold text-xl">Blog</span>
      </Link>
      <NavItems/>
      <AuthButton/>
    </header>
  );
}
