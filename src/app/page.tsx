import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import BrandCreative from "@/components/site/BrandCreative";
import Growth from "@/components/site/Growth";
import Problems from "@/components/site/Problems";
import HowItWorks from "@/components/site/HowItWorks";
import Tools from "@/components/site/Tools";
import Pricing from "@/components/site/Pricing";
import Faq from "@/components/site/Faq";
import CtaSection from "@/components/site/CtaSection";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Hero />
      <Services />
      <BrandCreative />
      <Problems />
      <HowItWorks />
      <Growth />
      <Tools />
      <Pricing />
      <Faq />
      <CtaSection />
      <Footer />
    </div>
  );
}
