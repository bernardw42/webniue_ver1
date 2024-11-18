"use client";

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Card from "./Card/Card"; // Import Card component
import { posts } from "./Post"; // Import posts
import Image from "next/image";
import ball2 from "@/../public/aboutus/compress/ball2.webp";
// Import slick styles globally
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Ensure both slick and slick-theme CSS are imported

export default function Carouse() {
  const sliderRef = useRef<Slider | null>(null);
  const [customState, setCustomState] = useState({
    slidesToShow: 2, // Show 2 cards on desktop
  });

  const settings = {
    dots: true, // Enable dots (which we'll style as strips)
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set autoplay speed to 10 seconds (10000 ms)
    slidesToShow: customState.slidesToShow, // Show 2 cards on larger screens
    slidesToScroll: 1, // Number of slides to scroll
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1, // Show 1 card on screens smaller than 850px
        },
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      const newSlidesToShow = window.innerWidth < 1024 ? (window.innerWidth < 640 ? 1 : 2) : 2;
      setCustomState({ slidesToShow: newSlidesToShow });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center bg-white pt-[200px] pb-[100px] max-sm:pt-[150px] relative overflow-hidden">
      <Image
        src={ball2}
        alt="Ball Decoration 1"
        className="absolute top-[360px] left-[-250px] w-[550px] h-auto max-md:left-[-100px] z-10 opacity-75 max-lg:hidden"
      />
      <div className="max-w-7xl w-full h-full flex flex-col justify-center items-center overflow-hidden px-8 max-md:px-4 max-sm:px-2">
        <Slider
          ref={sliderRef}
          {...settings}
          className="w-full px-4 pb-10 custom-dots"
        >
          {posts.slice(0, 5).map((post, index) => (
            <div key={index} className="justify-center items-center flex h-[550px] px-8 max-sm:px-4">
              <Card
                title={post.title}
                date={post.date}
                desc={post.desc}
                image={post.image}
                links={post.links}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
