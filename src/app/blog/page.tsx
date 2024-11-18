"use client"
import Header from "@/components/Blog/Header"
import Footer2 from "@/components/Footer2"
import FooterEnd from "@/components/FooterEnd"
import Carouse from "@/components/Blog/Carouse"
import Lists from "@/components/Blog/Lists"
import React from "react"
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
      {/* <Features></Features> */}
      <Header></Header>
      <Carouse></Carouse>
      <Lists></Lists>
      <Footer2></Footer2>
      <FooterEnd></FooterEnd>
    </>
    )
}