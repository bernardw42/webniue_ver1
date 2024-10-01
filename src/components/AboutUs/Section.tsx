"use client"
import img from "@/../public/aboutus/img.png"
import Image from "next/image"
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function Section(){
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

    
    return(
        <div className="flex flex-col justify-center items-center w-full overflow-x-hidden">
            <div className="bg-[#F9F9F9] w-screen h-full flex justify-center items-center pt-[200px] pb-[200px] max-sm:pt-[150px] max-sm:pb-[150px]">
                <div className="max-w-7xl w-full flex flex-col px-8 text-left">
                    <h1 className="text-left font-medium text-[36px] max-md:text-[28px] mb-2">FOUNDED IN 2024</h1>
                    <h1 className={`text-left text-[#5569B2] text-[36px] max-md:text-[28px] max-w-[450px] mb-8 transition-all duration-[2000ms] ${
              showDiv1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100%]"}`}
              ref={div1Ref}>WITH STRONG ROOT OF ESTABLISHMENT IN TANGERANG</h1>
                    <p className={`text-justify text-[22px] max-md:text-[18px] max-w-[950px] transition-all duration-[2300ms] ${
              showDiv1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[50%]"}`}
              ref={div1Ref}>We are a young and fast growing company that provides bespoke strategies infused with global
knowledge and implemented locally. With all services under one roof, we strive to maximise
efficiency and deliver smoother collaboration between us and our partners.</p>
                </div>
            </div>
            <div className="bg-white w-screen h-full flex justify-center items-center pt-[200px] pb-[150px] max-sm:pt-[150px] max-sm:pb-[100px]">
                <div className="max-w-7xl w-screen flex max-lg:flex-col items-center justify-center px-8 text-left gap-x-[50px] gap-y-10 max-lg:gap-y-5">
                    <Image 
                        src={img} 
                        alt="yes" 
                        className={`w-[300px] h-auto max-lg:order-[-1] transition-all duration-[1500ms] ${
                            showDiv2 ? "opacity-100" : "opacity-0"
                        }`}
                        ref={div2Ref}
                    />
                    
                    <div className={`flex flex-col w-[700px] max-lg:w-[90%] justify-between py-3 text-left max-lg:text-center gap-y-5 transition-all duration-[2000ms] delay-[300ms] ${
                        showDiv2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100%]"}`}
                        ref={div2Ref}>
                        <h1 className="text-[36px] max-md:text-[28px] font-medium">
                        WE ARE <span className="text-[#5569B2]">GLOBALLY CONNECTED</span>
                        </h1>
                        <p className="text-[22px] text-justify max-md:text-[18px]">
                        We are part of Tribe Global, a growing network of independent communications agencies and smart businesses.
                        We believe in empowering you as an independent business.
                        With our participation in Tribe network, we are now even better poised to provide clients with high performing and creatively winning strategies. You’ll find our network in more than 75 cities around the world with more than 3000 Tribe people speaking more than 30 languages.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}