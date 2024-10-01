"use client"
import Image from "next/image"
import img from "@/../public/services/1.png"
import img2 from "@/../public/services/2.png"
import img3 from "@/../public/services/3.png"
import { useState } from "react"

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

    const handleMouseEnter1 = () => setShadow1(true);
    const handleMouseLeave1 = () => {
        setShadow1(false);
        setPosition1({ x: 0, y: 0 }); // Reset position
    };

    const handleMouseMove2 = (e: { clientX: any; clientY: any }) => {
        if (isDesktop) {
          const { clientX, clientY } = e;
          setPosition2({ x: clientX, y: clientY });
        }
      };

    const handleMouseEnter2 = () => setShadow2(true);
    const handleMouseLeave2 = () => {
        setShadow2(false);
        setPosition2({ x: 0, y: 0 });
    };

    const handleMouseMove3 = (e: { clientX: any; clientY: any }) => {
        if (isDesktop) {
          const { clientX, clientY } = e;
          setPosition3({ x: clientX, y: clientY });
        }
      };

    const handleMouseEnter3 = () => setShadow3(true);
    const handleMouseLeave3 = () => {
        setShadow3(false);
        setPosition3({ x: 0, y: 0 });
    };

    return (
        <div className="h-full w-full justify-center items-center flex flex-col overflow-hidden max-lg:gap-y-[150px] gap-y-[250px] pt-[200px] pb-[150px] max-sm:pt-[200px] max-sm:pb-[0px]" >
            {/* First Section */}
            <div
                className="bg-white w-screen h-full justify-center items-center flex"
                onMouseMove={handleMouseMove1}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
            >
                <div className="max-w-7xl h-full w-full justify-between max-lg:items-center flex max-lg:flex-col px-8 gap-y-[30px] gap-x-[50px]">
                    <div className="max-w-[600px] flex flex-col gap-y-5">
                        <h1 className="text-[36px] max-md:text-[28px] font-medium text-left text-[#5569B2]">
                            Social Media
                        </h1>
                        <p className="text-[16px] text-black mt-[-20px] mb-[20px]">
                            Customers interact with brands via social media.
                            SMM can bring tremendous success to your business.
                        </p>
                        <button className="text-[20px] self-start bg-[#5569B2] text-white px-4 py-2 hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300">
                            Learn More
                        </button>
                        <ul className="list-disc pl-4 text-[20px] space-y-1">
                            <li>Digital Campaigns</li>
                            <li>Community Management</li>
                            <li>Copywriting</li>
                            <li>Public Relations</li>
                            <li>Social Media Strategies</li>
                            <li>Email Marketing</li>
                            <li>SEO</li>
                            <li>SEM</li>
                        </ul>
                    </div>
                    <Image
                        src={img}
                        alt="tes"
                        className={`w-[600px] h-auto max-lg:order-[-1] transition-shadow duration-1000`}
                        style={{
                            transform: `translate(${position1.x * 0.1}px, ${position1.y * 0.1}px)`,
                        }}
                    />
                </div>
            </div>

            {/* Second Section */}
            <div
                className="bg-white w-screen h-full justify-center items-center flex"
                onMouseMove={handleMouseMove2}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
            >
                <div className="max-w-7xl h-full w-full justify-between flex max-lg:flex-col px-8 gap-y-[30px] gap-x-[50px]">
                    <Image
                        src={img2}
                        alt="tes"
                        className={`w-[450px] h-auto transition-shadow duration-1000`}
                        style={{
                            transform: `translate(${position2.x * 0.1}px, ${position2.y * 0.1}px)`,
                        }}
                    />
                    <div className="max-w-[500px] flex flex-col gap-y-5">
                        <h1 className="text-[36px] max-md:text-[28px] font-medium text-left text-[#5569B2]">
                            Social Media
                        </h1>
                        <p className="text-[16px] text-black mt-[-20px] mb-[20px]">
                            Customers interact with brands via social media.
                            SMM can bring tremendous success to your business.
                        </p>
                        <button className="text-[20px] self-start bg-[#5569B2] text-white px-4 py-2 hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300">
                            Learn More
                        </button>
                        <ul className="list-disc pl-4 text-[20px] space-y-1">
                            <li>Digital Campaigns</li>
                            <li>Community Management</li>
                            <li>Copywriting</li>
                            <li>Public Relations</li>
                            <li>Social Media Strategies</li>
                            <li>Email Marketing</li>
                            <li>SEO</li>
                            <li>SEM</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Third Section */}
            <div
                className="bg-white w-screen h-full justify-center items-center flex"
                onMouseMove={handleMouseMove3}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
            >
                <div className="max-w-7xl h-full w-full justify-between flex max-lg:flex-col px-8 gap-y-[30px] gap-x-[50px]">
                    <div className="max-w-[600px] flex flex-col gap-y-5">
                        <h1 className="text-[36px] max-md:text-[28px] font-medium text-left text-[#5569B2]">
                            Social Media
                        </h1>
                        <p className="text-[16px] text-black mt-[-20px] mb-[20px]">
                            Customers interact with brands via social media.
                            SMM can bring tremendous success to your business.
                        </p>
                        <button className="text-[20px] self-start bg-[#5569B2] text-white px-4 py-2 hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300">
                            Learn More
                        </button>
                        <ul className="list-disc pl-4 text-[20px] space-y-1">
                            <li>Digital Campaigns</li>
                            <li>Community Management</li>
                            <li>Copywriting</li>
                            <li>Public Relations</li>
                            <li>Social Media Strategies</li>
                            <li>Email Marketing</li>
                            <li>SEO</li>
                            <li>SEM</li>
                        </ul>
                    </div>
                    <Image
                        src={img3}
                        alt="tes"
                        className="w-[600px] h-[auto] max-lg:order-[-1] transition-shadow duration-1000"
                        style={{
                            transform: `translate(${position3.x * 0.1}px, ${position3.y * 0.1}px)`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
