import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Rates from "@/components/Rates";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
// import Separator from "@/components/Separator";

export default function Home() {
  return (
    <>
    
      <ScrollAnimation delay={0}>
      <Hero />
      </ScrollAnimation>
     
      <ScrollAnimation delay={0}>
        <About />
      </ScrollAnimation>
      

      <ScrollAnimation delay={1}>
        <Services />
      </ScrollAnimation>
      
     
      <ScrollAnimation delay={2}>
        <Rates />
      </ScrollAnimation>
      
    
      <ScrollAnimation delay={1}>
        <FAQ />
      </ScrollAnimation>
      

      <ScrollAnimation delay={0}>
        <Contact />
      </ScrollAnimation>
      
  
      <ScrollAnimation delay={2}>
        <Footer />
      </ScrollAnimation>
    </>
  );
}
