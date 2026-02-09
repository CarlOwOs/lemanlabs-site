"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-icon.png"
              alt="LemanLabs"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
              style={{ filter: "grayscale(1) contrast(5)" }}
            />
            <span className="text-gray-900 font-semibold text-xl leading-none">LemanLabs</span>
          </a>

          {/* Desktop Navigation - Hidden for now */}
          {/* <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Docs
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </a>
          </div> */}

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/docs"
              className="btn-primary"
            >
              Start Building
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              <a
                href="/docs"
                className="btn-primary text-center justify-center"
              >
                Start Building
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
