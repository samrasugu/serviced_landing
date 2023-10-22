import NavBar from "@component/components/navbar/navbar";
import Image from "next/image";
import { HeroSection } from "./sections/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <NavBar />
      <HeroSection />
    </main>
  );
}
