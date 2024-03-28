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
  <div key={title} className="flex flex-row gap-4 rounded-lg shadow-md">
    <div className="w-full md:max-w-[40%] md:min-w-[40%]">
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
    <div className="flex flex-col justify-center gap-2 text-muted-foreground text-sm">
      <Link
        href={`/blo/category/${category}`}
        className="uppercase font-bold hover:text-blue-500"
      >
        {category}
      </Link>
      <Link
        href={`/blog/${slug}`}
        className="text-lg text-primary line-clamp-2 hover:text-gray-300"
      >
        {title}
      </Link>
      <div>Uploaded on: {uploadDate}</div>
      <div className="font-bold">Author: {author}</div>
    </div>
  </div>
);

export default BlogList;
