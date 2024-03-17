import React from "react";
import Image, { StaticImageData } from "next/image";
import blogService from "@/appwrite/blogConfig";
import Link from "next/link";

interface cardType {
  $id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  featuredImage: string;
};

export default function BlogCard({
  $id,
  title,
  category,
  author,
  date,
  featuredImage,
}: cardType) {
  return (
    <div className="w-full flex items-center gap-4">
      <div
        className="
                    w-full
                    max-w-36
                    md:max-w-80
                    min-h-32
                    md:min-h-60
                    rounded-md
                    overflow-hidden
                    relative"
      >
        <Image
          // src={blogService.getImagePreview(featuredImage).toString()}
          src=""
          alt={title}
          fill
          quality={100}
        />
        <div className="darker-shade"></div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-xs lg:text-md uppercase text-blue-700">
          {category}
        </div>
        <h1 className="title-text">{title}</h1>
        <div className="font-bold">
          {author}
          <span className="text-gray-600"> {date}</span>
        </div>
        <Link href={`/blog/${$id}`}>Read more</Link>
      </div>
    </div>
  );
}
