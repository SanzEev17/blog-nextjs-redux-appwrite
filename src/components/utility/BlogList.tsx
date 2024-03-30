import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

type BlogListProps = {
  title: string;
  slug: string;
  category: string;
  author: string;
  uploadDate: string;
  blogImage: string;
};

const BlogList: React.FC<BlogListProps> = ({
  title,
  slug,
  category,
  author,
  uploadDate,
  blogImage,
}) => (
  <div key={title} className="flex flex-row gap-4">
    {/* Blog Image */}
    <div className="w-full max-w-[40%] min-w-[40%]">
      <AspectRatio ratio={4 / 3}>
        <Image
          src={blogImage}
          alt="Blog Post Image"
          layout="fill"
          sizes="(max-width: 768px) 100vw, (min-width: 768px) 40%"
          className="rounded-lg"
        />
        <div className="darker-shade"></div>
      </AspectRatio>
    </div>
    {/* Blog Items */}
    <div className="flex flex-col justify-center gap-1 md:gap-2 text-muted-foreground text-sm">
      {/* Blog Category */}
      <Link
        href={`/blog/category/${category}`}
        className="text-xs md:text-md uppercase font-bold hover:text-blue-500"
      >
        {category}
      </Link>
      {/* Blog Title  */}
      <Link
        href={`/blog/${slug}`}
        className="md:text-lg text-primary line-clamp-2 hover:text-blue-500"
      >
        {title}
      </Link>
      <div className="hidden md:block">Uploaded on: {uploadDate}</div>
      <div className="text-xs md:text-sm font-bold">Author: {author}</div>
    </div>
  </div>
);

export default BlogList;
