import NavBar from "@component/components/navbar/navbar";
import Image from "next/image";
import { HeroSection } from "./sections/hero";
import { StatsSection } from "./sections/stats";

export default function Home() {
  return (
    <main className="bg-white h-full">
      <NavBar />
      <HeroSection />
      <StatsSection />
    </main>
  );
}
