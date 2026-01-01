"use client";

import React from "react";
import { landingPageData } from "@/data/landingPageData";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const FeaturesSection: React.FC = () => {
  const { features } = landingPageData;

  return (
    <section id="features" className="py-24 bg-gray-50/50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tighter">
            {features.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {features.sectionSubtitle}
          </p>
        </div>

        {/* Grid de características Interactivas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.items.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ rotateX: 2, rotateY: 2, scale: 1.02 }}
              className={`
                 ${
                   index === 0 || index === 3
                     ? "md:col-span-2 lg:col-span-2"
                     : ""
                 }
              `}
            >
              <SpotlightCard className="h-full p-8 bg-white dark:bg-gray-800 border-none shadow-soft hover:shadow-2xl transition-shadow duration-500">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brand-gradient/10 rounded-2xl flex items-center justify-center mb-6 text-4xl text-primary-600 shadow-inner">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
