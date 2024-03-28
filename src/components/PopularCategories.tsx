import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { categories } from "@/constants/data";

export default function PopularCategories() {
  return (
    <section className="py-8">
      <h1 className="title-text">Popular Categories</h1>
      <div className="py-8 flex flex-wrap items-center gap-7 md:gap-8">
        {categories.slice(0, 6).map((item, index) => (
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
