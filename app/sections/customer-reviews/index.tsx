"use client";

import React from "react";
import Guy1 from "../../../public/assets/guy.jpg";
import Guy2 from "../../../public/assets/guy2.jpg";
import Lady1 from "../../../public/assets/lady1.jpg";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export function CustomerReviews() {
  return (
    <div className="py-28 px-4 md:px-16">
      <h1 className="text-primary-black items-center font-lightbold text-center text-4xl md:text-4xl">
        Our Customer Reviews
      </h1>
      <p className="text-primary-grey text-xl text-center py-10 md:px-40">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime sed
        molestias error quaerat dolorum nam!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center shadow-lg gap-4 p-10">
          <Image src={Guy1} alt="Guy1" width={120} className="rounded-full" />
          <h1 className="text-primary-black text-xl font-lightbold">
            Ali Mansour
          </h1>
          <div className="flex flex-row">
            <AiFillStar className="text-primary-orange" />
            <AiFillStar className="text-primary-orange" />
            <AiFillStar className="text-primary-orange" />
            <AiFillStar className="text-primary-orange" />
            <AiFillStar className="text-primary-orange" />
          </div>
          <h1 className="text-primary-black text-xl font-lightbold">
            Great Services...
          </h1>
          <p className="text-primary-grey text-lg text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime sed
            molestias error quaerat dolorum nam!
          </p>
        </div>

        <div className="flex flex-col items-center shadow-lg gap-4 p-10">
          <Image src={Guy2} alt="Guy1" width={120} className="rounded-full" />
          <h1 className="text-primary-black text-xl font-lightbold">
            Adonis Brown
          </h1>
          <div className="flex flex-row">
            <AiFillStar className="text-primary-orange" />
            <AiFillStar className="text-primary-orange" />
            <AiFillStar className="text-primary-orange" />
            <AiFillStar className="text-primary-orange" />
            <AiFillStar className="text-primary-orange" />
          </div>
          <h1 className="text-primary-black text-xl font-lightbold">
            Lovely Experience...
          </h1>
          <p className="text-primary-grey text-lg text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime sed
            molestias error quaerat dolorum nam!
          </p>
        </div>

        <div className="flex flex-col items-center shadow-lg gap-4 p-10">
          <Image src={Lady1} alt="Guy1" width={120} className="rounded-full" />
          <h1 className="text-primary-black text-xl font-lightbold">
            Vanessa Kirby
          </h1>
          <div className="flex flex-row">
            <AiFillStar className="text-primary-orange" />
            <AiFillStar className="text-primary-orange" />
            <AiFillStar className="text-primary-orange" />
            <AiFillStar className="text-primary-orange" />
            <AiFillStar className="text-primary-orange" />
          </div>
          <h1 className="text-primary-black text-xl font-lightbold">
            Simple and Creative...
          </h1>
          <p className="text-primary-grey text-lg text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime sed
            molestias error quaerat dolorum nam!
          </p>
        </div>
      </div>
    </div>
  );
}
