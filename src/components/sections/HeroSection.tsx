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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-primary-600 font-semibold mb-6">
              {hero.subtitle}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href={hero.ctaPrimary.href}>
                <Button size="lg" variant="primary">
                  {hero.ctaPrimary.text}
                </Button>
              </Link>
              <Link href={hero.ctaSecondary.href}>
                <Button size="lg" variant="outline">
                  {hero.ctaSecondary.text}
                </Button>
              </Link>
            </div>
          </div>

          {/* Imagen o ilustración */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-lg">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                width={600}
                height={600}
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-200 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
