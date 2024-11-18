/* eslint-disable react/no-unescaped-entities */

"use client"
import Image from "next/image"
import img from "@/../public/services/1.webp"
import img2 from "@/../public/services/2.webp"
import img3 from "@/../public/services/3.webp"
import ball1 from "@/../public/aboutus/compress/ball1.webp";
import ball2 from "@/../public/aboutus/compress/ball2.webp";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "next-export-i18n"

export default function Section() {
    const [position1, setPosition1] = useState({ x: 0, y: 0 });
    const [shadow1, setShadow1] = useState(false);
    const [position2, setPosition2] = useState({ x: 0, y: 0 });
    const [shadow2, setShadow2] = useState(false);
    const [position3, setPosition3] = useState({ x: 0, y: 0 });
    const [shadow3, setShadow3] = useState(false);

    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

    const handleMouseMove1 = (e: { clientX: any; clientY: any }) => {
        if (isDesktop) {
            const { clientX, clientY } = e;
            setPosition1({ x: clientX, y: clientY });
        }
    };
    const handleMouseMove2 = (e: { clientX: any; clientY: any }) => {
        if (isDesktop) {
            const { clientX, clientY } = e;
            setPosition2({ x: clientX, y: clientY });
        }
    };
    const handleMouseMove3 = (e: { clientX: any; clientY: any }) => {
        if (isDesktop) {
            const { clientX, clientY } = e;
            setPosition3({ x: clientX, y: clientY });
        }
    };

    // Animation for Section 1
    const [div1Ref, div1InView] = useInView({
        triggerOnce: true,
        rootMargin: "-200px 0px",
    });
    const [showDiv1, setShowDiv1] = useState(false);

    useEffect(() => {
        if (div1InView) setShowDiv1(true);
    }, [div1InView]);

    // Animation for Section 2
    const [div2Ref, div2InView] = useInView({
        triggerOnce: true,
        rootMargin: "-200px 0px",
    });
    const [showDiv2, setShowDiv2] = useState(false);

    useEffect(() => {
        if (div2InView) setShowDiv2(true);
    }, [div2InView]);

    // Animation for Section 3
    const [div3Ref, div3InView] = useInView({
        triggerOnce: true,
        rootMargin: "-200px 0px",
    });
    const [showDiv3, setShowDiv3] = useState(false);

    useEffect(() => {
        if (div3InView) setShowDiv3(true);
    }, [div3InView]);

    const { t } = useTranslation();

    return (
        <div className="h-full w-full bg-white justify-center items-center flex flex-col overflow-hidden relative max-md:pt-[50px]" >
            {/* Decorative Ball 1 */}
            <Image
                src={ball1}
                alt="Ball Decoration 1"
                className="absolute top-[550px] left-[-250px] w-[550px] rotate-[180deg] h-auto max-md:left-[-100px] z-10 opacity-50 max-lg:hidden"
            />

            {/* Decorative Ball 2 */}
            <Image
                src={ball2}
                alt="Ball Decoration 2"
                className="absolute top-[1300px] right-[-350px] w-[700px] h-auto rotate-[160deg] max-md:right-[-100px] z-10 opacity-50 max-lg:hidden"
            />

            {/* First Section - Slide in from left */}
            <div
                id="social-media"
                className="bg-white w-screen h-full pt-[270px] max-md:pt-[150px] justify-center items-center flex relative"
                onMouseMove={handleMouseMove1}
            >
                <div className="max-w-7xl h-full w-full justify-between max-lg:items-center flex max-lg:flex-col px-8 gap-y-[30px]">
                    <div
                        ref={div1Ref}
                        className={`max-w-[600px] flex flex-col gap-y-5 transition-all duration-[1500ms] ${
                            showDiv1 ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-100%]"
                        }`}
                    >
                        <h1 className="text-[36px] max-md:text-[28px] font-medium text-left text-[#5569B2]">{t('ServSoc.h')}</h1>
                        <p className="text-[22px] max-md:text-[18px] text-black mt-[-20px] mb-[20px] font-light">{t('ServSoc.h2')}</p>
                        {/* <button className="text-[20px] self-start bg-[#5569B2] text-white px-4 py-2 hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300">Learn More</button> */}
                        <ul className="list-disc pl-4 text-[22px] max-md:text-[18px] space-y-1">
                            <li>{t('ServSoc.p')}</li>
                            <li>{t('ServSoc.p1')}</li>
                            <li>{t('ServSoc.p2')}</li>
                            <li>{t('ServSoc.p3')}</li>
                            <li>{t('ServSoc.p4')}</li>
                        </ul>
                    </div>
                    <Image
                        src={img}
                        alt="tes"
                        className={`w-[500px] max-md:w-[400px] h-auto max-lg:order-[-1] transition-shadow duration-1000 z-20`}
                        style={{
                            transform: `translate(${position1.x * 0.1}px, ${position1.y * 0.1}px)`,
                        }}
                    />
                </div>
            </div>

            {/* Second Section - Slide in from right */}
            <div
                id="social-posts"
                className="bg-white w-screen h-full justify-center pt-[250px] max-md:pt-[200px] items-center flex relative"
                onMouseMove={handleMouseMove2}
            >
                <div className="max-w-7xl h-full w-full justify-between max-lg:items-center flex max-lg:flex-col px-8 gap-y-[30px] gap-x-[50px]">
                    <Image
                        src={img2}
                        alt="tes"
                        className={`w-[350px] max-md:w-[300px] h-auto transition-shadow duration-1000 z-20`}
                        style={{
                            transform: `translate(${position2.x * 0.1}px, ${position2.y * 0.1}px)`,
                        }}
                    />
                    <div
                        ref={div2Ref}
                        className={`max-w-[600px] flex flex-col gap-y-5 transition-all duration-[1500ms] ${
                            showDiv2 ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[100%]"
                        }`}
                    >
                        <h1 className="text-[36px] max-md:text-[28px] font-medium text-left text-[#5569B2]">{t('ServWeb.h')}</h1>
                        <p className="text-[22px] max-md:text-[18px] text-black mt-[-20px] mb-[20px] font-light">{t('ServWeb.h2')}</p>
                        {/* <button className="text-[20px] self-start bg-[#5569B2] text-white px-4 py-2 hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300">Learn More</button> */}
                        <ul className="list-disc pl-4 text-[22px] max-md:text-[18px] space-y-1">
                            <li>{t('ServWeb.p')}</li>
                            <li>{t('ServWeb.p1')}</li>
                            <li>{t('ServWeb.p2')}</li>
                            <li>{t('ServWeb.p3')}</li>
                            <li>{t('ServWeb.p4')}</li>
                            <li>{t('ServWeb.p5')}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Third Section - Slide in from left */}
            <div
                id="media"
                className="bg-white w-screen h-full justify-center pt-[250px] max-md:pt-[200px] pb-[150px] max-md:pb-0 items-center flex"
                onMouseMove={handleMouseMove3}
            >
                <div className="max-w-7xl h-full w-full justify-between max-lg:items-center flex max-lg:flex-col px-8 gap-y-[30px] gap-x-[50px]">
                    <div
                        ref={div3Ref}
                        className={`max-w-[600px] flex flex-col gap-y-5 transition-all duration-[1500ms] ${
                            showDiv3 ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-100%]"
                        }`}
                    >
                        <h1 className="text-[36px] max-md:text-[28px] font-medium text-left text-[#5569B2]">{t('ServBra.h')}</h1>
                        <p className="text-[22px] max-md:text-[18px] text-black mt-[-20px] mb-[20px] font-light">{t('ServBra.h2')}</p>
                        {/* <button className="text-[20px] self-start bg-[#5569B2] text-white px-4 py-2 hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300">Learn More</button> */}
                        <ul className="list-disc pl-4 text-[22px] max-md:text-[18px] space-y-1">
                            <li>{t('ServBra.p')}</li>
                            <li>{t('ServBra.p1')}</li>
                            <li>{t('ServBra.p2')}</li>
                            <li>{t('ServBra.p3')}</li>
                            <li>{t('ServBra.p4')}</li>
                        </ul>
                    </div>
                    <Image
                        src={img3}
                        alt="tes"
                        className="w-[500px] max-md:w-[420px] h-[auto] max-lg:order-[-1] transition-shadow duration-1000 z-20 "
                        style={{
                            transform: `translate(${position3.x * 0.1}px, ${position3.y * 0.1}px)`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}