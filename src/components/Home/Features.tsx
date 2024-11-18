'use client'

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Transition } from 'react-transition-group';
import Card from './FeatCard/Card';
import img from '../../../public/home/compress/a.webp';
import img2 from '../../../public/home/compress/b.webp';
import img3 from '../../../public/home/compress/c.webp';
import img4 from '../../../public/home/compress/d.webp';
import Decor from './Decoration/Decor2';
import Marketing from './Marketing';
import { useTranslation } from 'next-export-i18n';


const Features = () => {
    const [cardRef, cardInView] = useInView({
      triggerOnce: true,
      rootMargin: '-350px 0px', // Adjust the root margin as needed
    });

    const { t } = useTranslation();
    const CardData = [
      {
        title: t('HomeMap.h'),
        desc: t('HomeMap.p'),
        image: img,
      },
      {
        title: t('HomeMap.h1'),
        desc: t('HomeMap.p1'),
        image: img2,
      },
      {
        title: t('HomeMap.h2'),
        desc: t('HomeMap.p2'),
        image: img3,
      },
      {
        title: t('HomeMap.h3'),
        desc: t('HomeMap.p3'),
        image: img4,
      },
      // {
      //   title: t('HomeMap.h4'),
      //   desc: t('HomeMap.p4'),
      //   image: img5,
      // },
    ];

    return (
      <div className="relative flex flex-col justify-center items-center gap-x-[50px] bg-white w-full text-center pt-[150px]">
        <Decor></Decor>
        <div className="flex flex-wrap justify-center items-center gap-y-[30px] gap-x-[5px] text-center mb-[150px] px-8 max-w-7xl" ref={cardRef}>
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