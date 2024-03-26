"use client";
import React, { useEffect, useState } from "react";
import BlogList from "./utility/BlogList";
import BlogImageCard from "./utility/BlogImageCard";
import blogService from "@/appwrite/blogConfig";

interface PopularBlog {
  $id:string;
  title: string;
  category: string;
  author: string;
  uploadDate: string;
  blogImage: string;
}
export default function MostPopularPosts() {
  const [blogs, setBlogs] = useState<PopularBlog[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function getAllBlogs() {
      try {
        setLoading(false);
        const popularBlogs = await blogService.getPopularPosts();
        popularBlogs && setBlogs(popularBlogs.documents);
      } catch (error: any) {
        setError(error.message);
      }
    }
    getAllBlogs();
  }, []);
  console.log(blogs)
  if (loading) {
    return <div>Loading popular blogs...</div>;
  }
  return error ? (
    <div>{error}</div>
  ) : blogs.length === 0 ? (
    <div>No blogs available...</div>
  ) : loading ? (
    <div>Loading popular posts...</div>
  ) : (
    <div className="w-full">
      <h1 className="title-text">Most Popular</h1>
      <div className="py-6 flex flex-col md:flex-row md:gap-8">
        <BlogImageCard
          title={blogs[0].title}
          slug={blogs[0].$id}
          category={blogs[0].category}
          blogImage={blogService.getImagePreview(blogs[0].blogImage).href}
        />
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          {blogs.slice(1).map((post, index) => (
            <BlogList
              key={index}
              title={post.title}
              slug={blogs[0].$id}
              category={post.category}
              author={post.author}
              uploadDate={post.uploadDate}
              blogImage={blogService.getImagePreview(post.blogImage).href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
