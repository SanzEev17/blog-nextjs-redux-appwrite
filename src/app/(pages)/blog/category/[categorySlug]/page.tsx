import BlogContainer from "@/components/BlogContainer";
import React from "react";

type params = {
  categorySlug: string;
};

export default function CategoryPage({
  params,
}: {
  params: { categorySlug: string };
}) {
  return (
    <section className="py-20">
      <div>
        <h1 className="title-text py-4 bg-blue-300 text-center rounded-lg capitalize">
          {params.categorySlug} Blog
        </h1>
        <BlogContainer category={params.categorySlug} />
      </div>
    </section>
  );
}
