"use client";
import bg from "@/../public/aboutus/compress/theme.webp";
import { useTranslation } from "next-export-i18n";
import { useInView } from 'react-intersection-observer';

export default function Header() {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    rootMargin: '-150px 0px', // Adjust the root margin as needed
  });

  const { t } = useTranslation();
  return (
      <div
        className="relative flex items-center justify-center h-screen w-auto bg-cover bg-center bg-fixed overflow-hidden"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',      // Ensures the background image covers the container without overflow
          backgroundPosition: 'center', // Centers the background image
          backgroundRepeat: 'no-repeat' // Prevents background from repeating
        }}
      >
      <div className="max-w-5xl w-full max-lg:flex-col flex items-center justify-center px-8">

        {/* Text Content */}
        <div className="flex flex-col justify-center text-center gap-y-10" ref={textRef}>
          <h1 className={`text-[60px] max-md:text-[42px] max-sm:text-[32px] font-bold text-white transition-all duration-[1500ms] ${
                        textInView ? "opacity-100 translate-x-0" : "opacity-0 translate-y-[100%]"}`}>
          {t('arth.h')}
          </h1>
          <p className={`text-[28px] max-md:text-[22px] max-sm:text-[18px] font-light text-white transition-all duration-[1500ms] delay-[500ms] ${textInView ? 'opacity-100' : 'opacity-0'}`}>
          {t('arth.h2')} <br></br><span>
          {t('arth.h3')}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
