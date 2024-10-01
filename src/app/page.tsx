"use client"
import Header from "@/components/Home/Header"
import Service from "@/components/Home/Service";
import Features from "@/components/Home/Features";
import Footer from '@/components/Footer';
import Marketing from "@/components/Home/Marketing"

export default function Home() {
  return (
    <>
    <head>
      <title>
        Niue
      </title>
    </head>
      <Header></Header>
      <Service></Service>
      <Features></Features>
      <Footer></Footer>
    </>
  );
}
