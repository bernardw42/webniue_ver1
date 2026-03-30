import Header from "@/components/OurWorks/Header"
import PBF from "@/components/OurWorks/PBF"
import Footer2 from "@/components/Footer2"
import PBL from "@/components/OurWorks/PBL"
import Besyl from "@/components/OurWorks/Besyl"
import FooterEnd from "@/components/FooterEnd"

export const metadata = {
  title: "Our Works",
};

export default function blog() {
    return(
    <>
      <Header/>
      <Besyl></Besyl>
      <PBL></PBL>
      <PBF></PBF>
      <Footer2></Footer2>
      <FooterEnd></FooterEnd>
    </>
    )
}
