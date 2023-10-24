import NavBar from "@component/components/navbar/navbar";
import Image from "next/image";
import { HeroSection } from "./sections/hero";
import { StatsSection } from "./sections/stats";
import { WorkWithUs } from "./sections/work-with-us";
import { CustomerReviews } from "./sections/customer-reviews";
import { PlansSection } from "./sections/plans";
import { BlogSection } from "./sections/blog";

export default function Home() {
  return (
    <main className="bg-white h-full">
      <NavBar />
      <HeroSection />
      <StatsSection />
      <WorkWithUs />
      <CustomerReviews />
      <PlansSection />
      <BlogSection />
    </main>
  );
}
