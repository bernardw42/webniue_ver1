"use client";
import React, { useEffect, useState } from "react";
import ball2 from "@/../public/aboutus/compress/ball2.webp";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import emailjs from "emailjs-com";
import { useTranslation } from "next-export-i18n";

export default function Home() {
  const [showDarkWave, setShowDarkWave] = useState(false);
  const [darkWaveRef, darkWaveInView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  });

  useEffect(() => {
    if (darkWaveInView) {
      setShowDarkWave(true);
    }
  }, [darkWaveInView]);

  const handleSubmit = (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault(); // Prevent the default form submission

    const form = e.target; // Access the form

    emailjs.sendForm('619000', '619000t', form, '_qBl6mxNjdg36oITN')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.reset(); // Reset form fields after submission
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
      });
  };

  const { t } = useTranslation();

  return (
    <div className="bg-[#F9F9F9] w-full h-full justify-center items-center flex">
      <Image
        src={ball2}
        alt="Ball Decoration 1"
        className="absolute top-[800px] left-[-220px] w-[450px] h-auto max-md:left-[-100px] z-0 opacity-50 max-lg:hidden"
      />
      <div className="max-w-7xl w-full">
        <div
          className={`relative flex justify-center items-center pt-[200px] pb-[150px] max-sm:pt-[150px] max-sm:pb-[180px] transition-all duration-[1500ms] delay-200 ${
            showDarkWave ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[15%]"
          }`}
          ref={darkWaveRef}
        >
          <div className="max-w-7xl w-full h-auto flex flex-col px-8">
            <div className="flex flex-col">
              {/* Header */}
              <h2 className="relative text-[22px] max-md:text-[18px] font-medium text-[#5469b2]">
                {t('cons.h1')}
              </h2>
              <p className="text-[28px] max-md:text-[22px] text-[#5469b2]">
              {t('cons.h2')}
              </p>

              {/* Main flex container for form and new section */}
              <div className="mt-8 flex max-lg:flex-col lg:justify-between gap-x-8 lg:gap-x-12 gap-y-[100px]">
                {/* Form Section */}
                <form className="flex-grow" onSubmit={handleSubmit}>
                  {/* First row: Name and Email */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        name="name" // Name the input field
                        placeholder={t('cons.f4')}
                        className="w-full bg-transparent border-b p-2 border-[#5469b2] placeholder:font-light placeholder-[#5469b2] text-[#5469b2] focus:outline-none"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        name="email" // Name the input field
                        placeholder={t('cons.f5')}
                        className="w-full bg-transparent border-b p-2 border-[#5469b2] placeholder:font-light placeholder-[#5469b2] text-[#5469b2] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Second row: Phone Number and Subject */}
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone" // Name the input field
                        placeholder={t('cons.f6')}
                        className="w-full bg-transparent border-b p-2 placeholder:font-light border-[#5469b2] placeholder-[#5469b2] text-[#5469b2] focus:outline-none"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        name="subject" // Name the input field
                        placeholder={t('cons.f7')}
                        className="w-full bg-transparent border-b p-2 placeholder:font-light border-[#5469b2] placeholder-[#5469b2] text-[#5469b2] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Third row: Message */}
                  <div className="mt-4 relative">
                    <textarea
                      name="message" // Name the input field
                      placeholder={t('cons.f8')}
                      className="w-full bg-transparent border-b p-2 h-[100px] placeholder:font-light border-[#5469b2] placeholder-[#5469b2] text-[#5469b2] focus:outline-none resize-none overflow-y-auto"
                    ></textarea>
                  </div>

                  {/* Send Message Button */}
                  <div className="mt-6">
                    <button type="submit" className="py-2 px-6 font-semibold bg-[#5469b2] text-white hover:bg-[#b2bbdd] hover:text-[#262f50] transition duration-300">
                    {t('cons.f9')}
                    </button>
                  </div>
                </form>

                {/* Divider */}
                <div className="hidden lg:block w-[1px] bg-black self-stretch mx-8"></div>

                {/* New Section */}
                <div className="flex-grow flex flex-col text-start">
                  <h2 className="text-[22px] max-md:text-[18px] font-medium text-black">
                  {t('cons.f10')}
                  </h2>
                  <p className="text-[18px] max-md:text-[16px] text-black">
                    KAWASAN NIAGA LT.3<br />
                    JL. BATUCEPER<br />
                    KOTA TANGERANG
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
