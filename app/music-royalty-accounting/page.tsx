import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'

export default function MusicRoyaltyAccountingPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Music Royalty Accounting" 
        breadcrumbs={[
          { label: 'Royalty Accounting', href: '/royalty-accounting' },
          { label: 'Music Royalty Accounting', href: '/music-royalty-accounting' }
        ]}
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="glass-medium rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Outsource Your Music Royalty Accounting</h2>
            <p className="text-gray-700 leading-relaxed">
              Royalty Review Council's royalty accounting services for record labels and music publishers is unrivaled. We offer a complete cost-effective professional alternative to a traditional in-house music royalty department. You will save time and money when compared to the overhead costs and complexities to operate a part-time or fully-functional in-house royalty department. Whether you are a start-up or a mature company, our systems and experienced music royalty accounting staff can oversee, calculate, and process your royalties and statements.
            </p>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Process Music Royalties For…</h2>
            <p className="text-gray-700 leading-relaxed">
              Our royalty accounting services are available to major record labels, independent record labels, music publishers, distributors, webcasters, performance rights societies, recording artists, songwriters, digital distributors, wireless phone companies, media players, home video companies, and video game companies. If music is involved in the distribution, contact us!
            </p>
          </div>

          <div className="glass-medium rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Processing Sales of Digital Downloads</h2>
            <p className="text-gray-700 leading-relaxed">
              We are recognized as one of the first independent companies to build new infrastructures for managing, processing and reporting music royalties from traditional and new digital businesses. Our systems facilitate electronically importing sales data from all the major digital service providers (DSPs), including iTunes, the Orchard, TuneCore, SoundCloud… (all download, subscription, podcasts, and pay-per-play businesses around the world).
            </p>
          </div>

          <div className="glass-light rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Music Royalty Administration Software Systems</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We utilize sophisticated royalty software infrastructure to process artist, mechanical and music publishing royalty calculations accurately. Our systems are regularly updated to manage the changing landscape of music royalty reporting requirements associated with sales channels, formats and royalty provisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For more details about music royalty accounting, please see our Service Details page.
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