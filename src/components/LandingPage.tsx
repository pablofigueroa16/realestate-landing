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
import HomeHowToInvestSection from "@/components/HomeHowToInvestSection";
import HomeInvestmentModelsSection from "@/components/HomeInvestmentModelsSection";
import HomeResidencyInvestmentSection from "@/components/HomeResidencyInvestmentSection";
import HomeFundCapitalSection from "@/components/HomeFundCapitalSection";
import HomeGlobalAgentSection from "@/components/HomeGlobalAgentSection";
import { landingContent } from "@/data/landing-content";
import { useTranslation } from "@/hooks/useTranslation";

import { Property } from "@/data/properties";

interface LandingPageProps {
  destination: "dubai" | "bali" | "home" | "miami" | "madrid" | "cdmx";
  dynamicUnits?: Property[];
}

export default function LandingPage({ destination, dynamicUnits }: LandingPageProps) {
  const { t } = useTranslation();
  const staticContent = landingContent[destination];

  // Dynamic content override for Bali to support i18n
  let content = staticContent;

  if (destination === "home" && staticContent.hero && staticContent.about && staticContent.whyChoose && staticContent.presentation) {
    content = {
      ...staticContent,
      hero: {
        ...staticContent.hero,
        title: t("home.hero.title"),
        subtitle: t("home.hero.subtitle"),
        badges: [
          t("home.hero.badges.0"),
          t("home.hero.badges.1"),
          t("home.hero.badges.2"),
        ],
        stats: [
          {
            value: t("home.hero.stats.0.value"),
            text: t("home.hero.stats.0.text"),
            iconName: staticContent.hero.stats[0]?.iconName,
          },
          {
            value: t("home.hero.stats.1.value"),
            text: t("home.hero.stats.1.text"),
            iconName: staticContent.hero.stats[1]?.iconName,
          },
        ]
      },
      about: {
        ...staticContent.about,
        title: t("home.about.title"),
        description: t("home.about.description"),
        marketCard: {
          ...staticContent.about.marketCard,
          title: t("home.about.market_card.title"),
          subtitle: t("home.about.market_card.subtitle"),
        },
        benefits: staticContent.about.benefits.map((b, i) => {
          const labels = [
            t("home.about.benefits.0"),
            t("home.about.benefits.1"),
            t("home.about.benefits.2"),
            t("home.about.benefits.3"),
            t("home.about.benefits.4"),
            t("home.about.benefits.5"),
          ];
          return {
            ...b,
            label: labels[i] || b.label,
          };
        }),
      },
      whyChoose: {
        ...staticContent.whyChoose,
        title: t("home.why_choose.title"),
        description: t("home.why_choose.description"),
        quote: t("home.why_choose.quote"),
        benefits: [
          t("home.why_choose.benefits.0"),
          t("home.why_choose.benefits.1"),
          t("home.why_choose.benefits.2"),
        ],
      },
      locationProjects: staticContent.locationProjects.map((proj, i) => {
        const keys = ["dubai", "miami", "bali"];
        const key = keys[i];
        if (!key) return proj;
        return {
          ...proj,
          area: t(`home.location.projects.${key}.area`),
          title: t(`home.location.projects.${key}.title`),
          description: t(`home.location.projects.${key}.description`),
          marketInsight: t(`home.location.projects.${key}.market_insight`),
          features: [
            t(`home.location.projects.${key}.features.0`),
            t(`home.location.projects.${key}.features.1`),
            t(`home.location.projects.${key}.features.2`),
          ],
        };
      }),
      unitsConfig: {
        title: t("home.units_config.title"),
        subtitle: t("home.units_config.subtitle"),
      },
      units: staticContent.units.map((unit) => {
        let key = "";
        if (unit.id === "home-dubai") key = "dubai";
        else if (unit.id === "home-miami") key = "miami";
        else if (unit.id === "home-bali") key = "bali";

        if (!key) return unit;

        return {
          ...unit,
          hero: {
            ...unit.hero,
            title: t(`home.unit_types.units.${key}.title`),
            description: t(`home.unit_types.units.${key}.description`),
          },
          description: t(`home.unit_types.units.${key}.description`),
          size: t(`home.unit_types.units.${key}.size`),
        };
      }),
      presentation: {
        ...staticContent.presentation,
        badge: t("home.presentation.badge"),
        title: t("home.presentation.title"),
        description: t("home.presentation.description"),
        cta: t("home.presentation.cta"),
        disclaimer: t("home.presentation.disclaimer"),
      },
    };
  }

  if (destination === "dubai") {
    content = {
      ...staticContent,
      units: staticContent.units.map((unit) => {
        const keyById: Record<string, string> = {
          "sobha-hartland-ii": "sobha_hartland_ii",
          "sobha-central": "sobha_central",
          "sobha-sanctuary": "sobha_sanctuary",
          "azizi-milan": "azizi_milan",
          "azizi-venice": "azizi_venice",
          "azizi-monaco-mansions": "azizi_monaco_mansions",
          "azizi-wasel": "azizi_wasel",
        };

        const key = keyById[unit.id];
        if (!key) return unit;

        return {
          ...unit,
          hero: {
            ...unit.hero,
            title: t(`unit_types.units.${key}.title`),
            description: t(`unit_types.units.${key}.description`),
          },
          description: t(`unit_types.units.${key}.description`),
          size: t(`unit_types.units.${key}.size`),
        };
      }),
    };
  }

  if (destination === "bali" && staticContent.hero && staticContent.about && staticContent.whyChoose) {
    // ... existing logic for Bali
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
          }
        ]
      },
      about: {
        ...staticContent.about,
        title: t("bali.about.title"),
        description: t("bali.about.description"),
        marketCard: {
          ...staticContent.about.marketCard,
          title: t("bali.about.market_card.title"),
          subtitle: t("bali.about.market_card.subtitle"),
        },
        benefits: staticContent.about.benefits.map((b, i) => {
          const labels = [
            t("bali.about.benefits.tourists"),
            t("bali.about.benefits.appreciation"),
            t("bali.about.benefits.digital_nomads"),
            t("bali.about.benefits.demand"),
            t("bali.about.benefits.roi"),
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
      }),
      unitsConfig: {
        title: t("bali.unit_types.title"),
        subtitle: t("bali.unit_types.subtitle"),
      },
    };
  }

  if (destination === "miami" && staticContent.hero && staticContent.about && staticContent.whyChoose) {
    content = {
      ...staticContent,
      hero: {
        ...staticContent.hero,
        title: t("miami.hero.title"),
        subtitle: t("miami.hero.subtitle"),
        badge: t("miami.hero.badge"),
        stats: [
          {
            value: t("miami.hero.stats.0.value"),
            text: t("miami.hero.stats.0.text"),
            iconName: staticContent.hero.stats[0]?.iconName,
          },
          {
            value: t("miami.hero.stats.1.value"),
            text: t("miami.hero.stats.1.text"),
            iconName: staticContent.hero.stats[1]?.iconName,
          },
        ],
      },
      about: {
        ...staticContent.about,
        title: t("miami.about.title"),
        description: t("miami.about.description"),
        marketCard: {
          ...staticContent.about.marketCard,
          title: t("miami.about.market_card.title"),
          subtitle: t("miami.about.market_card.subtitle"),
        },
        benefits: staticContent.about.benefits.map((b, i) => {
          const labels = [
            t("miami.about.benefits.population_growth"),
            t("miami.about.benefits.tax_advantage"),
            t("miami.about.benefits.international_demand"),
            t("miami.about.benefits.prime_appreciation"),
            t("miami.about.benefits.year_round_rentals"),
            t("miami.about.benefits.financial_hub"),
          ];
          return {
            ...b,
            label: labels[i] || b.label,
          };
        }),
      },
      whyChoose: {
        ...staticContent.whyChoose,
        title: t("miami.why_choose.title"),
        description: t("miami.why_choose.description"),
        quote: t("miami.why_choose.quote"),
        benefits: [
          t("miami.why_choose.benefits.0"),
          t("miami.why_choose.benefits.1"),
          t("miami.why_choose.benefits.2"),
          t("miami.why_choose.benefits.3"),
        ],
      },
      locationProjects: staticContent.locationProjects.map((proj, i) => {
        const keys = ["buena_vista", "aston_martin", "ritz_carlton"];
        const key = keys[i];
        if (!key) return proj;
        return {
          ...proj,
          area: t(`miami.location.projects.${key}.area`),
          title: t(`miami.location.projects.${key}.title`),
          description: t(`miami.location.projects.${key}.description`),
          marketInsight: t(`miami.location.projects.${key}.market_insight`),
          features: key === "ritz_carlton"
            ? [
              t(`miami.location.projects.${key}.features.0`),
              t(`miami.location.projects.${key}.features.1`),
              t(`miami.location.projects.${key}.features.2`),
              t(`miami.location.projects.${key}.features.3`),
            ]
            : [
              t(`miami.location.projects.${key}.features.0`),
              t(`miami.location.projects.${key}.features.1`),
              t(`miami.location.projects.${key}.features.2`),
            ],
        };
      }),
      units: staticContent.units.map((unit) => {
        const keyById: Record<string, string> = {
          "buena-vista-modern-residence": "buena_vista",
          "aston-martin-residences": "aston_martin",
          "ritz-carlton-residences": "ritz_carlton",
        };

        const key = keyById[unit.id];
        if (!key) return unit;

        return {
          ...unit,
          hero: {
            ...unit.hero,
            title: t(`miami.unit_types.units.${key}.title`),
            description: t(`miami.unit_types.units.${key}.description`),
          },
          description: t(`miami.unit_types.units.${key}.description`),
          size: t(`miami.unit_types.units.${key}.size`),
        };
      }),
      unitsConfig: {
        title: t("miami.unit_types.title"),
        subtitle: t("miami.unit_types.subtitle"),
      },
    };
  }

  if (destination === "madrid" && staticContent.hero && staticContent.about) {
    content = {
      ...staticContent,
      hero: {
        ...staticContent.hero,
        title: t("madrid.hero.title"),
        subtitle: t("madrid.hero.subtitle"),
        badge: t("madrid.hero.badge"),
        stats: [
          {
            value: t("madrid.hero.stats.0.value"),
            text: t("madrid.hero.stats.0.text"),
            iconName: staticContent.hero.stats[0]?.iconName,
          },
          {
            value: t("madrid.hero.stats.1.value"),
            text: t("madrid.hero.stats.1.text"),
            iconName: staticContent.hero.stats[1]?.iconName,
          },
        ],
      },
      about: {
        ...staticContent.about,
        title: t("madrid.about.title"),
        description: t("madrid.about.description"),
        marketCard: {
          ...staticContent.about.marketCard,
          title: t("madrid.about.market_card.title"),
          subtitle: t("madrid.about.market_card.subtitle"),
        },
        benefits: staticContent.about.benefits.map((b, i) => {
          const keys = [
            "rental_demand",
            "euro_income",
            "legal_stability",
            "international_capital",
          ];
          return {
            ...b,
            label: t(`madrid.about.benefits.${keys[i]}`) || b.label,
          };
        }),
      },
      locationProjects: staticContent.locationProjects.map((proj, i) => {
        const keys = ["puerta_hierro", "los_cerros", "arturo_soria"];
        const key = keys[i];
        if (!key) return proj;
        return {
          ...proj,
          area: t(`madrid.location.projects.${key}.area`),
          title: t(`madrid.location.projects.${key}.title`),
          description: t(`madrid.location.projects.${key}.description`),
          marketInsight: t(`madrid.location.projects.${key}.market_insight`),
          features: [
            t(`madrid.location.projects.${key}.features.0`),
            t(`madrid.location.projects.${key}.features.1`),
            t(`madrid.location.projects.${key}.features.2`),
            t(`madrid.location.projects.${key}.features.3`),
          ],
        };
      }),
      units: staticContent.units.map((unit) => {
        const keyById: Record<string, string> = {
          "residencial-zenith": "residencial_zenith",
          "residencial-ara": "residencial_ara",
          "reside-arturo-soria": "reside_arturo_soria",
        };

        const key = keyById[unit.id];
        if (!key) return unit;

        return {
          ...unit,
          hero: {
            ...unit.hero,
            title: t(`madrid.unit_types.units.${key}.title`),
            description: t(`madrid.unit_types.units.${key}.description`),
          },
          description: t(`madrid.unit_types.units.${key}.description`),
          size: t(`madrid.unit_types.units.${key}.size`),
        };
      }),
      unitsConfig: {
        title: t("madrid.unit_types.title"),
        subtitle: t("madrid.unit_types.subtitle"),
      },
      presentation: staticContent.presentation ? {
        ...staticContent.presentation,
        badge: t("madrid.presentation.badge"),
        title: t("madrid.presentation.title"),
        description: t("madrid.presentation.description"),
        cta: t("madrid.presentation.cta"),
        disclaimer: t("madrid.presentation.disclaimer"),
      } : null,
      whyChoose: staticContent.whyChoose ? {
        ...staticContent.whyChoose,
        title: t("madrid.why_choose.title"),
        description: t("madrid.why_choose.description"),
        quote: t("madrid.why_choose.quote"),
        benefits: [
          t("madrid.why_choose.benefits.0"),
          t("madrid.why_choose.benefits.1"),
          t("madrid.why_choose.benefits.2"),
          t("madrid.why_choose.benefits.3"),
        ],
      } : null,
      developers: {
        title: t("madrid.developers.title"),
        partner: t("madrid.developers.partner"),
        carouselLabel: t("madrid.developers.carousel_label"),
        prevSlide: t("madrid.developers.prev_slide"),
        nextSlide: t("madrid.developers.next_slide"),
        goToSlide: t("madrid.developers.go_to_slide"),
      },
    };
  }

  if (destination === "cdmx" && staticContent.hero && staticContent.about) {
    content = {
      ...staticContent,
      hero: {
        ...staticContent.hero,
        title: t("cdmx.hero.title"),
        subtitle: t("cdmx.hero.subtitle"),
        badges: [
          t("cdmx.hero.badges.0"),
          t("cdmx.hero.badges.1"),
          t("cdmx.hero.badges.2"),
        ],
        stats: [
          {
            value: t("cdmx.hero.stats.0.value"),
            text: t("cdmx.hero.stats.0.text"),
            iconName: staticContent.hero.stats[0]?.iconName,
          },
          {
            value: t("cdmx.hero.stats.1.value"),
            text: t("cdmx.hero.stats.1.text"),
            iconName: staticContent.hero.stats[1]?.iconName,
          },
        ],
      },
      about: {
        ...staticContent.about,
        title: t("cdmx.about.title"),
        description: t("cdmx.about.description"),
        marketCard: {
          ...staticContent.about.marketCard,
          title: t("cdmx.about.market_card.title"),
          subtitle: t("cdmx.about.market_card.subtitle"),
        },
        benefits: staticContent.about.benefits.map((b, i) => {
          const keys = [
            "rental_demand",
            "liquid_market",
            "urban_growth",
            "prime_zones",
            "appreciation",
          ];
          return {
            ...b,
            label: t(`cdmx.about.benefits.${keys[i]}`) || b.label,
          };
        }),
      },
      presentation: staticContent.presentation ? {
        ...staticContent.presentation,
        badge: t("cdmx.presentation.badge"),
        title: t("cdmx.presentation.title"),
        description: t("cdmx.presentation.description"),
        cta: t("cdmx.presentation.cta"),
        disclaimer: t("cdmx.presentation.disclaimer"),
      } : null,
      whyChoose: staticContent.whyChoose ? {
        ...staticContent.whyChoose,
        title: t("cdmx.why_choose.title"),
        description: t("cdmx.why_choose.description"),
        quote: t("cdmx.why_choose.quote"),
        benefits: [
          t("cdmx.why_choose.benefits.0"),
          t("cdmx.why_choose.benefits.1"),
          t("cdmx.why_choose.benefits.2"),
          t("cdmx.why_choose.benefits.3"),
        ],
      } : null,
      developers: {
        title: t("cdmx.developers.title"),
        partner: t("cdmx.developers.partner"),
        carouselLabel: t("cdmx.developers.carousel_label"),
        prevSlide: t("cdmx.developers.prev_slide"),
        nextSlide: t("cdmx.developers.next_slide"),
        goToSlide: t("cdmx.developers.go_to_slide"),
      },
    };
  }

  const locationProjectsForSection =
    content.locationProjects && content.locationProjects.length > 0
      ? content.locationProjects
      : undefined;

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar currentDestination={destination} />
      <Hero content={content.hero} destination={destination} />
      {destination === "home" ? <HomeHowToInvestSection /> : null}
      {destination === "home" ? <HomeInvestmentModelsSection /> : null}
      {destination === "home" ? <HomeResidencyInvestmentSection /> : null}
      {destination === "home" ? <HomeFundCapitalSection /> : null}
      {destination === "home" ? <HomeGlobalAgentSection /> : null}
      <AboutSection content={content.about} />
      {destination !== "home" && <LocationSection projects={locationProjectsForSection} />}
      <UnitTypesSection
        units={dynamicUnits && dynamicUnits.length > 0 ? dynamicUnits : content.units}
        title={content.unitsConfig?.title}
        subtitle={content.unitsConfig?.subtitle}
        showViewAllButton={true}
      />
      <PresentationSection content={content.presentation} />
      <WhyChooseSection content={content.whyChoose} />
      <DevelopersSection content={content.developers} />
      <Footer />
    </main>
  );
}
