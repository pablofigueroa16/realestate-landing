"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown, ChevronLeft, ChevronRight, Eye, ImageOff } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import { getAllProperties, CityProperty } from "@/utils/getAllProperties";

// City badge colors
const cityColors: Record<string, string> = {
  dubai: "bg-amber-500",
  bali: "bg-emerald-500",
  miami: "bg-sky-500",
  madrid: "bg-red-500",
  cdmx: "bg-purple-500",
};

// Property Card Component with Image Carousel
function PropertyCard({ property }: { property: CityProperty }) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  const images = property.images || [];

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (images.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (images.length > 1) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative bg-white p-4 rounded-4xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full group">
      {/* Image Carousel */}
      <div
        className="relative h-64 rounded-3xl overflow-hidden mb-6 bg-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* City Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 ${cityColors[property.citySlug] || "bg-gray-500"} text-white rounded-full text-xs font-medium shadow-sm`}>
            {property.city}
          </span>
        </div>

        {/* Size Badge */}
        {property.size && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-medium text-gray-900 shadow-sm">
              {property.size}
            </span>
          </div>
        )}

        {/* Images */}
        {images.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {imgError[img] ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-gray-400">
                <ImageOff size={32} />
                <span className="text-xs mt-2">{t("common.image_not_found")}</span>
              </div>
            ) : (
              <Image
                src={img}
                alt={`${property.hero.title} - View ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={idx === 0}
                onError={() => setImgError((prev) => ({ ...prev, [img]: true }))}
              />
            )}
          </div>
        ))}

        {/* Navigation Overlay */}
        {images.length > 1 && (
          <div className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-300 z-20 ${isHovered ? "opacity-100" : "opacity-0"}`}>
            <button
              onClick={prevImage}
              className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center hover:bg-white/50 transition-colors"
              aria-label={t("common.prev_image")}
            >
              <ChevronLeft size={16} className="text-white" />
            </button>
            <button
              onClick={nextImage}
              className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center hover:bg-white/50 transition-colors"
              aria-label={t("common.next_image")}
            >
              <ChevronRight size={16} className="text-white" />
            </button>
          </div>
        )}

        {/* Dots Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.slice(0, 5).map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${currentIndex === idx ? "w-4 bg-white" : "w-1.5 bg-white/50"
                  }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-2 pb-2 grow flex flex-col">
        <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-600 transition-colors">
          <Link href={`/propiedades/${property.slug}`} className="before:absolute before:inset-0 focus:outline-none">
            {property.hero.title}
          </Link>
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 grow line-clamp-3">
          {property.description || property.hero.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Link
            href={`/propiedades/${property.slug}`}
            className="relative z-10 w-full py-3 rounded-xl flex items-center justify-center gap-2 text-gray-900 font-medium border border-gray-200 hover:bg-gray-50 transition-all"
          >
            <Eye size={18} />
            {t("unit_types.details_button")}
          </Link>
          <a
            href={`https://wa.me/971543034346?text=${encodeURIComponent(t("unit_types.whatsapp_message"))}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full py-3 rounded-xl flex items-center justify-center gap-2 text-white font-bold transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: '#25D366' }}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            {t("unit_types.whatsapp_button")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  const { t } = useTranslation();
  const allProperties = useMemo(() => getAllProperties(), []);

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  // Get unique cities
  const cities = useMemo(() => {
    const uniqueCities = [...new Set(allProperties.map((p) => p.citySlug))];
    return uniqueCities.map((slug) => ({
      slug,
      name: allProperties.find((p) => p.citySlug === slug)?.city || slug,
    }));
  }, [allProperties]);

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let result = [...allProperties];

    // Filter by city
    if (selectedCity !== "all") {
      result = result.filter((p) => p.citySlug === selectedCity);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.hero.title.toLowerCase().includes(query) ||
          (p.description && p.description.toLowerCase().includes(query)) ||
          p.hero.description.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case "name":
        result.sort((a, b) => a.hero.title.localeCompare(b.hero.title));
        break;
      case "newest":
      default:
        // Keep original order (newest first)
        break;
    }

    return result;
  }, [allProperties, selectedCity, searchQuery, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCity("all");
    setSortBy("newest");
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar currentDestination="home" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-900">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
              {t("properties_page.title")}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t("properties_page.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("properties_page.search_placeholder")}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>

            {/* City Dropdown */}
            <div className="relative w-full md:w-48">
              <button
                onClick={() => {
                  setIsCityDropdownOpen(!isCityDropdownOpen);
                  setIsSortDropdownOpen(false);
                }}
                className="w-full flex items-center justify-between px-3 py-3 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
              >
                <span className="text-gray-700">
                  {selectedCity === "all"
                    ? t("properties_page.all_cities")
                    : cities.find((c) => c.slug === selectedCity)?.name}
                </span>
                <ChevronDown size={16} className={`text-gray-400 transition-transform ${isCityDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isCityDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1 z-50">
                  <button
                    onClick={() => {
                      setSelectedCity("all");
                      setIsCityDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${selectedCity === "all" ? "font-bold text-black" : "text-gray-700"}`}
                  >
                    {t("properties_page.all_cities")}
                  </button>
                  {cities.map((city) => (
                    <button
                      key={city.slug}
                      onClick={() => {
                        setSelectedCity(city.slug);
                        setIsCityDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${selectedCity === city.slug ? "font-bold text-black" : "text-gray-700"}`}
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full md:w-48">
              <button
                onClick={() => {
                  setIsSortDropdownOpen(!isSortDropdownOpen);
                  setIsCityDropdownOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
              >
                <span className="text-gray-700">
                  {sortBy === "newest" ? t("properties_page.sort_newest") : t("properties_page.sort_name")}
                </span>
                <ChevronDown size={16} className={`text-gray-400 transition-transform ${isSortDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isSortDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1 z-50">
                  <button
                    onClick={() => {
                      setSortBy("newest");
                      setIsSortDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${sortBy === "newest" ? "font-bold text-black" : "text-gray-700"}`}
                  >
                    {t("properties_page.sort_newest")}
                  </button>
                  <button
                    onClick={() => {
                      setSortBy("name");
                      setIsSortDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${sortBy === "name" ? "font-bold text-black" : "text-gray-700"}`}
                  >
                    {t("properties_page.sort_name")}
                  </button>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="ml-auto text-sm text-gray-500">
              {filteredProperties.length} {t("properties_page.properties_found")}
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={`${property.citySlug}-${property.id}`} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-6">{t("properties_page.no_results")}</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
              >
                {t("properties_page.clear_filters")}
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
