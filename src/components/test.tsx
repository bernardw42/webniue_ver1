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
// "use client"
// import Image from "next/image"
// import img from "@/../public/services/1.png"
// import img2 from "@/../public/services/2.png"
// import img3 from "@/../public/services/3.png"
// import ball1 from "@/../public/aboutus/ball1.png";
// import ball2 from "@/../public/aboutus/ball2.png";
// import { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// export default function Section() {
//     const [position1, setPosition1] = useState({ x: 0, y: 0 });
//     const [shadow1, setShadow1] = useState(false);
//     const [position2, setPosition2] = useState({ x: 0, y: 0 });
//     const [shadow2, setShadow2] = useState(false);
//     const [position3, setPosition3] = useState({ x: 0, y: 0 });
//     const [shadow3, setShadow3] = useState(false);

//     const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

//     const handleMouseMove1 = (e: { clientX: any; clientY: any }) => {
//         if (isDesktop) {
//             const { clientX, clientY } = e;
//             setPosition1({ x: clientX, y: clientY });
//         }
//     };
//     const handleMouseMove2 = (e: { clientX: any; clientY: any }) => {
//         if (isDesktop) {
//             const { clientX, clientY } = e;
//             setPosition2({ x: clientX, y: clientY });
//         }
//     };
//     const handleMouseMove3 = (e: { clientX: any; clientY: any }) => {
//         if (isDesktop) {
//             const { clientX, clientY } = e;
//             setPosition3({ x: clientX, y: clientY });
//         }
//     };

//     // Animation for Section 1
//     const [div1Ref, div1InView] = useInView({
//         triggerOnce: true,
//         rootMargin: "-200px 0px",
//     });
//     const [showDiv1, setShowDiv1] = useState(false);

//     useEffect(() => {
//         if (div1InView) setShowDiv1(true);
//     }, [div1InView]);

//     // Animation for Section 2
//     const [div2Ref, div2InView] = useInView({
//         triggerOnce: true,
//         rootMargin: "-200px 0px",
//     });
//     const [showDiv2, setShowDiv2] = useState(false);

//     useEffect(() => {
//         if (div2InView) setShowDiv2(true);
//     }, [div2InView]);

//     // Animation for Section 3
//     const [div3Ref, div3InView] = useInView({
//         triggerOnce: true,
//         rootMargin: "-200px 0px",
//     });
//     const [showDiv3, setShowDiv3] = useState(false);

//     useEffect(() => {
//         if (div3InView) setShowDiv3(true);
//     }, [div3InView]);

//     return (
//         <div className="h-full w-full justify-center items-center flex flex-col overflow-hidden max-lg:gap-y-[150px] gap-y-[250px] pt-[200px] pb-[150px] max-sm:pt-[200px] max-sm:pb-[0px] relative" >
//             {/* Decorative Ball 1 */}
//             <Image
//                 src={ball1}
//                 alt="Ball Decoration 1"
//                 className="absolute top-[550px] left-[-250px] w-[550px] rotate-[180deg] h-auto max-md:left-[-100px] z-10 opacity-50 max-lg:hidden"
//             />

//             {/* Decorative Ball 2 */}
//             <Image
//                 src={ball2}
//                 alt="Ball Decoration 2"
//                 className="absolute top-[1300px] right-[-350px] w-[700px] h-auto rotate-[160deg] max-md:right-[-100px] z-10 opacity-50 max-lg:hidden"
//             />

//             {/* First Section - Slide in from left */}
//             <div
//                 className="bg-white w-screen h-full justify-center items-center flex relative"
//                 onMouseMove={handleMouseMove1}
//             >
//                 <div className="max-w-7xl h-full w-full justify-between max-lg:items-center flex max-lg:flex-col px-8 gap-y-[30px] gap-x-[50px]">
//                     <div
//                         ref={div1Ref}
//                         className={`max-w-[600px] flex flex-col gap-y-5 transition-all duration-[1500ms] ${
//                             showDiv1 ? "opacity-100 translate-x-0"
//                 : "opacity-0 translate-x-[-100%]"
//                         }`}
//                     >
//                         <h1 className="text-[36px] max-md:text-[28px] font-medium text-left text-[#5569B2]">Social Media</h1>
//                         <p className="text-[16px] text-black mt-[-20px] mb-[20px]">Customers interact with brands via social media. SMM can bring tremendous success to your business.</p>
//                         <button className="text-[20px] self-start bg-[#5569B2] text-white px-4 py-2 hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300">Learn More</button>
//                         <ul className="list-disc pl-4 text-[16px] space-y-1">
//                             <li>Digital Campaigns</li>
//                             <li>Community Management</li>
//                             <li>Copywriting</li>
//                             <li>Public Relations</li>
//                             <li>Social Media Strategies</li>
//                             <li>Email Marketing</li>
//                             <li>SEO</li>
//                             <li>SEM</li>
//                         </ul>
//                     </div>
//                     <Image
//                         src={img}
//                         alt="tes"
//                         className={`w-[600px] h-auto max-lg:order-[-1] transition-shadow duration-1000 z-20`}
//                         style={{
//                             transform: `translate(${position1.x * 0.1}px, ${position1.y * 0.1}px)`,
//                         }}
//                     />
//                 </div>
//             </div>

//             {/* Second Section - Slide in from right */}
//             <div
//                 className="bg-white w-screen h-full justify-center items-center flex relative"
//                 onMouseMove={handleMouseMove2}
//             >
//                 <div className="max-w-7xl h-full w-full justify-between flex max-lg:flex-col px-8 gap-y-[30px] gap-x-[50px]">
//                     <Image
//                         src={img2}
//                         alt="tes"
//                         className={`w-[450px] h-auto transition-shadow duration-1000 z-20`}
//                         style={{
//                             transform: `translate(${position2.x * 0.1}px, ${position2.y * 0.1}px)`,
//                         }}
//                     />
//                     <div
//                         ref={div2Ref}
//                         className={`max-w-[500px] flex flex-col gap-y-5 transition-all duration-[1500ms] ${
//                             showDiv2 ? "opacity-100 translate-x-0"
//                 : "opacity-0 translate-x-[100%]"
//                         }`}
//                     >
//                         <h1 className="text-[36px] max-md:text-[28px] font-medium text-left text-[#5569B2]">Social Posts</h1>
//                         <p className="text-[16px] text-black mt-[-20px] mb-[20px]">Customers interact with brands via social posts. SMM can bring tremendous success to your business.</p>
//                         <button className="text-[20px] self-start bg-[#5569B2] text-white px-4 py-2 hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300">Learn More</button>
//                         <ul className="list-disc pl-4 text-[16px] space-y-1">
//                             <li>Digital Marketings</li>
//                             <li>Scheduled Posts</li>
//                             <li>Copywriting Sosmed</li>
//                             <li>Public Publications</li>
//                             <li>Content Strategies</li>
//                             <li>Marketing</li>
//                             <li>SEO Sosmed</li>
//                             <li>SEM Sosmed</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             {/* Third Section - Slide in from left */}
//             <div
//                 className="bg-white w-screen h-full justify-center items-center flex"
//                 onMouseMove={handleMouseMove3}
//             >
//                 <div className="max-w-7xl h-full w-full justify-between flex max-lg:flex-col px-8 gap-y-[30px] gap-x-[50px]">
//                     <div
//                         ref={div3Ref}
//                         className={`max-w-[600px] flex flex-col gap-y-5 transition-all duration-[1500ms] ${
//                             showDiv3 ? "opacity-100 translate-x-0"
//                 : "opacity-0 translate-x-[-100%]"
//                         }`}
//                     >
//                         <h1 className="text-[36px] max-md:text-[28px] font-medium text-left text-[#5569B2]">Media</h1>
//                         <p className="text-[16px] text-black mt-[-20px] mb-[20px]">Customers interact with brands via media. SMM can bring tremendous success to your business.</p>
//                         <button className="text-[20px] self-start bg-[#5569B2] text-white px-4 py-2 hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300">Learn More</button>
//                         <ul className="list-disc pl-4 text-[16px] space-y-1">
//                             <li>Campaigns</li>
//                             <li>Video editing</li>
//                             <li>Copywriting video</li>
//                             <li>Public videos</li>
//                             <li>Video Strategies</li>
//                             <li>Video Marketing</li>
//                             <li>Content Concepting</li>
//                             <li>SEM Vid</li>
//                         </ul>
//                     </div>
//                     <Image
//                         src={img3}
//                         alt="tes"
//                         className="w-[600px] h-[auto] max-lg:order-[-1] transition-shadow duration-1000 z-20 "
//                         style={{
//                             transform: `translate(${position3.x * 0.1}px, ${position3.y * 0.1}px)`,
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }


// "use client";
// import Image from "next/image";
// import img from "@/../public/services/1.png";
// import img2 from "@/../public/services/2.png";
// import img3 from "@/../public/services/3.png";
// import ball1 from "@/../public/aboutus/ball1.png";
// import ball2 from "@/../public/aboutus/ball2.png";
// import { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import Slider from "react-slick";

// // Import slick styles globally
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React from "react";

// export default function Section() {
//   // State to toggle between carousel and full view
//   const [isCarousel, setIsCarousel] = useState(true);

//   // Define custom arrow components
//   const NextArrow = ({ onClick }: { onClick?: () => void }) => (
//     <div
//       className="next-arrow absolute top-1/2 right-[-25px] z-20 cursor-pointer"
//       onClick={onClick}
//     >
//       <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
//         ➔
//       </div>
//     </div>
//   );

//   const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
//     <div
//       className="prev-arrow absolute top-1/2 left-[-25px] z-20 cursor-pointer"
//       onClick={onClick}
//     >
//       <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
//         ←
//       </div>
//     </div>
//   );

//   // State to keep track of current slide
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Settings for the slider
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (_: number, next: number) => setCurrentSlide(next),
//     appendDots: (dots: React.ReactNode) => (
//       <div
//         style={{
//           position: "absolute",
//           bottom: "20px",
//           display: "flex",
//           justifyContent: "center",
//           width: "100%",
//         }}
//       >
//         <ul style={{ margin: "0px", padding: "0px", display: "flex", gap: "10px" }}>
//           {dots}
//         </ul>
//       </div>
//     ),
//     customPaging: (i: number) => (
//       <div
//         style={{
//           width: "10px",
//           height: "10px",
//           backgroundColor: "darkblue",
//           opacity: currentSlide === i ? "1" : "0.5",
//           borderRadius: "50%",
//         }}
//         onClick={() => sliderRef.slickGoTo(i)} // Go to the slide when dot is clicked
//       ></div>
//     ),
//   };

//   const sliderRef: any = React.useRef(null); // Reference for the Slider

//   // Section Data
//   const sectionData = [
//     {
//       title: "Social Media",
//       description:
//         "Customers interact with brands via social media. SMM can bring tremendous success to your business.",
//       buttonText: "Learn More",
//       list: [
//         "Digital Campaigns",
//         "Community Management",
//         "Copywriting",
//         "Public Relations",
//         "Social Media Strategies",
//         "Email Marketing",
//         "SEO",
//         "SEM",
//       ],
//       image: img,
//     },
//     {
//       title: "Social Posts",
//       description:
//         "Customers interact with brands via social posts. SMM can bring tremendous success to your business.",
//       buttonText: "Learn More",
//       list: [
//         "Digital Marketing",
//         "Scheduled Posts",
//         "Copywriting Sosmed",
//         "Public Publications",
//         "Content Strategies",
//         "Marketing",
//         "SEO Sosmed",
//         "SEM Sosmed",
//       ],
//       image: img2,
//     },
//     {
//       title: "Media",
//       description:
//         "Customers interact with brands via media. SMM can bring tremendous success to your business.",
//       buttonText: "Learn More",
//       list: [
//         "Campaigns",
//         "Video editing",
//         "Copywriting video",
//         "Public videos",
//         "Video Strategies",
//         "Video Marketing",
//         "Content Concepting",
//         "SEM Vid",
//       ],
//       image: img3,
//     },
//   ];

//   const isDesktop =
//     typeof window !== "undefined" && window.innerWidth >= 1024;

//   // States and refs for full view animations
//   const [position1, setPosition1] = useState({ x: 0, y: 0 });
//   const [position2, setPosition2] = useState({ x: 0, y: 0 });
//   const [position3, setPosition3] = useState({ x: 0, y: 0 });

//   // Intersection observers for animations
//   const [div1Ref, div1InView] = useInView({ triggerOnce: true, rootMargin: "-200px 0px" });
//   const [showDiv1, setShowDiv1] = useState(false);
//   useEffect(() => { if (div1InView) setShowDiv1(true); }, [div1InView]);

//   const [div2Ref, div2InView] = useInView({ triggerOnce: true, rootMargin: "-200px 0px" });
//   const [showDiv2, setShowDiv2] = useState(false);
//   useEffect(() => { if (div2InView) setShowDiv2(true); }, [div2InView]);

//   const [div3Ref, div3InView] = useInView({ triggerOnce: true, rootMargin: "-200px 0px" });
//   const [showDiv3, setShowDiv3] = useState(false);
//   useEffect(() => { if (div3InView) setShowDiv3(true); }, [div3InView]);

//   return (
//     <div className="h-full w-full flex flex-col items-center relative overflow-hidden pt-[200px] pb-[150px] max-lg:gap-y-[150px] gap-y-[250px] max-sm:pt-[200px] max-sm:pb-[0px]">
//       {/* Decorative Ball 1 */}
//       <Image
//         src={ball1}
//         alt="Ball Decoration 1"
//         className="absolute top-[450px] left-[-250px] w-[550px] rotate-[180deg] h-auto max-md:left-[-100px] z-10 opacity-50 max-lg:hidden"
//       />

//       {/* Decorative Ball 2 */}
//       <Image
//         src={ball2}
//         alt="Ball Decoration 2"
//         className="absolute top-[1300px] right-[-350px] w-[700px] h-auto rotate-[160deg] max-md:right-[-100px] z-10 opacity-50 max-lg:hidden"
//       />

//       {isCarousel ? (
//         // Carousel View
//         <div className="flex flex-col items-center justify-center w-full">
//           <div className="relative w-full flex justify-center">
//             <div className="max-w-7xl w-full shadow-2xl rounded-lg overflow-hidden">
//               <Slider {...settings} ref={sliderRef}>
//                 {sectionData.map((section, index) => (
//                   <div
//                     key={index}
//                     className="flex-shrink-0 w-full flex justify-center items-center p-8"
//                   >
//                     <div className="bg-white w-full h-full flex justify-center items-center max-lg:flex-col gap-y-[30px] gap-x-[30px] px-8 py-10">
//                       <div className="max-w-[500px] flex flex-col gap-y-5">
//                         <h1 className="text-[36px] max-md:text-[28px] font-medium text-left text-[#5569B2]">
//                           {section.title}
//                         </h1>
//                         <p className="text-[16px] text-black mt-[-20px] mb-[20px]">
//                           {section.description}
//                         </p>
//                         <button className="text-[20px] self-start bg-[#5569B2] text-white px-4 py-2 hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300">
//                           {section.buttonText}
//                         </button>
//                         <ul className="list-disc pl-4 text-[16px] space-y-1">
//                           {section.list.map((item, idx) => (
//                             <li key={idx}>{item}</li>
//                           ))}
//                         </ul>
//                       </div>
//                       <Image
//                         src={section.image}
//                         alt={section.title}
//                         className="w-auto h-[500px] max-lg:order-[-1] transition-transform duration-1000 z-20"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>
//         {/* Show Full Button */}
//         <button
//             onClick={() => setIsCarousel(false)}
//             className="mt-4 text-[20px] bg-[#5569B2] text-white px-6 py-3 rounded-md hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300"
//           >
//             Show Full
//           </button>
//         </div>
//       ) : (
//         // Full View of Sections
//         <div className="w-full flex flex-col items-center gap-y-[250px] max-lg:gap-y-[150px]">
//           {/* First Section - Slide in from left */}
//           <div
//             className="bg-white w-full h-full justify-center items-center flex relative"
//             onMouseMove={(e) => {
//               if (isDesktop) {
//                 const { clientX, clientY } = e;
//                 setPosition1({ x: clientX, y: clientY });
//               }
//             }}
//           >
//             <div className="max-w-7xl h-full w-full justify-between max-lg:items-center flex max-lg:flex-col px-8 gap-y-[30px] gap-x-[50px]">
//               <div
//                 ref={div1Ref}
//                 className={`max-w-[600px] flex flex-col gap-y-5 transition-all duration-[1500ms] ${
//                   showDiv1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100%]"
//                 }`}
//               >
//                 <h1 className="text-[36px] max-md:text-[28px] font-medium text-left text-[#5569B2]">
//                   {sectionData[0].title}
//                 </h1>
//                 <p className="text-[16px] text-black mt-[-20px] mb-[20px]">
//                   {sectionData[0].description}
//                 </p>
//                 <button className="text-[20px] self-start bg-[#5569B2] text-white px-4 py-2 hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300">
//                   {sectionData[0].buttonText}
//                 </button>
//                 <ul className="list-disc pl-4 text-[16px] space-y-1">
//                   {sectionData[0].list.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//               <Image
//                 src={sectionData[0].image}
//                 alt={sectionData[0].title}
//                 className={`w-auto h-[500px] max-lg:order-[-1] transition-shadow duration-1000 z-20`}
//                 style={{
//                   transform: `translate(${position1.x * 0.1}px, ${position1.y * 0.1}px)`,
//                 }}
//               />
//             </div>
//           </div>
          

//           {/* Second Section - Slide in from right */}
//           <div
//             className="bg-white w-full h-full justify-center items-center flex relative"
//             onMouseMove={(e) => {
//               if (isDesktop) {
//                 const { clientX, clientY } = e;
//                 setPosition2({ x: clientX, y: clientY });
//               }
//             }}
//           >
//             <div className="max-w-7xl h-full w-full justify-between flex max-lg:flex-col px-8 gap-y-[30px] gap-x-[50px]">
//               <Image
//                 src={sectionData[1].image}
//                 alt={sectionData[1].title}
//                 className={`w-auto h-[500px] transition-transform z-20`}
//                 style={{
//                   transform: `translate(${position2.x * 0.1}px, ${position2.y * 0.1}px)`,
//                 }}
//               />
//               <div
//                 ref={div2Ref}
//                 className={`max-w-[500px] flex flex-col gap-y-5 transition-all duration-[1500ms] ${
//                   showDiv2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100%]"
//                 }`}
//               >
//                 <h1 className="text-[36px] max-md:text-[28px] font-medium text-left text-[#5569B2]">
//                   {sectionData[1].title}
//                 </h1>
//                 <p className="text-[16px] text-black mt-[-20px] mb-[20px]">
//                   {sectionData[1].description}
//                 </p>
//                 <button className="text-[20px] self-start bg-[#5569B2] text-white px-4 py-2 hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300">
//                   {sectionData[1].buttonText}
//                 </button>
//                 <ul className="list-disc pl-4 text-[16px] space-y-1">
//                   {sectionData[1].list.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Third Section - Slide in from left */}
//           <div
//             className="bg-white w-full h-full justify-center items-center flex relative"
//             onMouseMove={(e) => {
//               if (isDesktop) {
//                 const { clientX, clientY } = e;
//                 setPosition3({ x: clientX, y: clientY });
//               }
//             }}
//           >
//             <div className="max-w-7xl h-full w-full justify-between flex max-lg:flex-col px-8 gap-y-[30px] gap-x-[50px]">
//               <div
//                 ref={div3Ref}
//                 className={`max-w-[600px] flex flex-col gap-y-5 transition-all duration-[1500ms] ${
//                   showDiv3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100%]"
//                 }`}
//               >
//                 <h1 className="text-[36px] max-md:text-[28px] font-medium text-left text-[#5569B2]">
//                   {sectionData[2].title}
//                 </h1>
//                 <p className="text-[16px] text-black mt-[-20px] mb-[20px]">
//                   {sectionData[2].description}
//                 </p>
//                 <button className="text-[20px] self-start bg-[#5569B2] text-white px-4 py-2 hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300">
//                   {sectionData[2].buttonText}
//                 </button>
//                 <ul className="list-disc pl-4 text-[16px] space-y-1">
//                   {sectionData[2].list.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//               <Image
//                 src={sectionData[2].image}
//                 alt={sectionData[2].title}
//                 className="w-auto h-[500px] max-lg:order-[-1] transition-shadow duration-1000 z-20"
//                 style={{
//                   transform: `translate(${position3.x * 0.1}px, ${position3.y * 0.1}px)`,
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Show Carousel Button when in Full View */}
//       {!isCarousel && (
//         <button
//           onClick={() => setIsCarousel(true)}
//           className="mt-4 text-[20px] bg-[#5569B2] text-white px-6 py-3 rounded-md hover:bg-[#404e85] hover:text-[#b2bbdd] transition duration-300"
//         >
//           Show Carousel
//         </button>
//       )}

//       {/* Decorative Ball 1 and Ball 2 remain outside the conditional rendering */}
//     </div>
//   );
// }


// 'use client';

// import { useTranslation, LinkWithLocale } from 'next-export-i18n';
// import Image from 'next/image';
// import Logo from '@/../public/footer/logo1.png';
// import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// import Link from 'next/link';

// export default function Footer() {
//     const { t } = useTranslation();

//     return (
//         <div className='bg-white w-full h-full flex justify-center'>
//             <div className="bg-[white] w-full justify-center pt-[100px] pb-[150px]">
//                 <div className="max-w-7xl mx-auto">
//                     <div className='flex flex-col justify-center px-6'>
//                         <div className='flex flex-wrap gap-y-[50px] gap-x-[120px] justify-start'>
//                             <div className="flex-col flex justify-between w-[400px] gap-y-[50px]">
//                                 <LinkWithLocale href="/">
//                                     <Image src={Logo} alt="logo" className="w-[120px]"></Image>
//                                 </LinkWithLocale>
//                                 <div className='flex justify-center items-center bg-[#5569B2] w-[130px] h-[40px] rounded-xl'>
//                                     <p className='text-[20px] text-[white]'>Contact Us:</p>
//                                 </div>
//                                 <div className='flex flex-col text-[20px] text-[#5569B2] gap-y-[20px]'>
//                                     <p>Email: info@shiniro.com</p>
//                                     <p>Phone: +6285173216550</p>
//                                     <p>Adress: Kota Tangerang, Kawasan Pusat Niaga Terpadu, KM. 19.6 Blok D No. 8i, Batu Ceper</p>
//                                 </div>
//                             </div>
//                             <div className="flex flex-col justify-between w-[700px] gap-y-[50px]">
//                                 <div className='flex justify-between flex-wrap max-md:flex-col px-2 max-[1270px]:px-0'>
//                                     <ul className="flex flex-wrap text-[#033C5A] max-md:flex-col">
//                                         <li>
//                                             <LinkWithLocale href="/aboutus" className="font-medium text-[17px] text-[#5569B2]  hover:text-[#2c365a] pr-5 py-3 max-[1270px]:pl-[0px] flex items-center transition duration-150 ease-in-out">
//                                                 {t('Footer.p1')}
//                                             </LinkWithLocale>
//                                         </li>
//                                         <li>
//                                             <LinkWithLocale href="/services" className="font-medium text-[17px] text-[#5569B2]  hover:text-[#2c365a] px-5 py-3 max-md:px-[0px] flex items-center transition duration-150 ease-in-out">
//                                                 {t('Footer.p2')}
//                                             </LinkWithLocale>
//                                         </li>
//                                         <li>
//                                             <LinkWithLocale href="/blog" className="font-medium text-[17px] text-[#5569B2]  hover:text-[#2c365a] px-5 py-3 max-md:px-[0px] flex items-center transition duration-150 ease-in-out">
//                                                 {t('Footer.p3')}
//                                             </LinkWithLocale>
//                                         </li>
//                                         <li>
//                                             <LinkWithLocale href="/ourworks" className="font-medium text-[17px] text-[#5569B2]  hover:text-[#2c365a] px-5 py-3 max-md:px-[0px] flex items-center transition duration-150 ease-in-out">
//                                                 {t('Footer.p55')}
//                                             </LinkWithLocale>
//                                         </li>
//                                         <li>
//                                             <LinkWithLocale href="/contactus" className="font-medium text-[17px] text-[#5569B2]  hover:text-[#2c365a] px-5 py-3 max-md:px-[0px] flex items-center transition duration-150 ease-in-out">
//                                                 {t('Footer.p4')}
//                                             </LinkWithLocale>
//                                         </li>
                
//                                     </ul>
                                    // <div className='flex flex-wrap gap-x-[15px] self-center max-md:self-start max-md:py-3'>
                                    //     <Link href="mailto:customer.service@pbl.co.id"  target="_blank" className="w-[30px] h-[30px] max-sm:w-[40px] max-sm:h-[40px] bg-[#5569B2] hover:bg-[#2c365a] duration-300  rounded-full flex items-center justify-center text-white">
                                    //         <FaEnvelope size={12} />
                                    //     </Link>
                                    //     <Link href="http://wa.me/6285217177239" target="_blank" className="w-[30px] h-[30px] max-sm:w-[40px] max-sm:h-[40px] bg-[#5569B2] hover:bg-[#2c365a] duration-300  rounded-full flex items-center justify-center text-white">
                                    //         <FaWhatsapp size={15} />
                                    //     </Link>
                                    //     <Link href="https://www.instagram.com/pancabudilogistindo/" target="_blank" className="w-[30px] h-[30px] max-sm:w-[40px] max-sm:h-[40px] bg-[#5569B2] hover:bg-[#2c365a] duration-300 rounded-full flex items-center justify-center text-white">
                                    //         <FaInstagram size={15} />
                                    //     </Link>
                                    // </div>
//                                 </div>
//                                 <div className="flex bg-[#5569B2] w-full max-w-4xl h-[250px] rounded-2xl justify-center items-center mx-auto px-4">
//                                     <div className="mt-6 flex w-full max-w-md gap-x-4">
//                                         <label htmlFor="email-address" className="sr-only">Email address</label>
//                                         <input 
//                                         id="email-address" 
//                                         name="email" 
//                                         type="email" 
//                                         autoComplete="email" 
//                                         required 
//                                         className="min-w-0 flex-auto rounded-md border-0 bg-[#FFFBFB] px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6 w-full" 
//                                         placeholder="Enter your email" 
//                                         />
//                                         <button 
//                                         type="submit" 
//                                         className="flex-none rounded-md border border-white duration-300 bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-[#5569B2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//                                         >
//                                         Subscribe
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
