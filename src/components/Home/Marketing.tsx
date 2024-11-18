'use client'

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from 'react-transition-group';
import Card from '../Home/MarketCard/Card';
import img from '../../../public/home/compress/11.webp';
import img2 from '../../../public/home/compress/12.webp';
import img3 from '../../../public/home/compress/13.webp';
import img4 from '../../../public/home/compress/14.webp';
import Typist from 'react-typist-component';
import { useTranslation } from 'next-export-i18n';


const Marketing = () => {
  const { t } = useTranslation();

  const CardData = [
    {
      title: t('HomeMessage.h1'),
      image: img,
    },
    {
      title: t('HomeMessage.h2'),
      image: img2,
    },
    {
      title: t('HomeMessage.h3'),
      image: img3,
    },
    {
      title: t('HomeMessage.h4'),
      image: img4,
    },
  ];
    const [cardRef, cardInView] = useInView({
      triggerOnce: true,
      rootMargin: '-200px 0px', // Adjust the root margin as needed
    });

    const [textRef, textInView] = useInView({
        triggerOnce: true,
        rootMargin: '-150px 0px', // Adjust the root margin as needed
      });

    return (
      <div className="relative flex flex-col justify-center items-center gap-x-[50px] bg-[#F9F9F9] w-full text-center pt-[150px]">
        <div className="flex w-full justify-center gap-y-[10px] items-center flex-col pb-[70px]" ref={textRef}>
          <h2
            className={`font-extrabold text-[35px] max-w-6xl text-[#5569B2] px-6 transition-opacity duration-1000 ${
              textInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {textInView && (
              <Typist typingDelay={30} restartKey={textInView}>
                {t('HomeMessage.h')}
              </Typist>
            )}
          </h2>
            <h1 className={`font-semibold text-[25px] max-w-6xl text-black px-6 transition-all duration-1000 delay-[1000ms] ${textInView ? 'opacity-100' : 'opacity-0'}`}>
              {t('HomeMessage.p')}
            </h1>
        </div>
        <div className="flex justify-center flex-wrap gap-y-[30px] items-center gap-x-[30px] text-center mb-[200px] px-8" ref={cardRef}>
          {CardData.map((CardDetail, index) => (
            <Transition key={CardDetail.title} in={cardInView} timeout={500 * index}>
              {(state: string) => (
                <Card
                  key={CardDetail.title}
                  {...CardDetail}
                  className={`${
                    state === 'entered' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-70px]'
                  } transition-all delay-[500ms] duration-[2000ms] ease-in-out`}
                ></Card>
              )}
            </Transition>
          ))}
        </div>
      </div>
    );
  }
  
  export default Marketing;