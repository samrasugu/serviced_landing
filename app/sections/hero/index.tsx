"use client";

import React from "react";
import WorkImage from "../../../public/assets/work.png";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="h-screen pt-24">
      <div className="flex flex-col md:flex-row px-4 md:py-24 md:px-16">
        <div className="flex flex-col md:w-1/2 w-full items-start text-left gap-10">
          <h1 className="text-6xl md:text-8xl text-primary-black font-medium">
            Manage all your daily tasks at once,{" "}
            <span className="text-primary-orange">easily</span>
          </h1>
          <p className="text-primary-grey text-2xl">
            Stay focused and motivated with visually appealing user interface
            and the reminders feature helps you to focus on what{"'"}s important
            here and now without missing anything.
          </p>
          <button className="py-3 px-10 text-white text-xl bg-orange-500 rounded-2xl shadow-md hover:scale-105 duration-500">
            Start for free
          </button>
        </div>
        <div className="flex-col md:w-1/2">
          <Image src={WorkImage} alt="WorkImage" width={650} />
        </div>
      </div>
    </div>
  );
}
