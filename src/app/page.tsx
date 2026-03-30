import Header from "@/components/Home/Header"
import Service from "@/components/Home/Service";
import Features from "@/components/Home/Features";
import Footer from '@/components/Footer';

export const metadata = {
  title: "NIEU",
};

export default function Home() {
  return (
    <>
      <Header></Header>
      <Service></Service>
      <Features></Features>
      <Footer></Footer>
    </>
  );
}
