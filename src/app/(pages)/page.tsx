import MostPopularPosts from "@/components/MostPopularPosts";
import RecentPosts from "@/components/RecentPosts";
import Hero from "@/components/Hero";
import PopularCategories from "@/components/PopularCategories";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularCategories />
      <MostPopularPosts />
      <div className="w-full py-8">
        <div className="flex justify-between items-center">
          <h1 className="title-text">Recent Posts</h1>
          <Button variant="outline" asChild>
            <Link href="/blog/recent">View all</Link>
          </Button>
        </div>
        <RecentPosts limit={6} offset={0} />
      </div>
    </>
  );
}
