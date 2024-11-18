"use client"

import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  image: StaticImageData;
  className?: string; // Add className to the CardProps type
}

const Card: React.FC<CardProps> = ({ title, image, className}) => {
  return (
    <div className={`flex flex-col justify-start items-center bg-white gap-y-[30px] max-md:w-[290px] w-[300px] h-[400px] rounded-lg drop-shadow-2xl px-8 py-14 ${className}`}>
      <Image src={image} alt="tes" className="max-h-[180px] w-auto" />
      <div className="text-center">
        <h1 className="text-[20px] min-h-[70px] font-semibold mb-[10px] text-[#5569B2]">{title}</h1>
      </div>
    </div>
    )
}

export default Card;