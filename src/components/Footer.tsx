'use client';

import { useTranslation, LinkWithLocale } from 'next-export-i18n';
import Image from 'next/image';
import Logo from '@/../public/footer/logo1.png';
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className='bg-white w-full h-full flex justify-center'>
            <div className="bg-[white] w-full justify-center pt-[100px] pb-[150px]">
                <div className="max-w-7xl mx-auto">
                    <div className='flex flex-col justify-center px-6'>
                        <div className='flex flex-wrap gap-y-[50px] gap-x-[120px] justify-start'>
                            <div className="flex-col flex justify-between w-[400px] gap-y-[50px]">
                                <LinkWithLocale href="/">
                                    <Image src={Logo} alt="logo" className="w-[120px]"></Image>
                                </LinkWithLocale>
                                <div className='flex justify-center items-center bg-[#5569B2] w-[130px] h-[40px] rounded-xl'>
                                    <p className='text-[20px] text-[white]'>Contact Us:</p>
                                </div>
                                <div className='flex flex-col text-[20px] text-[#5569B2] gap-y-[20px]'>
                                    <p>Email: info@shiniro.com</p>
                                    <p>Phone: +6285173216550</p>
                                    <p>Adress: Kota Tangerang, Kawasan Pusat Niaga Terpadu, KM. 19.6 Blok D No. 8i, Batu Ceper</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between w-[700px] gap-y-[50px]">
                                <div className='flex justify-between flex-wrap max-md:flex-col px-2'>
                                    <ul className="flex flex-wrap text-[#033C5A] max-md:flex-col">
                                        <li>
                                            <LinkWithLocale href="/aboutus" className="font-medium text-[17px] text-[#5569B2]  hover:text-[#2c365a] pr-5 py-3 max-md:pr-[0px] flex items-center transition duration-150 ease-in-out">
                                                {t('Footer.p1')}
                                            </LinkWithLocale>
                                        </li>
                                        <li>
                                            <LinkWithLocale href="/services" className="font-medium text-[17px] text-[#5569B2]  hover:text-[#2c365a] px-5 py-3 max-md:px-[0px] flex items-center transition duration-150 ease-in-out">
                                                {t('Footer.p2')}
                                            </LinkWithLocale>
                                        </li>
                                        <li>
                                            <LinkWithLocale href="/blog" className="font-medium text-[17px] text-[#5569B2]  hover:text-[#2c365a] px-5 py-3 max-md:px-[0px] flex items-center transition duration-150 ease-in-out">
                                                {t('Footer.p3')}
                                            </LinkWithLocale>
                                        </li>
                                        <li>
                                            <LinkWithLocale href="/article" className="font-medium text-[17px] text-[#5569B2]  hover:text-[#2c365a] px-5 py-3 max-md:pl-[0px] flex items-center transition duration-150 ease-in-out">
                                                {t('Footer.p4')}
                                            </LinkWithLocale>
                                        </li>
                                    </ul>
                                    <div className='flex flex-wrap gap-x-[20px] self-center max-md:self-start max-md:py-3'>
                                        <Link href="mailto:customer.service@pbl.co.id"  target="_blank" className="w-[30px] h-[30px] max-sm:w-[40px] max-sm:h-[40px] bg-[#5569B2] hover:bg-[#2c365a] duration-300  rounded-full flex items-center justify-center text-white">
                                            <FaEnvelope size={12} />
                                        </Link>
                                        <Link href="http://wa.me/6285217177239" target="_blank" className="w-[30px] h-[30px] max-sm:w-[40px] max-sm:h-[40px] bg-[#5569B2] hover:bg-[#2c365a] duration-300  rounded-full flex items-center justify-center text-white">
                                            <FaWhatsapp size={15} />
                                        </Link>
                                        <Link href="https://www.instagram.com/pancabudilogistindo/" target="_blank" className="w-[30px] h-[30px] max-sm:w-[40px] max-sm:h-[40px] bg-[#5569B2] hover:bg-[#2c365a] duration-300 rounded-full flex items-center justify-center text-white">
                                            <FaInstagram size={15} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex bg-[#5569B2] w-full max-w-4xl h-[250px] rounded-2xl justify-center items-center mx-auto px-4">
                                    <div className="mt-6 flex w-full max-w-md gap-x-4">
                                        <label htmlFor="email-address" className="sr-only">Email address</label>
                                        <input 
                                        id="email-address" 
                                        name="email" 
                                        type="email" 
                                        autoComplete="email" 
                                        required 
                                        className="min-w-0 flex-auto rounded-md border-0 bg-[#FFFBFB] px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6 w-full" 
                                        placeholder="Enter your email" 
                                        />
                                        <button 
                                        type="submit" 
                                        className="flex-none rounded-md border border-white duration-300 bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-[#5569B2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                        >
                                        Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            Here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
