import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Overview of Royalty Review Council" 
        breadcrumbs={[{ label: 'About', href: '/about' }]}
      />
      
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="glass-medium rounded-2xl p-10 mb-12">
            <div className="relative">
              <div className="absolute -top-6 -left-6 text-8xl font-bold text-primary-blue opacity-5">1999</div>
              <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                Founded in 1999, Royalty Review Council has grown into a specialized team that provides financial consulting services for media and entertainment companies. Over the past decade, we have worked with CFOs, business affairs and in-house royalty teams to provide a variety of royalty-related services. Our client list includes major record companies, independent record labels, music publishers, book publishers, content publishers, film & television studios, video game distributors and digital service providers. Our consulting services, infrastructure and industry experience can help fuel higher revenue and help reduce operating costs.
              </p>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Royalty Review Council Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Since we started, our services have grown to include digital audits, outsource royalty accounting and specialized financial consulting services for media and entertainment companies. We have worked with major media & entertainment companies, as well as many independent copyright owners and content publishers, becoming a trusted, independent financial consultancy.
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Royalty Review Council is recognized as one of the first independent companies to build new infrastructures for managing, processing and reporting royalties from traditional and new digital business. We have reviewed and processed royalties on a global scale, including download, subscription, webcast, stream and pay-per-play business. We've handled many distribution channels such as kiosks, computers, TV set top boxes and wireless devices.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-light rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Royalty Review Council in the Community</h2>
              <p className="text-gray-700 leading-relaxed">
                We are also a proud team sponsor of the Food Allergy & Anaphylaxis Network, American Youth Soccer Organization (AYSO), youth basketball programs and little league baseball.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Royalty Review Council Offices</h2>
              <p className="text-gray-700 leading-relaxed">
                Royalty Review Council is located in Los Angeles and has affiliate offices in New York and London.
              </p>
            </div>
          </div>

          {/* About Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/why-choose-us" className="glass-medium rounded-2xl p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Us</h3>
              <p className="text-gray-600 mb-4">
                Learn more about our expertise, industry knowledge, and why clients choose to work with us.
              </p>
              <span className="text-blue-600 font-medium">Learn More →</span>
            </Link>

            <Link href="/what-people-say" className="glass-medium rounded-2xl p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What People Say</h3>
              <p className="text-gray-600 mb-4">
                Read testimonials from our satisfied clients about their experience working with Royalty Review Council.
              </p>
              <span className="text-blue-600 font-medium">Learn More →</span>
            </Link>

            <Link href="/board-of-directors" className="glass-medium rounded-2xl p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Board of Directors</h3>
              <p className="text-gray-600 mb-4">
                Meet the leadership team that guides Royalty Review Council's strategies and operations.
              </p>
              <span className="text-blue-600 font-medium">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="mx-auto max-w-[1200px] px-6">
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
    </>
  )
}