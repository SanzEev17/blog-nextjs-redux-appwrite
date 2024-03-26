"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogCard from "./utility/BlogCard";
import { Button } from "./ui/button";
import blogService from "@/appwrite/blogConfig";

interface Blog {
  $id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  uploadDate: string;
  blogImage: string;
  blogViews:number;
}
export default function RecentPosts({ category }: { category?: string }) {
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
      <div className="flex justify-between items-center">
        <h1 className="title-text">Recent Posts</h1>
        <Button variant="outline" asChild>
          <Link href="">View all</Link>
        </Button>
      </div>
      <div className="py-6 grid grid-cols-3 gap-8">
        {blogs.map((item: Blog, index) => (
          <BlogCard
            key={index}
            $id={item.$id}
            title={item.title}
            content={item.content}
            category={item.category}
            author={item.author}
            uploadDate={item.uploadDate}
            blogImage={blogService.getImagePreview(item.blogImage).href}
            blogViews={item.blogViews}
          />
        ))}
        <div>{error}</div>
      </div>
    </div>
  );
}
