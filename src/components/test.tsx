// import Link from 'next/link'
// import Image from 'next/image'
// import Logo from '../../public/footer/logo.png'
// import ig from '../../public/footer/ig.png'
// import lk from '../../public/footer/lk.png'
// import fb from '../../public/footer/fb.png'

// export default function Footer(){
//     return(
//         <div className="relative bg-[#FFFBFB] w-full flex justify-center items-center pt-[70px] pb-[100px]">
//             <div className="flex justify-between w-full flex-wrap max-w-7xl">
//                 {/* logo and adress */}
//                 <div className="flex flex-col max-w-[300px] gap-y-[30px]">
//                     <Image src={Logo} alt='logo' className='w-[250px] ml-[-10px]'></Image>
//                     <div className='flex justify-center items-center bg-[#5569B2] w-[150px] h-[50px] rounded-xl'>
//                         <p className='text-[25px] text-[white]'>Contact Us</p>
//                     </div>
//                     <div className='flex flex-col text-[20px] text-[#5569B2] gap-y-[20px]'>
//                         <p>Email: info@shiniro.com</p>
//                         <p>Phone: +6285173216550</p>
//                         <p>Adress: Kota Tangerang, Kawasan Pusat Niaga Terpadu, KM. 19.6 Blok D No. 8i, Batu Ceper</p>
//                     </div>
//                 </div>
//                 {/* navbar and box */}
//                 <div className='flex flex-col max-w-[800px] justify-between'>
//                     <div className='flex justify-between items-center mt-[20px]'>
//                         <ul className="flex justify-center flex-wrap items-center">
//                             <li>
//                                 <Link href="/aboutus" className="font-medium text-[17px] text-[#5569B2]  hover:text-[#2c365a] px-5 py-3 flex items-center transition duration-150 ease-in-out">About Us</Link>
//                             </li>
//                             <li>
//                                 <Link href="/services" className="font-medium text-[17px] text-[#5569B2]  hover:text-[#2c365a] px-5 py-3 flex items-center transition duration-150 ease-in-out">Services</Link>
//                             </li>
//                             <li>
//                                 <Link href="/pricing" className="font-medium text-[17px] text-[#5569B2]  hover:text-[#2c365a] px-5 py-3 flex items-center transition duration-150 ease-in-out">Pricing</Link>
//                             </li>
//                             <li>
//                                 <Link href="/contatus" className="font-medium text-[17px] text-[#5569B2]  hover:text-[#2c365a] px-5 py-3 flex items-center transition duration-150 ease-in-out">Contact Us</Link>
//                             </li>
//                         </ul>
//                         <div className='flex gap-x-[30px]'>
//                             <Link href="/">
//                                 <Image src={lk} alt='tes' className='w-[30px]'></Image>
//                             </Link>
//                             <Link href="/">
//                                 <Image src={fb} alt='tes' className='w-[30px]'></Image>
//                             </Link>
//                             <Link href="/">
//                                 <Image src={ig} alt='tes' className='w-[30px]'></Image>
//                             </Link>
//                         </div>
//                     </div>
//                     <div className='flex bg-[#5569B2] w-[800px] h-[250px] rounded-2xl justify-center items-center'>
//                         <div className="mt-6 flex max-w-md gap-x-4">
//                             <label htmlFor="email-address" className="sr-only">Email address</label>
//                             <input id="email-address" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-[#FFFBFB] px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6" placeholder="Enter your email"></input>
//                             <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import Typist from "react-typist-component"
<div className="font-bold text-[60px] ">
        <Typist typingDelay={100} cursor={<span className='cursor onTypingDone'>|</span>}>
          This is a test page
        </Typist>
</div>