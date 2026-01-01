import React from "react";
import { landingPageData } from "@/data/landingPageData";

export const FeaturesSection: React.FC = () => {
  const { features } = landingPageData;

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {features.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {features.sectionSubtitle}
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.items.map((feature, index) => (
            <div
              key={feature.id}
              className={`
                p-8 rounded-xl border border-gray-100 shadow-soft hover:shadow-lg transition-all duration-300 bg-white group
                ${
                  index === 0 || index === 3
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-primary-50"
                    : ""
                }
              `}
            >
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300 shadow-sm text-primary-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
