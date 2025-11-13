import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { landingPageData } from '@/data/landingPageData';

export const PricingSection: React.FC = () => {
  const { pricing } = landingPageData;

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {pricing.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {pricing.sectionSubtitle}
          </p>
        </div>

        {/* Grid de planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`
                relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300
                ${plan.highlighted ? 'border-4 border-primary-500 scale-105 md:scale-110' : 'border border-gray-200'}
                animate-fade-in
              `}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Badge destacado */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Más Popular
                </div>
              )}

              {/* Nombre del plan */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>

              {/* Precio */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>

              {/* Descripción */}
              <p className="text-gray-600 mb-6 min-h-[48px]">
                {plan.description}
              </p>

              {/* Lista de características */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href={plan.ctaLink}>
                <Button
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.ctaText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
