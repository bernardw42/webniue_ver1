import Footer from '@/components/Footer2';
import Header from '@/components/Services/Header';
import Section from '@/components/Services/Section';
import FooterEnd from "@/components/FooterEnd"

export const metadata = {
  title: "Services",
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
