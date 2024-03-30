"use client";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import React from "react";

export default function NavItems() {
  const isAuthenticated = useAppSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const authorId = useAppSelector((state) => state.authReducer.userData?.$id);
  const navItems = [
    { title: "Home", slug: "/" },
    { title: "My Blogs", slug: `blog/author/${authorId}` },
    { title: "Create", slug: "blog/create" },
  ];

  return (
    <>
      {isAuthenticated && (
        <div className="px-5 py-2 md:border-2 border-gray-700 rounded-full flex flex-col md:flex-row justify-center items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={`/${item.slug}`}
              className="hover:text-red-600"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
