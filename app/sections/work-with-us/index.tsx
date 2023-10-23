"use client";

import Image from "next/image";
import React from "react";
import TeamWorkIcon from "../../../public/assets/icons/teamwork.png";
import FlexIcon from "../../../public/assets/icons/flexibility.png";
import UserFriendlyIcon from "../../../public/assets/icons/user-friendly.png";
import LayoutIcon from "../../../public/assets/icons/layout.png";
import ComponentsIcon from "../../../public/assets/icons/components.png";
import StackIcon from "../../../public/assets/icons/stack.png";

const benefits = [
  {
    title: "Perfect teamwork",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio modi cupiditate hic unde a. Asperiores repudiandae minus repellendus ipsum magni?",
    icon: TeamWorkIcon,
  },
  {
    title: "Flexibility",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio modi cupiditate hic unde a. Asperiores repudiandae minus repellendus ipsum magni?",
    icon: FlexIcon,
  },
  {
    title: "User Friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio modi cupiditate hic unde a. Asperiores repudiandae minus repellendus ipsum magni?",
    icon: UserFriendlyIcon,
  },
  {
    title: "Multiple Layouts",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio modi cupiditate hic unde a. Asperiores repudiandae minus repellendus ipsum magni?",
    icon: LayoutIcon,
  },
  {
    title: "Better components",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio modi cupiditate hic unde a. Asperiores repudiandae minus repellendus ipsum magni?",
    icon: ComponentsIcon,
  },
  {
    title: "Well organized",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio modi cupiditate hic unde a. Asperiores repudiandae minus repellendus ipsum magni?",
    icon: StackIcon,
  },
];

export function WorkWithUs() {
  return (
    <div className="py-28 px-4 md:px-16">
      <h1 className="text-primary-black items-center font-lightbold text-center text-4xl md:text-4xl">
        Benefits of working with us
      </h1>
      <p className="text-primary-grey text-xl text-center py-10 md:px-40">
        Stay focused and motivated with visually appealing user interface and
        the reminders feature helps you to focus on what{"'"}s important here
        and now without missing anything.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={benefit.icon} width={40} alt="Benefits" className="py-4"/>
            <h1 className="text-primary-black items-center font-lightbold text-center text-2xl md:text-3xl">
              {benefit.title}
            </h1>
            <p className="text-primary-grey text-lg font-normal text-center py-6">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
