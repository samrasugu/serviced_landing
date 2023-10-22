"use client";

import Image from "next/image";
import React from "react";
import MetaLogo from "../../../public/assets/icons/meta.png";
import LinkedinLogo from "../../../public/assets/icons/linkedin.png";
import NetflixLogo from "../../../public/assets/icons/netflix.png";
import SlackLogo from "../../../public/assets/icons/slack.png";
import PinterestLogo from "../../../public/assets/icons/pinterest.png";
import GoogleLogo from "../../../public/assets/icons/google.png";
import YouTubeLogo from "../../../public/assets/icons/youtube.png";
import WorkImage from "../../../public/assets/work.png";

const companies = [
  MetaLogo,
  LinkedinLogo,
  NetflixLogo,
  SlackLogo,
  PinterestLogo,
  GoogleLogo,
  YouTubeLogo,
];

const stats = [
  {
    count: "100k",
    title: "Tasks Solved",
  },
  {
    count: "80k",
    title: "Happy Clients",
  },
  {
    count: "1500",
    title: "Projects Completed",
  },
  {
    count: "35",
    title: "Awards Won",
  },
];

export function StatsSection() {
  return (
    <div className="md:py-24 px-4 md:px-16">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-primary-black items-center text-center text-3xl md:text-4xl">
          We are <span className="text-primary-orange">trusted</span> by 1000+
          companies
        </h1>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-16 py-10 px-4">
          {companies.map((company, index) => (
            <Image key={index} src={company} alt="Meta Logo" />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-20 gap-24">
        <div className="flex-col items-center">
          <Image src={WorkImage} alt="Get work done" width={650} />
        </div>
        <div className="flex flex-col text-center items-center justify-center">
          <h1 className="text-primary-black items-center text-center text-3xl md:text-5xl font-lightbold">
            Get everything <span className="text-primary-orange">done</span> in
            one place
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 px-4 md:px-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col border-l-4 border-primary-orange gap-10 my-4 md:my-0"
          >
            <h1 className="text-primary-black text-5xl font-lightbold px-8">
              {stat.count}
            </h1>
            <p className="text-primary-grey text-2xl px-6">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
