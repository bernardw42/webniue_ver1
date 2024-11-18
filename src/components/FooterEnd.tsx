'use client';

import { useTranslation, LinkWithLocale } from 'next-export-i18n';
import Link from 'next/link';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div className='bg-white w-full h-full flex justify-center pt-[80px] pb-[80px] max-sm:pt-[200px] max-sm:pb-[200px]'>
            <div className={`max-w-7xl justify-center items-center w-full flex gap-x-[70px] px-8 flex-col`}>
                    <p className='text-black font-light pb-[10px] text-center'>NIEU. Copyright © 2024  PT Warna Baru Kreatif. All Rights Reserved.</p>
                    <div className='flex flex-wrap gap-x-[15px]'>
                        {/* <Link href="mailto:customer.service@pbl.co.id"  target="_blank" className=" duration-300 flex text-black font-light">
                            LINKEDIN
                        </Link>
                        <p className={`font-medium text-black flex items-center`}>|</p> */}
                        <Link href="https://www.instagram.com/official_nieu/" target="_blank" className="flex text-black font-light">
                            INSTAGRAM
                        </Link>
                        <p className={`font-medium text-black flex items-center`}>|</p>
                        <Link href="/blog" className="flex text-black font-light">
                            BLOG
                        </Link>
                    </div>
            </div>
        </div>
    );
}
