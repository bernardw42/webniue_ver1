'use client'

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from 'react-transition-group';
import Card from './FeatCard/Card';
import img from '../../../public/home/tes.webp';
import img2 from '../../../public/home/tesheader.webp';
import img3 from '../../../public/home/tes3.webp';
import Decor from './Decoration/Decor2';
import Marketing from './Marketing';


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
  {
    title: 'CONVERSION RATE OPTIMIZATION',
    desc:
      "We've developed an asdasdasdasdasd approach to shaping digital strategies for our client that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment",
    image: img2,
  },
  {
    title: 'DIGITAL CONSULTANCY',
    desc:
      "We've developed an approach to shaping digital strategies for our clients that result in defining prioritized cost-effective solutions that deliver a measurable Return on Investment (ROI).",
    image: img,
  },
];


const Features = () => {
    const [cardRef, cardInView] = useInView({
      triggerOnce: true,
      rootMargin: '-50px 0px', // Adjust the root margin as needed
    });

    return (
      <div className="relative flex flex-col justify-center items-center gap-x-[50px] bg-white w-full text-center pt-[150px]">
        <Decor></Decor>
        <div className="flex flex-wrap justify-center items-center gap-y-[30px] gap-x-[30px] text-center mb-[150px] px-8 max-w-7xl" ref={cardRef}>
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
        <Marketing></Marketing>
      </div>
    );
  }
  
  export default Features;