"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./utility/BlogCard";
import blogService from "@/appwrite/blogConfig";

interface Blog {
  $id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  userId:string;
  uploadDate: string;
  blogImage: string;
  blogViews: number;
}
export default function RecentPosts({
  category,
  authorId,
  limit,
  offset,
}: {
  category?: string;
  authorId?: string;
  limit: number;
  offset: number;
}) {
  
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function getAllBlogs() {
      try {
        setLoading(false);
        const posts = category
          ? await blogService.getCategory(category)
          : authorId
          ? await blogService.getUserPosts(authorId)
          : await blogService.getAllPosts(limit, offset);
        posts && setBlogs(posts.documents);
      } catch (error: any) {
        setError(error.message);
      }
    }
    getAllBlogs();
  }, [category, authorId, limit, offset]);
  if (loading) {
    return <div>Loading latest posts...</div>;
  }
  return (
    <div className="py-6 grid md:grid-cols-3 gap-4 md:gap-8">
      {blogs.map((item, index) => (
        <BlogCard
          key={index}
          $id={item.$id}
          title={item.title}
          content={item.content}
          category={item.category}
          author={item.author}
          authorId={item.userId}
          uploadDate={item.uploadDate}
          blogImage={blogService.getImagePreview(item.blogImage).href}
          blogViews={item.blogViews}
        />
      ))}
      <div>{error}</div>
    </div>
  );
}
