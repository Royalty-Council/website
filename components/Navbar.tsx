"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 glass-navbar">
      <div className="mx-auto max-w-[1400px] h-20 px-8 flex items-center">
        {/* left: logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg"
              alt="RRC Logo"
              width={80}
              height={70}
              className="mr-3 border-0 outline-none"
              style={{ border: 'none', outline: 'none' }}
              priority
            />
            <span className="font-semibold text-gray-900 text-lg tracking-tight">Royalty Review Council</span>
          </Link>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex items-center gap-8 ml-12">
          {/* Royalty Accounting Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('accounting')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link href="/royalty-accounting" className="flex items-center gap-1 py-2 text-base font-medium text-gray-700 hover:text-primary-blue transition-colors">
              Royalty Accounting
              <ChevronDown className="w-4 h-4" />
            </Link>
            {activeDropdown === 'accounting' && (
              <div className="absolute top-full left-0 w-56 bg-white border border-gray-200 rounded-lg shadow-sm mt-1">
                <Link href="/music-royalty-accounting" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-blue transition-colors">
                  Music Royalties
                </Link>
                <Link href="/mechanical-licensing" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-blue transition-colors">
                  Licensing & Research
                </Link>
                <Link href="/royalty-statements" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-blue transition-colors">
                  Statements & Reports
                </Link>
              </div>
            )}
          </div>

          <Link href="/catalog-due-diligence" className="py-2 text-base font-medium text-gray-700 hover:text-primary-blue transition-colors">
            Consulting Services
          </Link>

          {/* About Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link href="/about" className="flex items-center gap-1 py-2 text-base font-medium text-gray-700 hover:text-primary-blue transition-colors">
              About
              <ChevronDown className="w-4 h-4" />
            </Link>
            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 w-52 bg-white border border-gray-200 rounded-lg shadow-sm mt-1">
                <Link href="/why-choose-us" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-blue transition-colors">
                  Why Choose Us
                </Link>
                <Link href="/what-people-say" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-blue transition-colors">
                  What People Say
                </Link>
                <Link href="/board-of-directors" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-blue transition-colors">
                  Board of Directors
                </Link>
              </div>
            )}
          </div>
        </nav>
        
        <a href="#contact" className="ml-auto btn-primary-realistic">
          Contact Us
        </a>
      </div>
    </nav>
  );
}