"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";  // Import Email.js
import { useTranslation } from "next-export-i18n";

export default function Footer2() {
  const [showLightWave, setShowLightWave] = useState(false);
  const [showDarkWave, setShowDarkWave] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [lightWaveRef, lightWaveInView] = useInView({ triggerOnce: true, rootMargin: "0px 0px" });
  const [darkWaveRef, darkWaveInView] = useInView({ triggerOnce: true, rootMargin: "0px 0px" });

  useEffect(() => {
    if (lightWaveInView) setShowLightWave(true);
  }, [lightWaveInView]);

  useEffect(() => {
    if (darkWaveInView) setShowDarkWave(true);
  }, [darkWaveInView]);

  // Handle form input changes
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Form submission handler with Email.js
  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    emailjs
      .send(
        "619000",   // Replace with your Email.js service ID
        "619000t",   // Replace with your Email.js template ID
        formData,
        "_qBl6mxNjdg36oITN"        // Replace with your Email.js user ID
      )
      .then((response) => {
        console.log("Message sent successfully:", response.status, response.text);
        alert("Your message has been sent!");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("An error occurred while sending your message. Please try again.");
      });
  };

  const { t } = useTranslation();

  return (
    <div className="relative w-full bg-white min-h-full overflow-hidden">
      <div className={`relative flex justify-center items-center pt-[450px] pb-[150px] transition-all duration-[1500ms] delay-200 z-30 ${showDarkWave ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[15%]"}`} ref={darkWaveRef}>
        <div className="max-w-7xl w-full h-auto flex flex-col px-8 z-30">
          <div className="flex flex-col max-w-[500px]">
            <h2 className="relative text-[22px] max-md:text-[18px] font-medium text-white before:content-[''] before:absolute before:w-[260px] before:h-[1px] before:bg-white before:top-[-5px] before:left-0 after:content-[''] after:absolute after:w-[260px] after:h-[1px] after:bg-white after:bottom-[-5px] after:left-0">
              {t('Footer.f11')}
            </h2>
            <p className="text-[28px] max-md:text-[22px] mt-10 text-white">{t('Footer.f2')}</p>
            <p className="text-[28px] max-md:text-[22px] text-white">{t('Footer.f3')}</p>

            <form className="mt-8" onSubmit={handleFormSubmit}>
              {/* Name and Email */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t('Footer.f4')}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b p-2 border-white placeholder:font-light placeholder-white text-white focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('Footer.f5')}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b p-2 border-white placeholder:font-light placeholder-white text-white focus:outline-none"
                />
              </div>

              {/* Phone and Subject */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder={t('Footer.f6')}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b p-2 border-white placeholder:font-light placeholder-white text-white focus:outline-none"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder={t('Footer.f7')}
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b p-2 border-white placeholder:font-light placeholder-white text-white focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="mt-4">
                <textarea
                  name="message"
                  placeholder={t('Footer.f8')}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b p-2 h-[100px] border-white placeholder:font-light placeholder-white text-white focus:outline-none resize-none"
                ></textarea>
              </div>

              {/* Send Message Button */}
              <div className="mt-6">
                <button type="submit" className="py-2 px-6 bg-transparent font-semibold bg-white text-[#5469b2] hover:bg-[#b2bbdd] hover:text-[#262f50] transition duration-300">
                {t('Footer.f9')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* SVG Waves */}
      <div className={`bg-[#cae9f0] absolute top-0 left-0 w-full h-full pointer-events-none transition-all duration-[1000ms] ${
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
