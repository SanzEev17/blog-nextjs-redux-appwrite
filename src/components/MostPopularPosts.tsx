import React from "react";
import { popularPosts } from "@/constants/data";
import BlogList from "./utility/BlogList";
import Image from "next/image";
import image from "../../public/images/hero.jpg";
import { AspectRatio } from "./ui/aspect-ratio";

export default function MostPopularPosts() {
  return (
    <div className="w-full">
      <h1 className="title-text">Most Popular</h1>
      <div className="py-6 flex flex-col md:flex-row md:gap-8">
        <div className="w-full md:w-1/2 rounded-lg shadow-md overflow-hidden">
          <AspectRatio ratio={14 / 9}>
            <Image
              src={image}
              alt="Blog Post Image"
              layout="fill"
              objectFit="cover"
              className="h-full w-full object-cover"
            />
            <div className="dark-gradient"></div>
            <div className="p-6 absolute bottom-0">
              <p className="text-sm uppercase font-bold text-muted-foreground">
                {popularPosts[0].category}
              </p>
              <h3 className="text-2xl text-primary font-bold">
                {popularPosts[0].title}
              </h3>
            </div>
          </AspectRatio>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          {popularPosts.slice(1).map((post, index) => (
            <BlogList 
             key={index}
             title={post.title}
             category={post.category}
             author={post.author}
             uploadDate={post.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
