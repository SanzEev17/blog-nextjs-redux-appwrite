import BlogContainer from "@/components/BlogContainer";
import Hero from "@/components/home/Hero";
import PopularCategories from "@/components/home/PopularCategories";

export default function Home() {
  return (
    <>
      <Hero/>
      <PopularCategories/>
      <BlogContainer />
    </>
  );
}
