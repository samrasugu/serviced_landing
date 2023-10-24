"use client";

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import VideoImage from "../../../public/assets/video.jpg";
import ArticleImage from "../../../public/assets/article.jpg";
import BlogImage from "../../../public/assets/blog.jpg";
import Image from "next/image";

const blogs = [
  {
    title: "Quickbit: What you probably didn't know",
    image: VideoImage,
    type: "video",
    cta: "Watch Video",
  },
  {
    title: "The guide to product analytics",
    image: ArticleImage,
    type: "article",
    cta: "Read Article",
  },
  {
    title: "Using data for successful decision making",
    image: BlogImage,
    type: "blog",
    cta: "Read Post",
  },
];

export function BlogSection() {
  return (
    <div className="py-24 px-4 md:px-16">
      <div className="flex flex-row justify-between">
        <h1 className="text-primary-black items-center font-lightbold text-center text-4xl md:text-4xl">
          Read our resources
        </h1>
        <div className="flex flex-row items-center text-center text-primary-orange font-bold gap-3 cursor-pointer group">
          <p className="text-lg">View Resources</p>
          <BsArrowRight className="text-2xl font-extrabold group-hover:scale-x-110" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-20">
        {blogs.map((blog, index) => (
          <div key={index} className="flex flex-col shadow-lg group">
            <Image src={blog.image} alt="Blog Image" />
            <div className="flex flex-col py-4 px-4 gap-3">
              <div className="flex flex-row text-primary-orange items-center gap-2 uppercase">
                <HiOutlineVideoCamera className="text-lg" /> <p> {blog.type}</p>
              </div>
              <p className="text-primary-black items-center font-semibold text-left text-xl md:text-2xl">
                {blog.title}
              </p>
              <div className="flex flex-row text-primary-orange font-bold gap-2 items-center">
                <p>{blog.cta}</p>
                <BsArrowRight className="text-2xl font-extrabold" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
