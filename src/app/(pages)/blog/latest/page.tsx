import LatestPosts from "@/components/LatestPosts";
import { BlogPagination } from "@/components/utility/BlogPagination";
import React from "react";

export default function LatestBlogPage() {
  return (
    <>
      <LatestPosts limit={9} offset={0} />
      <BlogPagination href="/blog/recent" currentPage={1}  />
    </>
  );
}
