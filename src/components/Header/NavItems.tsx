"use client";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutBtn from "./LogoutBtn";

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
    isAuthenticated && (
      <>
        {/* Desktop View */}
        <div
          className="hidden px-5 py-2 md:border-2 border-gray-700 rounded-full 
          md:flex flex-col md:flex-row justify-center items-center gap-7"
        >
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
        {/* Mobile View  */}
        {/* <div className="w-full text-lg md:hidden fixed right-0 top-1/2 transform -translate-y-1/2 bg-primary-foreground flex flex-col justify-center items-center gap-7 h-full">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={`/${item.slug}`}
              className="hover:text-red-600"
            >
              {item.title}
            </Link>
          ))}
        </div> */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {navItems.map((item) => (
                <>
                  <DropdownMenuItem key={item.title} asChild>
                    <Link href={`/${item.slug}`} className="w-full">
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </>
              ))}
              <DropdownMenuItem>
                <LogoutBtn />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </>
    )
  );
}
