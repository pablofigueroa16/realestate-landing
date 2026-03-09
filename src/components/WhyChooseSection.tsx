"use client";

import { CheckCircle2, Play } from "lucide-react";
import { useState, useRef } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { WhyChooseContent } from "@/data/landing-content";

interface WhyChooseSectionProps {
  content?: WhyChooseContent | null;
}

export default function WhyChooseSection({ content }: WhyChooseSectionProps) {
  const { t, locale } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (content?.hidden) return null;

  const defaultVideoSrc = content?.videoSrc || "/video_why.mp4";
  const videoSrc = locale === "en" && content?.videoSrcEn ? content.videoSrcEn : defaultVideoSrc;
  const title = content?.title || t("why_choose.title");
  const description = content?.description || t("why_choose.description");
  const benefits = content?.benefits || (t("why_choose.benefits") as unknown as string[]);
  const quote = content?.quote || t("why_choose.quote");

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
        videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <section id="video" className="w-full bg-gray-50 py-16 lg:py-0 lg:h-screen lg:flex lg:items-center lg:justify-center">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 lg:items-center lg:h-full">
        {/* Left Column: Video + Quote */}
        <div className="flex flex-col gap-4">
          <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-video lg:aspect-auto lg:h-[60vh] group">
            <video
              key={videoSrc}
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              onEnded={handleVideoEnd}
              controls={isPlaying}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>

            {!isPlaying && (
              <div
                className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer group-hover:bg-black/10 transition-colors"
                onClick={handlePlay}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-30 w-20 h-14 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-red-700">
                  <Play size={32} className="text-white fill-white ml-1" />
                </div>
              </div>
            )}
          </div>

          <p className="text-gray-900 font-medium italic text-sm lg:text-lg border-l-4 border-gray-900 pl-4 py-2">
            &rdquo;{quote}&rdquo;
          </p>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center max-w-xl">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 leading-tight">
            {title}
          </h2>

          <p className="text-gray-500 text-base lg:text-lg font-light mb-6 leading-relaxed whitespace-pre-line">
            {description}
          </p>

          <div className="space-y-3">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-gray-900 shrink-0" strokeWidth={1.5} />
                <span className="text-base lg:text-lg font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
