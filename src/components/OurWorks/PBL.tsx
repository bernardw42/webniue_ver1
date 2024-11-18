/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import web from "../../../public/ourworks/PBL/Capture.webp";
import Link from "next/link";
import img2 from "../../../public/ourworks/PBL/2.webp";
import img3 from "../../../public/ourworks/PBL/3.webp";
import { useTranslation } from "next-export-i18n";

export default function PBF() {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px 0px", // Adjust the root margin as needed
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
    <div className="flex items-center justify-center bg-[#F9F9F9] w-full h-full pt-[150px] pb-[200px] max-sm:pt-[150px] max-sm:pb-[150px] relative">
      <div
        className={`flex flex-col max-w-7xl px-8 gap-y-[50px] transition-all duration-1000 ${
          textInView ? "opacity-100" : "opacity-0"
        }`}
        ref={textRef}
      >
        <h1 className="font-bold text-[36px] max-md:text-[28px] text-black text-center">
          PT. Panca Budi Logistindo
        </h1>
        <div className="flex flex-col gap-y-[40px]">
          <h1 className="text-center font-medium text-[28px] max-md:text-[22px] text-black">
          {t('workpbl.h1')}
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
              <p className="text-white font-bold text-[24px]">{t('workpbl.h2')}</p>
              <Link href="https://pancabudilogistindo2.vercel.app/" target="blank_">
                <p className="text-white mt-2 text-[18px] underline cursor-pointer">
                {t('workpbl.h3')}
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-lg:items-center gap-y-[40px] mt-[30px]">
          <h1 className="text-center font-medium text-[28px] max-md:text-[22px] text-black">
          {t('workpbl.h4')}
          </h1>
          <div className="flex max-lg:flex-col gap-y-[20px] max-lg:w-full pr-2 gap-x-4">
            {/* Clickable image with pop-up effect */}
            <div onClick={() => handleImageClick(img2.src)} className="cursor-pointer">
              <Image
                src={img2}
                alt="yes1"
                width={600} // Replace with actual width
                height={400} // Replace with actual height
                className="h-auto w-full rounded-2xl shadow-2xl"
              />
            </div>

            {/* Clickable image with pop-up effect */}
            <div onClick={() => handleImageClick(img3.src)} className="cursor-pointer">
              <Image
                src={img3}
                alt="yes2"
                width={600} // Replace with actual width
                height={400} // Replace with actual height
                className="h-auto w-full rounded-2xl shadow-2xl"
              />
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
