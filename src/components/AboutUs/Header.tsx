"use client";
import Image from "next/image";
import bg from "@/../public/aboutus/theme.png";
import img from "@/../public/aboutus/seq.webp";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";


export default function Header() {

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
  });

  const [showTitle, setShowTitle] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  useEffect(() => {
    if (titleInView) {
      setShowTitle(true);
    }
  }, [titleInView]);

  const checkMobileLandscape = () => {
    const isLandscape = window.matchMedia('(orientation: landscape)').matches;
    const isMobile = window.matchMedia('(max-height: 767px)').matches; // Changed to max-height
    console.log('isLandscape:', isLandscape, 'isMobile:', isMobile); // Debugging
    setIsMobileLandscape(isLandscape && isMobile);
  };

  // Add event listener on resize and orientation change
  useEffect(() => {
    checkMobileLandscape(); // Initial check on component mount

    window.addEventListener('resize', checkMobileLandscape);
    window.addEventListener('orientationchange', checkMobileLandscape);

    return () => {
      window.removeEventListener('resize', checkMobileLandscape);
      window.removeEventListener('orientationchange', checkMobileLandscape);
    };
  }, []);

  return (
      <div
        className={`relative flex items-center justify-center w-auto bg-cover bg-center bg-fixed overflow-hidden 
        ${isMobileLandscape ? 'h-[1080px]' : 'min-h-screen'}`}
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',      // Ensures the background image covers the container without overflow
          backgroundPosition: 'center', // Centers the background image
          backgroundRepeat: 'no-repeat' // Prevents background from repeating
        }}
      >
      <div className={`max-w-7xl w-full max-lg:flex-col flex items-center justify-between px-8 transition-all duration-[1500ms]
        ${showTitle ? 'opacity-100' : 'opacity-0'}`}
        ref={titleRef}>

        {/* Text Content */}
        <div className="flex flex-col justify-center text-left max-lg:text-center max-w-[500px] max-lg:max-w-[300] gap-y-5">
          <h1 className="text-[36px] max-md:text-[30px] max-sm:text-[26px] font-bold text-white">
            10 Years Of Proven Experience in the Creative Field
          </h1>
          <p className="text-[28px] max-md:text-[22px] max-sm:text-[18px] font-light text-white">
            With a decade worth of experience and excellent infrastructure, NIUE is your reliable partner.
          </p>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 max-lg:order-[-1] mt-[20px]">
          <Image
            src={img}
            alt="Right side image"
            className="max-[1164px]:w-[550px] w-[700px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
