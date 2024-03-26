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
      <Link href={`/blog/${slug}`}>
        <AspectRatio ratio={14 / 9}>
          <Image
            src={blogImage}
            alt="Blog Post Image"
            layout="fill"
            objectFit="cover"
            className="h-full w-full object-cover"
          />
          <div className="dark-gradient"></div>
          <div className="p-6 absolute bottom-0">
            <Link
              href={`/blo/category/${category}`}
              className="text-sm uppercase font-bold text-muted-foreground hover:text-blue-500"
            >
              {category}
            </Link>
            <h3 className="text-2xl text-primary font-bold">{title}</h3>
          </div>
        </AspectRatio>
      </Link>
    </div>
  );
}
