import React from "react";
import { popularPosts } from "@/constants/data";
import BlogList from "./utility/BlogList";

export default function MostPopularPosts() {
  return (
    <div className="w-full">
      <h1 className="title-text">Most Popular</h1>
      <div className="py-6 flex flex-col gap-6">
        {popularPosts.map((item, index) => (
          <BlogList
            key={index}
            title={item.title}
            category={item.category}
            author={item.author}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}
