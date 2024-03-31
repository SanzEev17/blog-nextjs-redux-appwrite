"use client";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutBtn from "./LogoutBtn";
import { DarkModeToggle } from "../utility/DarkModeToggle";

export default function NavItems() {
  const pathname = usePathname();
  const isAuthenticated = useAppSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const authorId = useAppSelector((state) => state.authReducer.userData?.$id);
  const navItems = [
    { title: "Home", slug: "/" },
    { title: "My Blogs", slug: `blog/author/${authorId}` },
    { title: "Create", slug: "blog/create" },
    { title: "Latest Blogs", slug: "blog/latest" },
  ];

  return (
    isAuthenticated && (
      <>
        {/* Desktop View */}
        <div
          className="hidden px-5 py-2 md:border-2 border-gray-700 rounded-full 
          md:flex flex-col md:flex-row justify-center items-center gap-7"
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`/${item.slug}`}
              className={`${
                pathname === `/${item.slug}`
                  ? "text-active"
                  : pathname === item.slug && "text-active"
              } hover:text-active`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        {/* Mobile View  */}
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
              {navItems.map((item, index) => (
                <div key={index}>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/${item.slug}`}
                      className={`${
                        pathname === `/${item.slug}`
                          ? "text-active"
                          : pathname === item.slug && "text-active"
                      } w-full`}
                    >
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </div>
              ))}
              <DropdownMenuItem className="flex justify-between">
                <LogoutBtn />
                <DarkModeToggle />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </>
    )
  );
}
