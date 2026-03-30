import Header from "@/components/AboutUs/Header"
import Section from "@/components/AboutUs/Section"
import Footer from '@/components/Footer2';
import FooterEnd from "@/components/FooterEnd"

export const metadata = {
  title: "About Us",
};

export default function aboutus() {
    return(
      <>
      <main>
      <Header></Header>
      <Section></Section>
      <Footer></Footer>
      <FooterEnd></FooterEnd>
      </main>
      </>
    )
}
