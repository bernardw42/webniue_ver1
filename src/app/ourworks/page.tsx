"use client"
import Header from "@/components/OurWorks/Header"
import PBF from "@/components/OurWorks/PBF"
import React from "react"
import Footer2 from "@/components/Footer2"
import PBL from "@/components/OurWorks/PBL"
import Besyl from "@/components/OurWorks/Besyl"
import FooterEnd from "@/components/FooterEnd"
import Script from "next/script"

export default function blog() {
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
      <Header/>
      <Besyl></Besyl>
      <PBL></PBL>
      <PBF></PBF>
      <Footer2></Footer2>
      <FooterEnd></FooterEnd>
    </>
    )
}