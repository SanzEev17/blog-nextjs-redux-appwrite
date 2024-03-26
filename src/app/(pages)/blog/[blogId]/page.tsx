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
  blogViews: number;
}
export default function BlogPage({ params }: { params: { blogId: string } }) {
  const router = useRouter();
  const user = useAppSelector((state) => state.authReducer.userData);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  async function deleteBlog() {
    if (blog) {
      await blogService.deletePost(blog.$id);
      await blogService.deleteImage(blog.blogImage);
      router.replace("/");
    }
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
  }, [params.blogId, user?.$id, router]);
  //* If author is not the viewer add views by 1
  blog &&
    user?.$id !== blog.userId &&
    blogService.updateViews(params.blogId, blog.blogViews + 1);
  return (
    <section className="py-20">
      {loading || !blog ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <section className="flex items-center justify-center">
          <div className="max-w-4xl bg-primary-foreground rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-8 py-6 border-b border-gray-200">
              {/* Blog Title */}
              <div className="flex flex-col gap-2">
                <h1 className="title-text font-bold">{blog.title}</h1>
                <Link
                  href={`/blog/category/${blog.category}`}
                  className="px-2 py-0.5 text-sm capitalize w-fit rounded-full bg-blue-500 text-gray-100 hover:bg-blue-400"
                >
                  {blog.category}
                </Link>
                <div className="text-primary">Author: {blog.author}</div>
                <div className="text-muted-foreground">
                  Uploaded: {blog.uploadDate}
                </div>
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
              <p className="text-muted-foreground">{blog.content}</p>
            </div>
            {/* Edit and Delete Buttons */}
            {user && user.$id === blog.userId && (
              <div className="px-8 py-4 flex gap-3">
                <Button asChild>
                  <Link href={`update/${blog.$id}`}>Edit</Link>
                </Button>
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
