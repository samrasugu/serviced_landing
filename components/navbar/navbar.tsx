import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-between fixed w-full text-center items-center bg-white px-4 md:px-16 py-5 md:py-6 z-10">
      <h1 className="text-primary-orange text-3xl cursor-pointer font-bold">
        Serviced
      </h1>

      <ul className="list-none text-primary-black hidden md:flex gap-6 text-xl font-medium">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Feature</li>
        <li className="cursor-pointer">Collaboration</li>
        <li className="cursor-pointer">Solutions</li>
        <li className="cursor-pointer">Testimonials</li>
      </ul>

      <div className="md:flex hidden flex-row">
        <button className="py-2 px-5 text-primary-orange text-xl bg-white rounded-2xl hover:scale-105 duration-500">
          Login
        </button>
        <button className="py-2 px-5 text-white text-xl bg-orange-500 rounded-2xl hover:scale-105 duration-500">
          Sign up
        </button>
      </div>
    </div>
  );
}
