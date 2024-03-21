import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import blogService from "@/appwrite/blogConfig";

interface CardType {
  $id: string;
  title: string;
  category: string;
  author: string;
  uploadDate: string;
  blogImage: string;
}

export default function BlogCard({
  $id,
  title,
  category,
  author,
  uploadDate,
  blogImage,
}: CardType) {
  return (
    <div className="w-full flex items-center gap-4">
      <div className="w-full max-w-36 md:max-w-80 min-h-32 md:min-h-60 rounded-md overflow-hidden relative">
        <Image
          src={blogService.getImagePreview(blogImage).href}
          alt={title}
          fill
          quality={100}
        />
        <div className="darker-shade"></div>
      </div>
      <div className="flex flex-col justify-center">
        <Link
          href={`/blog/category/${category.toLowerCase()}`}
          className="uppercase border bg-accent text-xs md:text-md font-bold px-2 p-0.5 rounded-full w-fit hover:bg-primary-foreground hover:text-blue-500"
        >
          {category}
        </Link>
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="font-bold">
          {author}
          <span className="text-muted-foreground"> - {uploadDate}</span>
        </div>
        <Link
          href={`/blog/${$id}`}
          className="text-muted-foreground hover:text-blue-600"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
