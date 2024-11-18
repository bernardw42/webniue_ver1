"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import tab from "@/../public/blog/articles/3-151124/images.jpg";
import { LinkWithLocale, useTranslation } from "next-export-i18n";

export default function Header() {
  const { t } = useTranslation();

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  const [showHeader, setShowHeader] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  useEffect(() => {
    if (headerInView) {
      setShowHeader(true);
    }
  }, [headerInView]);

  // Function to check if the device is mobile and in landscape mode
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
    <div className={`relative w-full flex flex-col ${isMobileLandscape ? 'h-[540px]' : 'h-[50vh]'} justify-center items-center bg-[white] overflow-hidden`}>
         <div className="w-full lg:max-w-7xl mt-[150px] flex items-center justify-start max-lg:px-[8%]">
            {/* Back Arrow and Text */}
            <button onClick={() => window.history.back()} className="flex items-center font-bold text-[#5569B2]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 19l-7-7h14l-7 7zm0-2.17l4.59-4.59H5.41L10 16.83zm0-12.66L5.41 9.83h9.18L10 4.17z" />
                </svg>
            </button>
            
            {/* Divider */}
            <span className="mx-4 text-black">|</span>
            
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2">
                <LinkWithLocale href="/blog" className="text-gray-500 hover:underline">Blog</LinkWithLocale>
                <span className="text-gray-500">{'>'}</span>
                <span className="text-gray-500 max-sm:max-w-[150px] truncate">Apa Itu Hook dalam Konten dan Mengapa Penting untuk Strategi Digital Marketing?</span>
            </nav>
        </div>

        <div className="relative flex items-center max-lg:w-[85%] max-md:w-[85%] w-[85%] max-w-7xl h-[70%] mt-[30px] z-0 overflow-hidden rounded-2xl mx-auto">
            <div
                className="absolute inset-0 w-full h-full bg-fixed bg-bottom bg-cover brightness-50"
                style={{ backgroundImage: `url(${tab.src})` }}
            ></div>
            </div>

        
        <div className="absolute top-[60%] max-[400px]:top-[58%] inset-0 flex justify-center items-start max-w-7xl mx-auto px-10 z-20">
            <div
                ref={headerRef}
                className={`md:w-[90%] w-full text-left max-md:text-center drop-shadow-2xl transition-opacity duration-[1500ms] ease-in-out px-10 ${showHeader ? 'opacity-100' : 'opacity-0'}`}
            >
                <h1 className="text-xl md:text-[36px] sm:text-2xl lg:text-5xl font-bold text-white">
                Apa Itu Hook dalam Konten dan Mengapa Penting untuk Strategi Digital Marketing?
                </h1>
            </div>
        </div>
    </div>
  );
}
