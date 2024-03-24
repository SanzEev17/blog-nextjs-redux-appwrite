import MostPopularPosts from "@/components/MostPopularPosts";
import RecentPosts from "@/components/RecentPosts";
import Hero from "@/components/home/Hero";
import PopularCategories from "@/components/home/PopularCategories";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularCategories />
      <MostPopularPosts />
      <RecentPosts />
    </>
  );
}
