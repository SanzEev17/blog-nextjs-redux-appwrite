import Hero from "@/components/Hero";
import PopularCategories from "@/components/PopularCategories";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-8 lg:px-48">
      <Hero/>
      <PopularCategories/>
    </main>
  );
}
