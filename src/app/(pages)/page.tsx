import BlogContainer from "@/components/BlogContainer";
import Hero from "@/components/Home/Hero";
import PopularCategories from "@/components/Home/PopularCategories";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-8 lg:px-48">
      <Hero/>
      <PopularCategories/>
      <BlogContainer />
    </main>
  );
}
