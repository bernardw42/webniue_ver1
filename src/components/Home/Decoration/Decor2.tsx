"use client"

import Image from "next/image"
import swirl from "../../../../public/home/swirl1.webp"
import swirl2 from "../../../../public/home/swirl2.png"

export default function Decor() {
    return (
      <div className="absolute h-full flex justify-center gap-x-[1050px] pt-[500px] items-center overflow-hidden z-20">
        <Image
          src={swirl}
          alt="swirl"
          className="h-[575px] w-[auto] -scale-x-100 rotate-[-200deg] mb-[400px] max-lg:hidden"
        />
        <Image
          src={swirl}
          alt="swirl"
          className="h-[525px] w-auto rotate-[40deg] mb-[150px] max-lg:hidden"
      />
    </div>
    );
  }