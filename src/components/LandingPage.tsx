import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import UnitTypesSection from "@/components/UnitTypesSection";
import PresentationSection from "@/components/PresentationSection";
import DevelopersSection from "@/components/DevelopersSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { landingContent } from "@/data/landing-content";

interface LandingPageProps {
  destination: "dubai" | "bali";
}

export default function LandingPage({ destination }: LandingPageProps) {
  const content = landingContent[destination];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar currentDestination={destination} />
      <Hero content={content.hero} />
      <AboutSection content={content.about} />
      <LocationSection projects={content.locationProjects} />
      <UnitTypesSection units={content.units} />
      <PresentationSection content={content.presentation} />
      <WhyChooseSection content={content.whyChoose} />
      <DevelopersSection content={content.developers} />
      <Footer />
    </main>
  );
}
