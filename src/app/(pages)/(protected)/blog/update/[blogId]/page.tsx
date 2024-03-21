"use client";
import blogService from "@/appwrite/blogConfig";
import BlogPostForm from "@/components/BlogPostForm";
import React, { useEffect, useState } from "react";

interface Blog {
  $id: string;
  title: string;
  blogImage: string;
  category: string;
  content: string;
  uploadDate: string;
  author: string;
  userId: string;
}
export default function BlogUpdatePage({
  params,
}: {
  params: { blogId: string };
}) {
  const [blog, setBlog] = useState<Blog | null>();
  const [error, setError] = useState<string>("");
  useEffect(() => {
    try {
      params.blogId &&
        blogService.getPost(params.blogId).then((data) => setBlog(data));
    } catch (error: any) {
      setError(error);
    }
  }, [params.blogId]);
  return error ? (
    <div>{error}</div>
  ) : blog ? (
    <BlogPostForm blogData={blog} />
  ) : null;
}
