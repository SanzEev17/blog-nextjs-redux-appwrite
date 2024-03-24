"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogCard from "./utility/BlogCard";
import { Button } from "./ui/button";
import blogService from "@/appwrite/blogConfig";

interface Blog {
  $id: string;
  $createdAt: string;
  title: string;
  content: string;
  category: string;
  author: string;
  blogImage: string;
}
export default function RecentPosts({category}:{category?:string}) {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function getAllBlogs() {
      try {
        setLoading(false);
        const posts = category
          ? await blogService.getCategory(category)
          : await blogService.getAllPosts();
        posts && setBlogs(posts.documents);
      } catch (error: any) {
        setError(error.message);
      }
    }
    getAllBlogs();
  }, [category]);
  if (loading) {
    return <div>Loading latest posts...</div>;
  }
  return (
    <div className="w-full py-8">
      <h1 className="title-text">Recent Posts</h1>
      <div className="py-6 grid grid-cols-3 gap-8">
        {blogs.map((item: Blog, index) => (
          <BlogCard
            key={index}
            $id={item.$id}
            title={item.title}
            content={item.content}
            category={item.category}
            author={item.author}
            uploadDate={item.$createdAt.slice(0, 10)}
            blogImage={item.blogImage}
          />
        ))}
        <div>{error}</div>
      </div>
      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="">Previous</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="">Next</Link>
        </Button>
      </div>
    </div>
  );
}
