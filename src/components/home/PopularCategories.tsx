import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const categories = ["food", "travel", "fashion", "coding", "politics", "sports"];

export default function PopularCategories() {
  return (
    <section className="py-8">
      <h1 className="title-text">Popular Categories</h1>
      <div className="py-8 flex flex-wrap items-center gap-7 md:gap-8">
        {categories.map((item, index) => (
          <Button
            key={index}
            size="xl"
            variant="outline"
            className="capitalize text-md"
            asChild
          >
            <Link href={`/blog/category/${item}`}>{item}</Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
