/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import web from "../../../public/ourworks/PBF/Capture2.webp";
import Link from "next/link";
import img1 from "../../../public/ourworks/PBF/cp.webp";
import img2 from "../../../public/ourworks/PBF/yes1.webp";
import img3 from "../../../public/ourworks/PBF/yes2.webp";
import { useTranslation } from "next-export-i18n";

export default function PBF() {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    rootMargin: '-150px 0px', // Adjust the root margin as needed
  });

  const [isImageClicked, setIsImageClicked] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>("");

  const handleImageClick = (src: string) => {
    setCurrentImage(src);
    setIsImageClicked(true);
  };

  const handleClose = () => {
    setIsImageClicked(false);
    setCurrentImage("");
  };
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center bg-white w-full h-full pt-[150px] pb-[100px] max-sm:pt-[150px] max-sm:pb-[100px] relative">
      <div
        className={`flex flex-col max-w-7xl px-8 gap-y-[50px] transition-all duration-1000 ${
          textInView ? "opacity-100" : "opacity-0"
        }`}
        ref={textRef}
      >
        <h1 className="font-bold text-[36px] max-md:text-[28px] text-black text-center">
          Panca Budi Foundation
        </h1>
        <div className="flex flex-col gap-y-[40px]">
          <h1 className="text-center font-medium text-[28px] max-md:text-[22px] text-black">
          {t('workpbf.h1')}
          </h1>
          <div className="relative group">
            {/* The image */}
            <Image
              src={web}
              alt="web"
              className="w-full h-auto rounded-2xl shadow-2xl transition-opacity duration-300 group-hover:opacity-60"
            />

            {/* The hover effect */}
            <div className="absolute bg-[#5569B2] inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-95 rounded-2xl transition-opacity duration-300">
              <p className="text-white font-bold text-[24px]">{t('workpbf.h2')}</p>
              <Link href="https://pancabudifoundation.com/" target="blank_">
                <p className="text-white mt-2 text-[18px] underline cursor-pointer">
                {t('workpbf.h3')}
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[40px] mt-[40px]">
          <h1 className="text-center font-medium text-[28px] max-md:text-[22px] text-black">
          {t('workpbf.h4')}
          </h1>
          <div className="flex lg:flex-row flex-col justify-between items-center flex-wrap gap-y-[20px]">
            <div className="lg:w-3/4 w-full pr-2 max-lg:pr-0">
              <div onClick={() => handleImageClick(img1.src)} className="cursor-pointer">
                <Image
                  src={img1}
                  alt="yes"
                  width={600} // Replace with actual width
                  height={400} // Replace with actual height
                  className="h-auto w-full rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
            <div className="flex flex-row gap-x-[20px] lg:w-1/4 w-full max-lg:pl-0 pl-6">
              <div className="flex lg:flex-col gap-y-[20px] w-full max-lg:gap-x-4">
                <div onClick={() => handleImageClick(img2.src)} className="cursor-pointer">
                  <Image
                    src={img2}
                    alt="yes2"
                    width={300} // Replace with actual width
                    height={300} // Replace with actual height
                    className="h-auto w-full rounded-2xl shadow-2xl object-cover"
                  />
                </div>
                <div onClick={() => handleImageClick(img3.src)} className="cursor-pointer">
                  <Image
                    src={img3}
                    alt="yes3"
                    width={300} // Replace with actual width
                    height={300} // Replace with actual height
                    className="h-auto w-full rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up modal */}
      {isImageClicked && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div className="relative">
            <Image
              src={currentImage}
              alt="Enlarged Image"
              width={800} // Adjust based on how large you want the image
              height={600} // Adjust accordingly
              className="rounded-2xl shadow-2xl object-contain w-auto h-auto max-w-[90vw] max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
