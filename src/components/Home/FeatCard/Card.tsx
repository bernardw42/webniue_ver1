"use client"
import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  desc: string;
  image: StaticImageData;
  className?: string; // Add className to the CardProps type
}

const Card: React.FC<CardProps> = ({ title, desc, image, className}) => {
  return (
    <div className={`flex flex-col justify-start gap-y-[30px] items-center max-w-[385px] min-h-[500px] px-10 ${className}`}>
      <Image src={image} alt="tes" className="max-h-[160px] w-auto" />
      <div className="text-center">
        <h1 className="text-[28px] min-h-[90px] font-medium mb-[10px] text-[#5569B2]">{title}</h1>
        <p className="text-[16px] min-h-[120px] text-black">{desc}</p>
      </div>
    </div>
    )
}

export default Card;