import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

export default function BlogImageCard({
  title,
  category,
  slug,
  blogImage,
}: {
  title: string;
  category: string;
  slug: string;
  blogImage: string;
}) {
  return (
    <div className="w-full md:w-1/2 rounded-lg shadow-md overflow-hidden">
      <AspectRatio ratio={14 / 9}>
        <Image
          src={blogImage}
          alt="Blog Post Image"
          layout="fill"
          sizes="(max-width: 768px) 100vw, (min-width: 768px) 50%"
          className="h-full w-full object-cover"
        />
        <div className="dark-gradient"></div>
        <div className="p-6 flex flex-col absolute bottom-0">
          <Link
            href={`/blog/category/${category}`}
            className="text-xs md:text-sm uppercase font-bold text-muted-foreground hover:text-blue-500"
          >
            {category}
          </Link>
          <Link
            href={`/blog/${slug}`}
            className="text-lg md:text-2xl text-gray-100 font-bold hover:text-gray-300"
          >
            {title}
          </Link>
        </div>
      </AspectRatio>
    </div>
  );
}
