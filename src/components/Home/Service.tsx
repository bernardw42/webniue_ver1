'use client'

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from 'react-transition-group';
import Card from './ServiceCard/Card';
import img from '../../../public/home/tes.webp';
import img2 from '../../../public/home/tesheader.webp';
import img3 from '../../../public/home/tes3.webp';
import Typist from 'react-typist-component';
import Decor from './Decoration/Decor';


const CardData = [
  {
    title: 'DIGITAL CONSULTANCY',
    desc:
      "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment (ROI).",
    image: img,
  },
  {
    title: 'CONVERSION RATE OPTIMIZATION',
    desc:
      "We've developed an asdasdasdasdasd approach to shaping digital strategies for our client that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment",
    image: img2,
  },
  {
    id: 'asdasdqwr',
    title: 'ONLINE REPUTATION MANAGEMENT',
    desc:
      "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a.",
    image: img3,
  },
];

const Service = () => {
    const [cardRef, cardInView] = useInView({
      triggerOnce: true,
      rootMargin: '-50px 0px', // Adjust the root margin as needed
    });
  
    const [textRef, textInView] = useInView({
      triggerOnce: true,
      rootMargin: '-150px 0px', // Adjust the root margin as needed
    });
  
    return (
      <div className="relative flex flex-col justify-center items-center gap-x-[50px] bg-white w-full text-center pt-[200px]">
        <Decor></Decor>
        <div className="flex justify-center flex-wrap gap-y-[30px] items-center gap-x-[30px] text-center mb-[200px] px-8" ref={cardRef}>
          {CardData.map((CardDetail, index) => (
            <Transition key={CardDetail.title} in={cardInView} timeout={500 * index}>
              {(state: string) => (
                <Card
                  key={CardDetail.title}
                  {...CardDetail}
                  className={`${
                    state === 'entered' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-70px]'
                  } transition-all duration-[1500ms] ease-in-out`}
                ></Card>
              )}
            </Transition>
          ))}
        </div>
        <div className="flex bg-[#F9F9F9] w-full h-full justify-between gap-y-[15px] max-lg:gap-y-[30px] items-center flex-col pt-[150px] pb-[150px] min-h-[510px]" ref={textRef}>
            <h1 className={`font-semibold text-[25px] max-md:text-[20px] max-w-6xl text-[#5569B2] px-6 transition-all duration-1000 delay-[2000ms] ${textInView ? 'opacity-100' : 'opacity-0'}`}>
                GROW TRAFFIC & INCREASE REVENUE
            </h1>
            <h2 className="font-extrabold text-[54px] max-md:text-[42px] max-w-6xl text-[#5569B2] px-6">
                <Typist typingDelay={50} restartKey={textInView}>
                Appear On The Front Page of Google!
                </Typist>
            </h2>
            <p className={`font-normal text-black text-[20px] max-md:text-[16px] max-w-6xl px-4 transition-all duration-1000 delay-[2000ms] ${textInView ? 'opacity-100' : 'opacity-0'}`}>
                We offer professional SEO services that help websites increase their
                organic search score drastically in order to compete for the highest
                rankings — even when it comes to highly competitive keywords.
            </p>
        </div>
      </div>
    );
  }
  
  export default Service;