'use client'

import { useState, useEffect } from 'react'
import { useTranslation, LinkWithLocale, LanguageSwitcher } from 'next-export-i18n';
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/navbar/logo3.webp'
import MobileMenu from '@/components/NavbarMobile'
import globe from "@/../public/navbar/world.webp"

export default function Header() {
  const { t } = useTranslation();
  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-40 md:bg-opacity-100 transition duration-300 ease-in-out ${!top ? 'bg-[#5569B2] backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-1 max-lg:py-2 ">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4 z-30">
            <LinkWithLocale href="/">
                <Image src={Logo} alt='tes' className='w-[120px] max-md:w-[110px] drop-shadow-2xl'></Image>
            </LinkWithLocale>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <LinkWithLocale href="/aboutus" className="font-medium text-[17px] text-white hover:text-gray-600 lg:px-5 px-2 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl">{t('NavBar.p1')}</LinkWithLocale>
              </li>
              <li>
                <LinkWithLocale href="/services" className="font-medium text-[17px] text-white hover:text-gray-600 lg:px-5 px-2 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl">{t('NavBar.p2')}</LinkWithLocale>
              </li>
              <li>
                <LinkWithLocale href="/blog" className="font-medium text-[17px] text-white hover:text-gray-600 lg:px-5 px-2 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl">{t('NavBar.p3')}</LinkWithLocale>
              </li>
              <li>
                <LinkWithLocale href="/ourworks" className="font-medium text-[17px] text-white hover:text-gray-600 lg:px-5 px-2 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl">{t('NavBar.p5')}</LinkWithLocale>
              </li>
              <li>
                <LinkWithLocale href="/contactus" className="font-medium text-[17px] text-white hover:text-gray-600 lg:px-5 px-2 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl">{t('NavBar.p4')}</LinkWithLocale>
              </li>
              <div className='flex flex-wrap items-center px-4 font-medium gap-x-1'>
                <Image src={globe} alt='lang' className='w-[30px] drop-shadow-2xl' />
                <LanguageSwitcher lang="en" className={`font-medium text-[17px] text-white hover:text-gray-600 px-1 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl focus:outline-none`}>
                  <p className='font-medium text-[17px] text-white hover:text-gray-600'>EN</p>
                </LanguageSwitcher>
                <p className={`font-medium text-[17px] text-white py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl`}>|</p>
                <LanguageSwitcher lang="id" className={`font-medium text-[17px] text-white hover:text-gray-600 px-1 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl focus:outline-none`}>
                  <p className='font-medium text-[17px] text-white hover:text-gray-600'>ID</p>
                </LanguageSwitcher>
              </div>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
