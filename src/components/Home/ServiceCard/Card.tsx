"use client"
import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  desc: string;
  image: StaticImageData;
  className?: string; // Add className to the CardProps type
}

const Card: React.FC<CardProps> = ({ title, desc, image, className}) => {
  return (
    <div className={`flex flex-col justify-start gap-y-[30px] items-center bg-white max-w-[415px] rounded-lg drop-shadow-2xl px-8 py-16 ${className}`}>
      <Image src={image} alt="tes" className="max-h-[180px] w-auto" />
      <div className="text-center">
        <h1 className="text-[28px] min-h-[90px] font-medium mb-[10px] text-[#5569B2]">{title}</h1>
        <p className="text-[16px] min-h-[140px] text-black">{desc}</p>
      </div>
            <ul>
                <li>
                    <Link href="/services" className="font-semithin text-[17px] text-yellow-600 hover:text-yellow-900 px-5 py-3 transition duration-150 ease-in-out">LEARN MORE</Link>
                </li>
            </ul>
        </div>
    )
}

export default Card;