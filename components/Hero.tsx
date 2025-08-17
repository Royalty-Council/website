"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import CommandPalette from "./CommandPalette"
import WaitlistModal from "./WaitlistModal"

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState<"mac" | "windows">("mac")

  const handleDownloadClick = (platform: "mac" | "windows") => {
    setSelectedPlatform(platform)
    setModalOpen(true)
  }

  return (
    <>
      <section className="relative min-h-[85vh] flex items-center py-20">
        <div className="mx-auto max-w-[1400px] px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h1 className="text-5xl lg:text-6xl mb-8">
                <span className="hero-title-prefix animate-hero-fade-in">The Industry's</span>
                <span className="hero-title-main block animate-hero-fade-in animation-delay-200" data-text="Leading Royalty Experts">
                  Leading Royalty Experts
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-[500px] animate-hero-fade-in animation-delay-400" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                Financial consulting services for media & entertainment. Trusted by major labels, publishers, and studios worldwide.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  className="btn-primary-realistic"
                  onClick={() => handleDownloadClick("mac")}
                  type="button"
                >
                  Schedule Consultation
                </button>

                <button 
                  className="btn-secondary-realistic"
                  onClick={() => handleDownloadClick("windows")}
                  type="button"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right side - Command Palette */}
            <div className="flex items-center justify-center">
              <CommandPalette />
            </div>
          </div>
        </div>
      </section>

      <WaitlistModal 
        open={modalOpen}
        onOpenChange={setModalOpen}
        platform={selectedPlatform}
      />
    </>
  );
}