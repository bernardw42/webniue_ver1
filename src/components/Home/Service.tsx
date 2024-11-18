'use client'

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from 'react-transition-group';
import Card from './ServiceCard/Card';
import img from '../../../public/home/compress/1.webp';
import img2 from '../../../public/home/compress/2.webp';
import img3 from '../../../public/home/compress/3.webp';
import Typist from 'react-typist-component';
import Decor from './Decoration/Decor';
import { useTranslation } from 'next-export-i18n';


const Service = () => {
    const { t } = useTranslation();

    const CardData = [
      {
        title: t('HomeService.h'),
        desc:
        t('HomeService.p'),
        image: img,
        link: "/services"  // Linking to the Media section
      },
      {
        title: t('HomeService.h1'),
        desc:
        t('HomeService.p1'),
        image: img2,
        link: "/services"  // Linking to the Social Media section
      },
      {
        title: t('HomeService.h2'),
        desc:
        t('HomeService.p2'),
        image: img3,
        link: "/services"  // Linking to the Social Posts section
      },
    ];
    

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
              {t('HomeCard.p')}
            </h1>
            <h2 className="font-extrabold text-[54px] max-md:text-[42px] max-w-6xl text-[#5569B2] px-6">
                <Typist typingDelay={50} restartKey={textInView}>
                {t('HomeCard.p1')}
                </Typist>
            </h2>
            <p className={`font-normal text-black text-[20px] max-md:text-[16px] max-w-6xl px-4 transition-all duration-1000 delay-[2000ms] ${textInView ? 'opacity-100' : 'opacity-0'}`}>
              {t('HomeCard.p2')}
            </p>
        </div>
      </div>
    );
  }
  
  export default Service;