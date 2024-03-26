import React from "react";
import Link from "next/link";
import Image from "next/image";
import blogService from "@/appwrite/blogConfig";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardType {
  $id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  uploadDate: string;
  blogImage: string;
  blogViews: number;
}

export default function BlogCard({
  $id,
  title,
  content,
  category,
  author,
  uploadDate,
  blogImage,
  blogViews,
}: CardType) {
  return (
    <Card>
      <CardHeader>
        <Link href={`/blog/${$id}`}>
          <div className="w-full h-full max-w-36 md:max-w-80 min-h-32 md:min-h-48 rounded-md overflow-hidden relative">
            <Link
              href={`/blog/category/${category}`}
              className="px-2 py-0.5 absolute bottom-2 left-2 z-10 uppercase text-xs font-bold border bg-primary-foreground hover:bg-gray-800 rounded-full"
            >
              {category}
            </Link>
            <Image
              src={blogService.getImagePreview(blogImage).href}
              alt={title}
              fill
              quality={100}
            />
            <div className="darker-shade"></div>
          </div>
          <CardTitle className="pt-2 text-lg line-clamp-2 hover:text-gray-300">
            {title}
          </CardTitle>
        </Link>
        <CardDescription className="flex justify-between items-center">
          <span className="font-bold">Uploaded on: {uploadDate}</span>
          <span>{blogViews} Views</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3">{content}</p>
      </CardContent>
      <CardFooter>
        <div className="font-bold">Author: {author}</div>
      </CardFooter>
    </Card>
  );
}
