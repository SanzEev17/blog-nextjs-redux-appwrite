import LatestPosts from "@/components/LatestPosts";
import React from "react";

export default function AuthorBlogsPage({
  params,
}: {
  params: { authorId: string };
}) {
  return (
    <section className="py-20">
      <div>
        <h1 className="title-text py-4 bg-accent text-center rounded-lg capitalize">
          {params.authorId} Blogs
        </h1>
        <LatestPosts authorId={params.authorId} limit={9} offset={0} />
      </div>
    </section>
  );
}
