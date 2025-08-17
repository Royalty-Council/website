import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'

export default function RoyaltyAccountingPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Our Royalty Accounting Services" 
        breadcrumbs={[{ label: 'Royalty Accounting', href: '/royalty-accounting' }]}
      />
      
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="glass-light rounded-2xl p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              During these challenging times for the entertainment industry, royalty accounting is a core responsibility that must still be managed, and Royalty Review Council can help you by providing assistance that bridges you through the downturn. To help manage your costs, we offer three specialized royalty accounting services…
            </p>
          </div>

          <div className="glass-medium rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Outsource Royalty Accounting, including Digital Delivery</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Royalty Review Council provides a complete turnkey, cost-effective, professional alternative to a traditional in-house royalty department, eliminating the staffing overhead and technical complexities of managing a part-time or fully-functional in-house royalty department. We offer a viable solution for any company that is required to process music, home video, film, publishing or video game royalty and participation statements. We can process your statements using our systems.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are recognized as one of the first independent companies to build new infrastructures for managing, processing and reporting royalties from both traditional and new digital businesses. Our systems facilitate electronically importing sales data from all the major digital service providers, including iTunes, Amazon, Rhapsody and eMusic.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We also assist companies who license catalogs from third parties for physical distribution or digital transmission over the Internet, cable, or wireless networks and are required to render royalty statements, reports, and payments. This includes new digital businesses, including all download, subscription, webcasts, peer-to-peer (P2P), streams, and pay-per-play businesses around the world through channels of distribution or purchase such as kiosks, computers, TV set top boxes, and wireless devices.
            </p>
          </div>

          <div className="glass-medium rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Remote Royalty Management</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have already licensed royalty accounting software, you probably invested in advanced features designed to handle your reporting requirements. The software, however, is only part of the solution – it takes experienced, knowledgeable staff to set up the catalog, contracts, rates and payees. We can provide the manpower and expertise you need to leverage your investment, remotely accessing your royalty systems to process statements.
            </p>
          </div>

          <div className="glass-medium rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Royalty Staffing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since Royalty Review Council is heavily entrenched in royalty accounting, we recruit and work with seasoned and informed staff. Our Royalty Staffing service allows us to assist you in a unique way: from the inside. Working as part of your team, we can put qualified staff on site to get your royalty accounting needs addressed using your existing systems.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services are available to major labels, independent record labels, music publishers, distributors, webcasters, performance societies (PROs), recording artists, songwriters, digital distributors, wireless phone companies, media players, home video companies, studios, book publishers and video game companies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For more details about our specialized <strong className="font-semibold">music royalty accounting</strong>, please see our{' '}
              <Link href="/music-royalty-accounting" className="text-blue-600 hover:text-blue-700 underline">
                Music Royalties
              </Link>{' '}
              page.
            </p>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Royalty Software Infrastructure</h2>
            <p className="text-gray-700 leading-relaxed">
              We utilize a variety of sophisticated royalty software systems specifically designed to fully automate the processing of royalty calculations and ensure that royalties of all types have been calculated accurately. Our systems are constantly updated to manage the evolving royalty reporting requirements associated with new sales channels, new formats, new royalty provisions, which are tailored to the needs of our clients.
            </p>
          </div>

          <div className="glass-medium rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Outsource Royalty Accounting?</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Whether you are a start-up or a large organization, our systems and experienced royalty staff can oversee, calculate, and process your royalties and statements. Outsourcing provides a rapid and cost-effective turnkey solution for your operation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-light rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Savings</h3>
                <p className="text-gray-700">
                  By outsourcing your royalty accounting needs you will avoid the costs associated with the purchase of a royalty administration software program, recurring royalty software license fees and updates, royalty software training courses, additional computers, and the overhead expense of an experienced royalty staff.
                </p>
              </div>

              <div className="glass-light rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scalability</h3>
                <p className="text-gray-700">
                  We can scale to your needs. Your company can mitigate the risk of the overhead expense necessary to maintain a fully-functional royalty department staff to manage an unknown level of royalty accounting needs.
                </p>
              </div>

              <div className="glass-light rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Experience</h3>
                <p className="text-gray-700">
                  Leverage our industry experience! Since members of our staff have many years of experience in processing royalties, we know where problems arise and how to handle them. We understand contracts, licensing and royalties from the inside.
                </p>
              </div>
            </div>
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