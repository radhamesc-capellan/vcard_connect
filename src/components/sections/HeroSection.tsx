import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { landingPageData } from "@/data/landingPageData";

export const HeroSection: React.FC = () => {
  const { hero } = landingPageData;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          {/* Contenido de texto */}
          <div className="text-center lg:text-left animate-slide-up relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tighter leading-tight">
              {hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-primary-600 font-medium mb-8 tracking-wide">
              {hero.subtitle}
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href={hero.ctaPrimary.href}>
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto shadow-glow"
                >
                  {hero.ctaPrimary.text}
                </Button>
              </Link>
              <Link href={hero.ctaSecondary.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  {hero.ctaSecondary.text}
                </Button>
              </Link>
            </div>
          </div>

          {/* Imagen o ilustración */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-brand-gradient opacity-20 blur-3xl rounded-full -z-10 animate-pulse"></div>
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                width={600}
                height={600}
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />

              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-400/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-secondary-400/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
