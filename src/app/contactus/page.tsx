"use client"
import Header from "@/components/ContactUs/Header"
import Section from "@/components/ContactUs/Section"
import Footer from "@/components/Footer"
import Script from "next/script"
import React from "react"

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
      <Section></Section>
      <Footer></Footer>
    </>
    )
}