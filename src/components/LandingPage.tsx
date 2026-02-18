"use client";

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
import { useTranslation } from "@/hooks/useTranslation";

interface LandingPageProps {
  destination: "dubai" | "bali";
}

export default function LandingPage({ destination }: LandingPageProps) {
  const { t } = useTranslation();
  const staticContent = landingContent[destination];

  // Dynamic content override for Bali to support i18n
  let content = staticContent;

  if (destination === "bali" && staticContent.hero && staticContent.about && staticContent.whyChoose) {
    content = {
      ...staticContent,
      hero: {
        ...staticContent.hero,
        title: t("bali.hero.title"),
        subtitle: t("bali.hero.subtitle"),
        badge: t("bali.hero.badge"),
        stats: [
          { 
            value: t("bali.hero.stats.0.value"), 
            text: t("bali.hero.stats.0.text"), 
            iconName: staticContent.hero.stats[0]?.iconName 
          },
          { 
            value: t("bali.hero.stats.1.value"), 
            text: t("bali.hero.stats.1.text"), 
            iconName: staticContent.hero.stats[1]?.iconName 
          },
          { 
            value: t("bali.hero.stats.2.value"), 
            text: t("bali.hero.stats.2.text"), 
            iconName: staticContent.hero.stats[2]?.iconName 
          },
          { 
            value: t("bali.hero.stats.3.value"), 
            text: t("bali.hero.stats.3.text"), 
            iconName: staticContent.hero.stats[3]?.iconName 
          },
        ]
      },
      about: {
        ...staticContent.about,
        title: t("bali.about.title"),
        description: t("bali.about.description"),
        benefits: staticContent.about.benefits.map((b, i) => {
             const labels = [
               t("bali.about.benefits.tourists"),
               t("bali.about.benefits.appreciation"),
               t("bali.about.benefits.hub"),
               t("bali.about.benefits.demand"),
               t("bali.about.benefits.recognition"),
               t("bali.about.benefits.roi"),
               t("bali.about.benefits.infrastructure"),
               t("bali.about.benefits.emerging")
             ];
             return {
               ...b,
               label: labels[i] || b.label
             };
        })
      },
      whyChoose: {
        ...staticContent.whyChoose,
        title: t("bali.why_choose.title"),
        description: t("bali.why_choose.description"),
        quote: t("bali.why_choose.quote"),
        benefits: [
            t("bali.why_choose.benefits.0"),
            t("bali.why_choose.benefits.1"),
            t("bali.why_choose.benefits.2"),
            t("bali.why_choose.benefits.3")
        ]
      },
      locationProjects: staticContent.locationProjects.map((proj, i) => {
        const keys = ["body_sense", "rahya_villas", "eighth_sense", "iji_home"];
        const key = keys[i];
        if (!key) return proj;
        return {
          ...proj,
          area: t(`bali.location.projects.${key}.area`),
          title: t(`bali.location.projects.${key}.title`),
          description: t(`bali.location.projects.${key}.description`),
          marketInsight: t(`bali.location.projects.${key}.market_insight`),
          features: [
             t(`bali.location.projects.${key}.features.0`),
             t(`bali.location.projects.${key}.features.1`),
             t(`bali.location.projects.${key}.features.2`)
          ]
        };
      }),
      units: staticContent.units.map((unit) => {
        let key = "";
        if (unit.id === "body-sense") key = "body_sense";
        else if (unit.id === "rahya-villas-complex") key = "rahya_villas";
        else if (unit.id === "eighth-sense") key = "eighth_sense";
        
        if (!key) return unit;

        return {
           ...unit,
           hero: { 
             ...unit.hero, 
             title: t(`bali.unit_types.units.${key}.title`),
             description: t(`bali.unit_types.units.${key}.description`) // Ensure hero uses translated description
           },
           description: t(`bali.unit_types.units.${key}.description`),
           size: t(`bali.unit_types.units.${key}.size`)
        };
      })
    };
  }

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
