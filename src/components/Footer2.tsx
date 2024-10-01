"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Footer2() {
  // State to control visibility of waves
  const [showLightWave, setShowLightWave] = useState(false);
  const [showDarkWave, setShowDarkWave] = useState(false);

  // Light blue wave trigger
  const [lightWaveRef, lightWaveInView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  // Dark blue wave trigger
  const [darkWaveRef, darkWaveInView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  // Update state when the waves come into view
  useEffect(() => {
    if (lightWaveInView) {
      setShowLightWave(true);
    }
  }, [lightWaveInView]);

  useEffect(() => {
    if (darkWaveInView) {
      setShowDarkWave(true);
    }
  }, [darkWaveInView]);

  return (
    <div className="relative w-full min-h-full overflow-hidden">
      {/* Content inside dark blue wave */}
      <div className={`relative flex justify-center items-center pt-[450px] pb-[150px] transition-all duration-[1500ms] delay-200 z-30 ${
              showDarkWave ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[15%]"
            }`}
            ref={darkWaveRef}>
        {/* Your Content Here */}
        <div className="max-w-7xl w-full h-auto flex flex-col px-8 z-30">
        <div className="flex flex-col max-w-[500px]">
          <h2 className="relative text-[22px] max-md:text-[18px] font-medium text-white before:content-[''] before:absolute before:w-[260px] before:h-[1px] before:bg-white before:top-[-5px] before:left-0 after:content-[''] after:absolute after:w-[260px] after:h-[1px] after:bg-white after:bottom-[-5px] after:left-0">
            LET’S WORK TOGETHER
          </h2>
          <p className="text-[28px] max-md:text-[22px] mt-10 text-white">
            Ready to Explore Your Digital Marketing Potential?
          </p>
          <p className="text-[28px] max-md:text-[22px] text-white">
            Connect with Us Today
          </p>

          <form className="mt-8">
            {/* First row: Name and Email */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b p-2 border-white placeholder:font-light placeholder-white text-white focus:outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b p-2 border-white placeholder:font-light placeholder-white text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Second row: Phone Number and Subject */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b p-2 placeholder:font-light border-white placeholder-white text-white focus:outline-none focus:bg-transparent"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-transparent border-b p-2 placeholder:font-light border-white placeholder-white text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Third row: Message */}
            <div className="mt-4 relative">
              <textarea
                placeholder="Message"
                className="w-full bg-transparent border-b p-2 h-[100px] placeholder:font-light border-white placeholder-white text-white focus:outline-none resize-none overflow-y-auto"
              ></textarea>
            </div>

            {/* Send Message Button */}
            <div className="mt-6">
              <button className="py-2 px-6 bg-transparent font-semibold bg-white text-[#5469b2] hover:bg-[#b2bbdd] hover:text-[#262f50] transition duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>

      {/* SVG Waves */}
      <div className={`bg-[#cae9f0] absolute top-0 left-0 w-full h-full pointer-events-none transition-all duration-[1500ms] ${
              showLightWave ? "opacity-100 translate-y-0" : " opacity-0 translate-y-[15%]"
            }`}
            ref={lightWaveRef}>
        {/* Light Blue Wave */}
        <svg
          id="visual"
          viewBox="0 185 960 540"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          className="w-full h-full"
          preserveAspectRatio="xMidYMin slice"
        >
          <rect width="100%" height="100%" fill="#ffffff"></rect>
          <path
            d="M0 217L26.7 209C53.3 201 106.7 185 160 192.3C213.3 199.7 266.7 230.3 320 254.3C373.3 278.3 426.7 295.7 480 299.2C533.3 302.7 586.7 292.3 640 279.7C693.3 267 746.7 252 800 235.7C853.3 219.3 906.7 201.7 933.3 192.8L960 184L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
            fill="#cae9f0"
            className={`transition-all duration-[1500ms] z-0 ${
              showLightWave ? "opacity-100 translate-y-0" : " opacity-0 translate-y-[15%]"
            }`}
            ref={lightWaveRef}
          ></path>

          {/* Dark Blue Wave */}
          <path
            d="M0 391L26.7 397C53.3 403 106.7 415 160 402.3C213.3 389.7 266.7 352.3 320 343.7C373.3 335 426.7 355 480 370.5C533.3 386 586.7 397 640 407.3C693.3 417.7 746.7 427.3 800 418.7C853.3 410 906.7 383 933.3 369.5L960 356V1000H0V391Z"
            fill="#5469b2"
            className={`transition-all duration-[1500ms] translate-y-[-50px] delay-200 ${
              showDarkWave ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20%]"
            }`}
            ref={darkWaveRef}
          ></path>
        </svg>
      </div>
    </div>
  );
}
