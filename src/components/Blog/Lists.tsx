"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { posts } from "./Post"; // Import posts from ./Posts
import { useInView } from "react-intersection-observer";
import { LinkWithLocale, useTranslation } from "next-export-i18n";

export default function Lists() {
  const [email, setEmail] = useState('');
  const [div1Ref, div1InView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px 0px",
  });
  const [showDiv1, setShowDiv1] = useState(false);

  useEffect(() => {
    if (div1InView) setShowDiv1(true);
  }, [div1InView]);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  // Ref to scroll to the article section
  const articleSectionRef = useRef<HTMLDivElement>(null);

  // Scroll to the top of the article section
  const scrollToArticleTop = () => {
    if (articleSectionRef.current) {
      const isMobile = window.innerWidth <= 768; // Mobile check (adjust as needed)
      const rect = articleSectionRef.current.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top;
      const offset = isMobile ? -100 : -200; // Smaller offset for mobile
      window.scrollTo({
        top: offsetTop + offset,
        behavior: "smooth",
      });
    }
  };

  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = posts.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (endIndex < posts.length) {
      setCurrentPage((prevPage) => prevPage + 1);
      scrollToArticleTop(); // Scroll to article section on page change
    }
  };

  const handleGoBack = () => {
    setCurrentPage(1); // Reset to first page
    scrollToArticleTop(); // Scroll to article section on page change
  };

  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex flex-col items-center bg-white pb-[100px] max-sm:pb-[0px] overflow-hidden relative">
      <div
        className={`max-w-7xl w-full flex justify-between max-md:flex-col items-start max-md:items-center overflow-hidden px-8 gap-y-[100px] gap-x-[100px] transition-all duration-[1500ms] ${
          showDiv1 ? "opacity-100" : "opacity-0"
        }`}
        ref={div1Ref}
      >
        {/* Article Section */}
        <div className="w-full" ref={articleSectionRef}>
          <h2 className="text-[36px] max-md:text-[28px] font-bold mb-4">{t('arts.h')}</h2>
          {currentArticles.map((post) => (
            <div key={post.id} className="mb-8">
              <LinkWithLocale href={post.links} className="font-semibold text-lg line-clamp-1">
                {post.title}
              </LinkWithLocale>
              <p className="text-sm text-gray-600 line-clamp-3 h-[60px]">{post.desc}</p>
              <LinkWithLocale
                href={post.links}
                className="text-[#5569B2] hover:text-[#374474] duration-150 mt-2 inline-block"
              >
                {t('artc.h2')}
              </LinkWithLocale>
              <hr className="my-6 border-black" />
            </div>
          ))}
          <div className="flex justify-between items-center mt-8">
            {currentPage > 1 ? (
              <button
                onClick={handleGoBack}
                className="border-2 border-black text-black bg-transparent hover:bg-black font-medium hover:text-white duration-150 rounded-full w-[120px] h-[40px]"
              >
                {t('artc.h4')}
              </button>
            ) : (
              <div></div>
            )}
            {endIndex < posts.length ? (
              <button
                onClick={handleNextPage}
                className="border-2 border-black text-black bg-transparent hover:bg-black font-medium hover:text-white duration-150 rounded-full w-[120px] h-[40px]"
              >
                {t('artc.h3')}
              </button>
            ) : null}
          </div>
        </div>

        {/* Handbook Section */}
        <div className="w-full max-w-[400px] h-full rounded-lg overflow-hidden max-md:order-[-1]">
          <div className="bg-[#5569B2] h-16 flex justify-center items-center">
            <h2 className="text-white text-xl font-bold">{t('arts.h2')}</h2>
          </div>
          <div className="bg-gray-100 bg-opacity-50 h-full flex flex-col drop-shadow-2xl">
            <div className="flex-1">
              <Link href="/blog/handbook/Hook Template.xlsx" download>
                <div className="p-6">
                  <h3 className="font-semibold text-black text-lg line-clamp-1">Social Media Hook</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 h-[40px]">
                  {t('artc.p3')}
                  </p>
                </div>
              </Link>
            </div>
            {/* <hr className="border-black w-full" />
            <div className="flex-1">
              <Link href="/handbook/2">
                <div className="p-6">
                  <h3 className="font-semibold text-lg line-clamp-1">Handbook Title 2</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 h-[40px]">Description for Handbook 2 oioi7o9821iu 98 21 29823478283 4792h 29349 834 982y9238</p>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="mt-[100px] w-full flex flex-col items-center">
        <h2 className="text-center font-semibold text-xl px-8 text-black mb-8">
        {t('artc.p')}
        </h2>
        <div className="flex items-center rounded-2xl w-full max-w-lg px-8">
          <form
            action="https://gmail.us22.list-manage.com/subscribe/post?u=89947613f5abc3396728ec743&amp;id=5021ecc621&amp;f_id=0034d1e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="w-full flex items-center"
            target="_blank"
          >
            <div className="flex-grow bg-[#5569B2] p-0.5 rounded-l-2xl">
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder={t('artc.p2')}
                className="appearance-none w-full px-4 py-5 text-gray-900 rounded-l-2xl focus:outline-none border border-gray-300 placeholder-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="min-w-1/4 px-4 bg-[#5569B2] text-white rounded-r-2xl py-[23px] font-semibold hover:bg-[#374474] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition ease-in-out duration-300"
            >
              {t('artc.h5')}
            </button>
            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
              <input type="text" name="b_89947613f5abc3396728ec743_5021ecc621" value="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
