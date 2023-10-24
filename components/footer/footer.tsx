import React from "react";
import { BiLogoInstagram } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-white justify-between gap-10 py-6">
      <div className="flex flex-col mx-4 md:mx-16 bg-primary-black p-28 items-center text-center gap-5">
        <h1 className="text-primary-white items-center font-normal text-center text-3xl">
          Working with us is the path to success
        </h1>
        <p className="text-gray-300 text-lg text-center font-medium py-4 md:px-56">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime sed
          molestias error quaerat dolorum nam!
        </p>
        <div className="flex flex-row justify-between gap-4 md:px-40">
          <input
            type="email"
            className="border focus:outline-none bg-primary-grey border-primary-grey py-3 px-3"
            placeholder="Email"
          />
          <button className="py-3 px-8 text-white text-lg bg-orange-500 hover:scale-105 duration-500">
            Subscribe
          </button>
        </div>
        <p className="text-gray-500 text-lg text-center py-4 md:px-56">
          WARNING! once you join us you will loose the need to use other service
          pages
        </p>
      </div>
      <div className="flex flex-row justify-between bg-primary-black px-16 py-5">
        <p className="text-primary-orange">&copy; 2023 All rights reserved</p>
        <div className="flex flex-row justify-between gap-4">
          <BiLogoInstagram className="text-primary-orange text-xl cursor-pointer" />
          <TbWorld className="text-primary-orange text-xl cursor-pointer" />
          <AiFillTwitterCircle className="text-primary-orange text-xl cursor-pointer" />
          <AiFillYoutube className="text-primary-orange text-xl cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
