import RecentPosts from "@/components/RecentPosts";
import React from "react";


export default function CategoryPage({
  params,
}: {
  params: { categorySlug: string };
}) {
  return (
    <section className="py-20">
      <div>
        <h1 className="title-text py-4 bg-accent text-center rounded-lg capitalize">
          {params.categorySlug} Blog
        </h1>
        <RecentPosts category={params.categorySlug} />
      </div>
    </section>
  );
}
