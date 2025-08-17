import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FAQSection from '@/components/FAQSection'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="glass-medium rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Financial consulting services for entertainment companies
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-[900px] mx-auto">
              Founded in 1999 by the foremost expert in royalty accounting, Royalty Review Council has grown into the industry-leading team of specialists that provide financial consulting services for media and entertainment companies.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Royalty Review Council specializes in…
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Royalty Audits Card */}
            <div className="glass-light rounded-2xl p-8 relative overflow-hidden group">
              <span className="service-number">01</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Royalty Audits</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are the #1 firm specializing in royalty audits, focusing on compliance audits of digital service providers, to determine if sales and royalties are properly reported.
              </p>
              <Link 
                href="/royalty-audits" 
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More →
              </Link>
            </div>

            {/* Royalty Accounting Card */}
            <div className="glass-medium rounded-2xl p-8 relative overflow-hidden group">
              <span className="service-number">02</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Royalty Accounting</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We deliver a turnkey outsource royalty accounting solution for content owners and distributors of creative works, including music, video, film and more.
              </p>
              <Link 
                href="/royalty-accounting" 
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More →
              </Link>
            </div>

            {/* Strategic Consulting Card */}
            <div className="glass-light rounded-2xl p-8 relative overflow-hidden group">
              <span className="service-number">03</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Consulting</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We provide strategic financial consulting services for media & entertainment, such as song catalog due diligence, copyright research and mechanical licensing.
              </p>
              <Link 
                href="/catalog-due-diligence" 
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="glass-medium rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Royalty Review Council helps fuel higher revenue and reduce operating costs
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-[900px] mx-auto">
              We work with CFOs, business affairs teams and in-house royalty accountants. Our clients include major and independent record labels, music publishers, book publishers, film & television studios and video game distributors.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-minimal rounded-lg p-6 text-center">
              <p className="text-gray-700 font-medium">The Premier Firm in Digital Audits and Outsource Royalties</p>
            </div>
            <div className="glass-minimal rounded-lg p-6 text-center">
              <p className="text-gray-700 font-medium">Broad Media & Entertainment Experience</p>
            </div>
            <div className="glass-minimal rounded-lg p-6 text-center">
              <p className="text-gray-700 font-medium">Marketplace Credibility and Longevity</p>
            </div>
            <div className="glass-minimal rounded-lg p-6 text-center">
              <p className="text-gray-700 font-medium">Industry Relationships</p>
            </div>
            <div className="glass-minimal rounded-lg p-6 text-center">
              <p className="text-gray-700 font-medium">Deep Understanding of Contracts and Royalty Reporting</p>
            </div>
            <div className="glass-minimal rounded-lg p-6 text-center">
              <p className="text-gray-700 font-medium">Independence</p>
            </div>
            <div className="glass-minimal rounded-lg p-6 text-center">
              <p className="text-gray-700 font-medium">Results</p>
            </div>
            <div className="glass-minimal rounded-lg p-6 text-center">
              <p className="text-gray-700 font-medium">Trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
          </div>
          <p className="text-center text-gray-400">
            Copyright 2025 Royalty Review Council | All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}