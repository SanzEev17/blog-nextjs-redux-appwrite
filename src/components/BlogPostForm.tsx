"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormInput from "@/components/utility/FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/store";
import blogService from "@/appwrite/blogConfig";
import { useRouter } from "next/navigation";

interface CreateBlog {
  title: string;
  blogImage: string;
  category: string;
  content: string;
}
interface BlogData extends CreateBlog {
  $id: string;
  uploadDate: string;
  blogViews:number;
}

export default function BlogPostForm({blogData}:{blogData?: BlogData}) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateBlog>({
    defaultValues: {
      title: blogData?.title || "",
      blogImage: blogData?.blogImage || "",
      category: blogData?.category || "",
      content: blogData?.content || "",
    },
  });

  const userData = useAppSelector((state) => state.authReducer.userData);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const submitBlog: SubmitHandler<CreateBlog> = async (data) => {
    setError("");
    try {
      setLoading(true);
      if (blogData) {
        const imageFile = data.blogImage[0]
          ? await blogService.uploadImage(data.blogImage[0])
          : null;

        if (imageFile) {
          await blogService.deleteImage(blogData.blogImage);
        }

        const blogPostDb = await blogService.updatePost(blogData.$id, {
          ...blogData,
          blogImage: imageFile ? imageFile.$id : undefined,
        });

        if (blogPostDb) {
          router.push(`/blog/${blogPostDb.$id}`);
        }
      } else {
        const uploadDate = new Date().toJSON().slice(0, 10)
        const imageFile = data.blogImage[0]
          ? await blogService.uploadImage(data.blogImage[0])
          : null;

        if (imageFile) {
          data.blogImage = imageFile.$id;

          if (userData) {
            data.category = data.category.toLowerCase()
            const blogPostDb = await blogService.createPost({
              ...data,
              uploadDate,
              userId: userData.$id,
              author: userData.name,
              blogViews:0
            });

            blogPostDb && router.push(`/blog/${blogPostDb.$id}`);
          }
        }
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  // const generateSlug = useCallback((value: string) => {
  //   return (
  //     value &&
  //     value
  //       .trim()
  //       .toLowerCase()
  //       .replace(/[^a-zA-Z0-9]+/g, "-")
  //   );
  // }, []);
  // useEffect(() => {
  //   const subscription = watch((value, { name }) => {
  //     if (name === "title" && typeof value.title === "string") {
  //       setValue("slug", generateSlug(value.title), { shouldValidate: true });
  //     }
  //   });

  //   return () => subscription.unsubscribe();
  // }, [watch, generateSlug, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submitBlog)}
      className="h-screen flex justify-center items-center"
    >
      <Card className="w-full md:max-w-xl">
        <CardHeader>
          <CardTitle className="title-text">
            {blogData ? "Update the blog" : "Create a blog"}
          </CardTitle>
          <CardDescription>
            Start sharing your thoughts and experiences with the world. Fill in
            the details below to create your own blog post.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <FormInput
            label="Title"
            placeholder="What's your story about?"
            {...register("title", { required: true })}
          />
          <div className="flex gap-4">
            <FormInput
              label="Blog Image"
              type="file"
              {...register("blogImage", { required: true })}
            />
            <FormInput
              label="Category"
              placeholder="Category"
              {...register("category", { required: true })}
            />
          </div>
          <FormInput
            label="Content"
            textarea
            placeholder="Share your story here..."
            className="min-h-36 resize-none"
            {...register("content", { required: true })}
          />
        </CardContent>
        <CardFooter>
          <Button variant="outline">
            {loading ? "Loading..." : blogData ? "Update" : "Publish"}
          </Button>
          <p>{error}</p>
        </CardFooter>
      </Card>
    </form>
  );
}
