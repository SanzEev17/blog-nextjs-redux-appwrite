import LatestPosts from "@/components/LatestPosts";
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
      <LatestPosts limit={9} offset={(recentPage - 1) * 9} />
      <BlogPagination href="/blog/recent" currentPage={recentPage} />
    </>
  );
}
