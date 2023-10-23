import NavBar from "@component/components/navbar/navbar";
import Image from "next/image";
import { HeroSection } from "./sections/hero";
import { StatsSection } from "./sections/stats";
import { WorkWithUs } from "./sections/work-with-us";

export default function Home() {
  return (
    <main className="bg-white h-full">
      <NavBar />
      <HeroSection />
      <StatsSection />
      <WorkWithUs />
    </main>
  );
}
