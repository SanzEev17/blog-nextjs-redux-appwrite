import BlogContainer from "@/components/BlogContainer";
import Hero from "@/components/home/Hero";
import PopularCategories from "@/components/home/PopularCategories";

export default function Home() {
  return (
    <main className="px-8 lg:px-48">
      <Hero/>
      <PopularCategories/>
      <BlogContainer />
    </main>
  );
}
