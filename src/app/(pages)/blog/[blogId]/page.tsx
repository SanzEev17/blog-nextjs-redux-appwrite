"use client";
import blogService from "@/appwrite/blogConfig";
import { Button } from "@/components/ui/button";
import DialogButton from "@/components/utility/DialogButton";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
export default function BlogPage({ params }: { params: { blogId: string } }) {
  const router = useRouter();
  const userId = useAppSelector((state) => state.authReducer.userData);
  const [blog, setBlog] = useState<Blog>({
    $id: "",
    title: "",
    blogImage: "",
    category: "",
    content: "",
    uploadDate: "",
    author: "",
    userId: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  async function deleteBlog() {
    await blogService.deletePost(blog.$id);
    await blogService.deleteImage(blog.blogImage);
    router.replace("/");
  }
  useEffect(() => {
    let isMounted = true;
    async function getPost() {
      try {
        setLoading(true);
        const post = await blogService.getPost(params.blogId);
        if (isMounted && post) {
          setBlog(post);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setError("Failed to fetch blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    getPost();

    return () => {
      isMounted = false;
    };
  }, [params.blogId, router, blog.$id, blog.blogImage]);
  return (
    <section className="py-20">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <section className="flex items-center justify-center">
          <div className="max-w-4xl bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6 border-b border-gray-200">
              {/* Blog Title */}
              <div className="flex flex-col gap-2">
                <h1 className="title-text font-bold text-gray-800">
                  {blog.title}
                </h1>
                <Link
                  href={`/blog/category/${blog.category}`}
                  className="capitalize hover:text-blue-500"
                >
                  {blog.category}
                </Link>
                <div className="text-gray-800">Author: {blog.author}</div>
                <div className="text-gray-600">Uploaded: {blog.uploadDate}</div>
              </div>
              {/* Blog Image */}
              <div className="w-full max-w-36 md:max-w-80 min-h-32 md:min-h-60 rounded-md overflow-hidden relative">
                <Image
                  src={blogService.getImagePreview(blog.blogImage).href}
                  alt={blog.title}
                  fill
                  quality={100}
                />
                <div className="darker-shade"></div>
              </div>
            </div>
            {/* Blog Content */}
            <div className="px-8 py-6">
              <p className="text-gray-700">{blog.content}</p>
            </div>
            {/* Edit and Delete Buttons */}
            {userId && userId.$id === blog.userId && (
              <div className="px-8 py-4 flex gap-3">
                <Button>Edit</Button>
                <DialogButton
                  buttonVariant="destructive"
                  onClick={() => deleteBlog()}
                >
                  Delete
                </DialogButton>
              </div>
            )}
          </div>
        </section>
      )}
    </section>
  );
}
