"use client";
import img from "@/../public/aboutus/compress/img.webp";
import ball1 from "@/../public/aboutus/compress/ball1.webp";
import ball2 from "@/../public/aboutus/compress/ball2.webp";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useTranslation } from "next-export-i18n";

export default function Section() {
  const [div1Ref, div1InView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  const [div2Ref, div2InView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  });

  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);

  useEffect(() => {
    if (div1InView) {
      setShowDiv1(true);
    }
  }, [div1InView]);

  useEffect(() => {
    if (div2InView) {
      setShowDiv2(true);
    }
  }, [div2InView]);

  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col justify-center items-center w-full overflow-x-hidden">
      {/* Decorative Ball 1 */}
      <Image
        src={ball2}
        alt="Ball Decoration 1"
        className="absolute top-[650px] left-[-220px] w-[450px] h-auto max-md:left-[-100px] z-10 opacity-50 max-lg:hidden"
      />

      {/* Decorative Ball 2 */}
      <Image
        src={ball1}
        alt="Ball Decoration 2"
        className="absolute top-[470px] right-[-200px] w-[400px] h-auto max-md:right-[-100px] z-10 opacity-50 max-lg:hidden"
      />

      <div className="bg-[#F9F9F9] w-screen h-full flex justify-center items-center pt-[200px] pb-[200px] max-sm:pt-[150px] max-sm:pb-[150px]">
        <div className="max-w-7xl w-full flex flex-col text-left px-8">
          <h1 className="text-left font-medium text-[36px] max-md:text-[28px] mb-2 text-black">
            {t('abtp.h')}
          </h1>
          <h1
            className={`text-left text-[#5569B2] text-[36px] max-md:text-[28px] max-w-[450px] mb-8 transition-all duration-[2000ms] ${
              showDiv1
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[100%]"
            }`}
            ref={div1Ref}
          >
            {t('abtp.h1')}
          </h1>
          <p
            className={`text-justify text-[22px] max-md:text-[18px] max-w-[950px] transition-all duration-[2300ms] ${
              showDiv1
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[50%]"
            }`}
            ref={div1Ref}
          >
            {t('abtp.p')}
          </p>
        </div>
      </div>

      <div className="bg-white w-screen h-full flex justify-center items-center pt-[200px] pb-[150px] max-sm:pt-[150px] max-sm:pb-[100px]">
        <div className="max-w-7xl w-screen flex max-lg:flex-col items-center justify-center text-left gap-x-[50px] gap-y-10 max-lg:gap-y-5 px-8">
          <Image
            src={img}
            alt="yes"
            className={`w-[300px] h-auto max-lg:order-[-1] transition-all duration-[1500ms] z-20 ${
              showDiv2 ? "opacity-100" : "opacity-0"
            }`}
            ref={div2Ref}
          />

          <div
            className={`flex flex-col w-[700px] max-md:w-full max-lg:w-[90%] justify-between py-3 text-left max-lg:text-center gap-y-5 transition-all duration-[2000ms] delay-[300ms] ${
              showDiv2
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[100%]"
            }`}
            ref={div2Ref}
          >
            <h1 className="text-[36px] max-md:text-[28px] font-medium">
            {t('Fill.h')} <span className="text-[#5569B2]">{t('Fill.h2')}</span>
            </h1>
            <p className="text-[22px] text-justify max-md:text-[18px]">
            {t('Fill.p')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
