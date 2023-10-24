import NavBar from "@component/components/navbar/navbar";
import { HeroSection } from "./sections/hero";
import { StatsSection } from "./sections/stats";
import { WorkWithUs } from "./sections/work-with-us";
import { CustomerReviews } from "./sections/customer-reviews";
import { PlansSection } from "./sections/plans";
import { BlogSection } from "./sections/blog";
import Footer from "@component/components/footer/footer";

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
      <Footer />
    </main>
  );
}
