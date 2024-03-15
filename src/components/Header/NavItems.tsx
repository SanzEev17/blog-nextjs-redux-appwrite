import Link from 'next/link'
import React from 'react'


const navItems = ["home", "about", "contact"]
export default function NavItems() {
  return (
    <div className="px-5 py-2 md:border-2 border-gray-700 rounded-full flex flex-col md:flex-row justify-center items-center gap-7">
        {navItems.map(item => (
          <Link key={item} href={`/${item}`} className="hover:text-red-600 capitalize">
            {item}
          </Link>
        ))}
      </div>
  )
}
