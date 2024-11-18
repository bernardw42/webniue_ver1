'use client'
import Footer from '@/components/Footer2';
import Header from '@/components/Services/Header';
import Section from '@/components/Services/Section';
import React from 'react';
import FooterEnd from "@/components/FooterEnd"
import Script from 'next/script';

export default function aboutus() {
    return(
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
      <main>
        <Header></Header>
        <Section></Section>
        <Footer></Footer>
        <FooterEnd></FooterEnd>
      </main>
      </>
    )
}