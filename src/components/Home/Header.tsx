"use client"
import { useTranslation } from "next-export-i18n";
import vid from "../../../public/home/tes.webm";
import { useEffect, useState } from "react";

export default function Header() {
  const { t } = useTranslation();

  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

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
      <div className="bg-[#5569B2] flex justify-center w-full items-center">
        <video src={vid} className="flex items-center justify-center w-full opacity-60 h-screen object-cover bg-fixed" autoPlay muted loop />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center drop-shadow-2xl">
          <h1 className={`max-md:text-[25px] font-bold ${
        isMobileLandscape ? 'text-[25px]' : 'text-[40px]'}`}>{t('HomeHeader.h1')}</h1>
          <p className={`text-[40px] max-md:text-[25px] font-light ${
        isMobileLandscape ? 'text-[40px]' : 'text-[25px]'}`}>NIUE.</p>
        </div>
      </div>
  );
}