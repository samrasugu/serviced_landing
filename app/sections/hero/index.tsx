"use client";

import React from "react";
import WorkImage from "../../../public/assets/work.png";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="h-screen pt-24">
      <div className="flex flex-col md:flex-row gap-10 px-4 md:px-16 py-24 items-start text-left">
        <div className="flex flex-col md:w-1/2 text-left justify-start items-start gap-10">
          <h1 className="text-8xl text-primary-black font-medium">
            Manage all your daily tasks at once,{" "}
            <span className="text-primary-orange">easily</span>
          </h1>
          <p className="text-primary-grey text-2xl">
            Stay focused and motivated with visually appealing user interface
            and the reminders feature helps you to focus on what{"'"}s important here
            and now without missing anything.
          </p>
          <button className="py-3 px-10 items-start text-white text-xl bg-orange-500 rounded-2xl shadow-md hover:scale-105 duration-500">
            Start for free
          </button>
        </div>
        <div className="flex flex-col md:w-1/2">
          <Image src={WorkImage} alt="WorkImage" className="w-full md:m-auto" />
        </div>
      </div>
    </div>
  );
}
