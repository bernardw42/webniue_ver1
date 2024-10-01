"use client"
import Header from "@/components/Blog/Header"
import Footer2 from "@/components/Footer2"
import Carouse from "@/components/Blog/Carouse"
import Lists from "@/components/Blog/Lists"

export default function blog() {
    return(
    <>
    <head>
      <title>
        Shin Iro - Blog
      </title>
    </head>
      {/* <Features></Features> */}
      <Header></Header>
      <Carouse></Carouse>
      <Lists></Lists>
      <Footer2></Footer2>
    </>
    )
}