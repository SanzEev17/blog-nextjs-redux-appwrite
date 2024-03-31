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
import { AspectRatio } from "../ui/aspect-ratio";

interface CardType {
  $id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  authorId: string;
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
  authorId,
  uploadDate,
  blogImage,
  blogViews,
}: CardType) {
  return (
    <Card>
      <CardHeader>
        <div className="w-full h-full md:max-w-80 rounded-md overflow-hidden relative">
          <Link href={`/blog/${$id}`}>
            <AspectRatio ratio={5 / 3}>
              <Image
                src={blogImage}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 768px) 20rem"
                quality={80}
              />
              <div className="darker-shade"></div>
            </AspectRatio>
          </Link>
          <Link
            href={`/blog/category/${category}`}
            className="px-2 py-0.5 absolute bottom-2 left-2 uppercase text-xs font-bold border bg-primary-foreground hover:bg-accent rounded-full"
          >
            {category}
          </Link>
        </div>

        <Link href={`/blog/${$id}`}>
          <CardTitle className="pt-2 text-lg line-clamp-2 hover:text-blue-500">
            {title}
          </CardTitle>
        </Link>
        <CardDescription className="text-xs md:text-sm flex justify-between items-center">
          <span className="font-bold">Uploaded on: {uploadDate}</span>
          <span>{blogViews} Views</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm md:text-base line-clamp-3">{content}</p>
      </CardContent>
      <CardFooter>
        <div className="text-sm md:text-base font-bold">
          <span>Author:&nbsp;</span>
          <Link
            href={`blog/author/${authorId}`}
            className="hover:text-blue-500"
          >
            {author}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
