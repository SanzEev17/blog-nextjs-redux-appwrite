import RecentPosts from "@/components/RecentPosts";
import { BlogPagination } from "@/components/utility/BlogPagination";
import React from "react";

export default function RecentBlogPage({
  params,
}: {
  params: { recentPage: number };
}) {
  const recentPage = Number(params.recentPage);
  return (
    <>
      <RecentPosts limit={9} offset={(recentPage - 1) * 9} />
      <BlogPagination href="/blog/recent" currentPage={recentPage} />
    </>
  );
}
