import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import UnitTypesSection from "@/components/UnitTypesSection";
import PresentationSection from "@/components/PresentationSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* <Navbar /> */}
      <Hero />
      <AboutSection />
      <LocationSection />
      <UnitTypesSection />
      <PresentationSection />
      <WhyChooseSection />
      <Footer />
    </main>
  );
}
