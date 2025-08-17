import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'

export default function WhyChooseUsPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Why Choose Us" 
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Why Choose Us', href: '/why-choose-us' }
        ]}
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="glass-medium rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Consultants Who Know What They're Doing</h2>
            <p className="text-gray-700 leading-relaxed">
              Started by the foremost industry expert in royalty accounting, Royalty Review Council now leads the market in providing financial consulting services to media and entertainment companies, including digital service provider compliance audits, outsource royalty accounting, song catalog due diligence and specialized financial consulting services.
            </p>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Broad Industry Knowledge</h2>
            <p className="text-gray-700 leading-relaxed">
              Our management team includes professionals who have spent many years working at record labels, music publishers, online companies and entertainment law firms.
            </p>
          </div>

          <div className="glass-medium rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Deep Understanding of Royalties</h2>
            <p className="text-gray-700 leading-relaxed">
              We understand the complexities of music royalties, copyrights, contracts, licenses, clearance and distribution. We are staffed by individuals who have actually worked at the same type of organizations that we service and audit – we understand the business from the inside.
            </p>
          </div>
          
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Marketplace Credibility</h2>
            <p className="text-gray-700 leading-relaxed">
              By understanding the needs of entertainment and new media clients, Royalty Review Council is able to provide critical royalty accounting and related advisory services with marketplace credibility.
            </p>
          </div>
          
          <div className="glass-medium rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Relationships</h2>
            <p className="text-gray-700 leading-relaxed">
              Our team of professional possesses both deep and globally diverse relationships with many leading record labels, publishers, online companies and entertainment law firms of the leading companies in music, film & television, interactive games, capital markets, professional service and other sectors – enabling powerful networking for strong results.
            </p>
          </div>
          
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Independence</h2>
            <p className="text-gray-700 leading-relaxed">
              We provide independent advice and support to major and independent record labels, music publishers, webcasters, performance societies, recording artists, songwriters, digital distributors, media players, video game and software distributors, and other service providers worldwide. As an impartial third party who avoids business conflicts, we equitably serve the needs of our clients and their royalty recipients.
            </p>
          </div>
          
          <div className="glass-medium rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results</h2>
            <p className="text-gray-700 leading-relaxed">
              We lead the market because of our professionalism and the high quality of our work. We provide our clients with guidance throughout the process to maximize return on investment.
            </p>
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