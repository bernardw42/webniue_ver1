import Header from "@/components/Blog/Header"
import Footer2 from "@/components/Footer2"
import FooterEnd from "@/components/FooterEnd"
import Carouse from "@/components/Blog/Carouse"
import Lists from "@/components/Blog/Lists"

export const metadata = {
  title: "Blog",
};

export default function blog() {
    return(
    <>
      <Header></Header>
      <Carouse></Carouse>
      <Lists></Lists>
      <Footer2></Footer2>
      <FooterEnd></FooterEnd>
    </>
    )
}
