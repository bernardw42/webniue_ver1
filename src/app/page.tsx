"use client"
import Header from "@/components/Home/Header"
import Service from "@/components/Home/Service";
import Features from "@/components/Home/Features";
import Footer from '@/components/Footer';
import React from "react";
import Script from "next/script";

export default function Home() {
  return (
    <>
    <head>
      <title>
        NIEU
      </title>
      {/* Google Analytics Script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-X604DSLD8V"
        strategy="afterInteractive"
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X604DSLD8V');
        `}
      </Script>
    </head>
      <Header></Header>
      <Service></Service>
      <Features></Features>
      <Footer></Footer>
    </>
  );
}
