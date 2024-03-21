"use client";
import blogService from "@/appwrite/blogConfig";
import BlogPostForm from "@/components/BlogPostForm";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";

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
  const router = useRouter();
  const userData = useAppSelector((state) => state.authReducer.userData?.$id);
  const [loading, setLoading] = useState<boolean>(true);
  const [blog, setBlog] = useState<Blog | null>();
  const [error, setError] = useState<string>("");
  useEffect(() => {
    try {
      params.blogId &&
        blogService
          .getPost(params.blogId)
          .then((data) => setBlog(data))
          .finally(() => setLoading(false));
    } catch (error: any) {
      setError(error);
    }
  }, [params.blogId]);
  if (userData !== blog?.userId) {
    router.replace(`/blog/${params.blogId}`);
  }

  return error ? (
    <div>{error}</div>
  ) : loading ? (
    <div>Loading...</div>
  ) : blog ? (
    <BlogPostForm blogData={blog} />
  ) : null;
}
