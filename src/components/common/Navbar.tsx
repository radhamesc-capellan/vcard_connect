"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { landingPageData } from "@/data/landingPageData";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { company, navigation, auth } = landingPageData;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/*
          <div className="flex-shrink-0">
            <Link href="#hero" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-600">
                {company.name}
              </span>
            </Link>
          </div>
          */}

          <div className="flex-shrink-0">
            <Link href="#hero" className="flex items-center">
              {/* usa Image para optimización; el archivo debe estar en /public/vc-logo.png */}
              <Image
                src="/vc-logo.png"
                alt={`${company.name} logo`}
                width={224}
                height={56}
                // aumentar visualmente el logo sin cambiar la altura del navbar (h-16)
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
              <Link href={auth.loginUrl}>
                <Button variant="outline" size="sm">
                  {auth.loginText}
                </Button>
              </Link>
              <Link href={auth.registerUrl}>
                <Button variant="primary" size="sm">
                  {auth.registerText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md p-2"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col space-y-2">
              {navigation.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-gray-100 pt-2 space-y-2">
                <Link
                  href={auth.loginUrl}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full"
                >
                  <Button variant="outline" className="w-full justify-start">
                    {auth.loginText}
                  </Button>
                </Link>
                <Link
                  href={auth.registerUrl}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full"
                >
                  <Button variant="primary" className="w-full">
                    {auth.registerText}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
