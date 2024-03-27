import RecentPosts from "@/components/RecentPosts";
import React from "react";


export default function RecentBlogPage() {
  return (
    <section className="py-20">
      <div>
        <h1 className="title-text py-4 bg-accent text-center rounded-lg capitalize">
          Latest Blogs
        </h1>
        <RecentPosts />
      </div>
    </section>
  );
}
