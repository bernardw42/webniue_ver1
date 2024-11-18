/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Image from "next/image";
import img1 from "../../../public/ourworks/Besyl/1.webp";
import img2 from "../../../public/ourworks/Besyl/2.webp";
import img3 from "../../../public/ourworks/Besyl/3.webp";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "next-export-i18n";

export default function PBF() {
  const [isImageClicked, setIsImageClicked] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>("");

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    rootMargin: '-150px 0px', // Adjust the root margin as needed
  });

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
    <div className="flex items-center justify-center bg-white w-full h-full pt-[150px] pb-[200px] max-sm:pt-[150px] max-sm:pb-[150px] relative">
      <div className={`flex flex-col max-w-7xl px-8 transition-all duration-1000 ${
          textInView ? "opacity-100" : "opacity-0"
        }`}
        ref={textRef}>
        <h1 className="font-bold text-[36px] max-md:text-[28px] text-black text-center">
          PT Insan Indofarma
        </h1>
        <div className="flex flex-col gap-y-[40px] mt-[40px]">
          <h1 className="text-center font-medium text-[28px] max-md:text-[22px] text-black">
          {t('workbesyl.h')}
          </h1>
          <div className="flex lg:flex-row flex-col justify-between items-center flex-wrap gap-y-[20px]">
            <div className="lg:w-3/4 w-full pr-2 max-lg:pr-0">
              <div
                onClick={() => handleImageClick(img1.src)}
                className="cursor-pointer"
              >
                <Image
                  src={img1}
                  alt="Image 1"
                  width={800} // Add your image's width here
                  height={600} // Add your image's height here
                  className="h-auto w-full rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
            <div className="flex flex-row gap-x-[20px] lg:w-1/4 w-full max-lg:pl-0 pl-6">
              <div className="flex lg:flex-col gap-y-[20px] w-full max-lg:gap-x-4">
                <div
                  onClick={() => handleImageClick(img2.src)}
                  className="cursor-pointer"
                >
                  <Image
                    src={img2}
                    alt="Image 2"
                    width={400} // Add your image's width here
                    height={300} // Add your image's height here
                    className="h-auto w-full rounded-2xl shadow-2xl object-cover"
                  />
                </div>
                <div
                  onClick={() => handleImageClick(img3.src)}
                  className="cursor-pointer"
                >
                  <Image
                    src={img3}
                    alt="Image 3"
                    width={400} // Add your image's width here
                    height={300} // Add your image's height here
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
              width={800} // Width of the enlarged image
              height={600} // Height of the enlarged image
              className="rounded-2xl shadow-2xl object-contain w-auto h-auto max-w-[90vw] max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
