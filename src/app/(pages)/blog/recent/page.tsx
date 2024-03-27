import RecentPosts from "@/components/RecentPosts";
import { BlogPagination } from "@/components/utility/BlogPagination";
import React from "react";

export default function RecentBlogPage() {
  return (
    <>
      <RecentPosts limit={9} offset={0} />
      <BlogPagination href="/blog/recent" currentPage={1}  />
    </>
  );
}
