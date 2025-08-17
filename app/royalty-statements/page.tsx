import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'

export default function RoyaltyStatementsPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Royalty Accounting Statements & Reports" 
        breadcrumbs={[
          { label: 'Royalty Accounting', href: '/royalty-accounting' },
          { label: 'Royalty Accounting Statements & Reports', href: '/royalty-statements' }
        ]}
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="glass-medium rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Traditional and Digital Sales Files</h2>
            <p className="text-gray-700 leading-relaxed">
              We can import sales data from a variety of file sources, including nearly all traditional and digital distributor sales files. Using our data import systems, you can easily avoid the cost and hassle of re-keying sales data from spreadsheets to accounting systems.
            </p>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Royalty Calculation</h2>
            <p className="text-gray-700 leading-relaxed">
              We ensure that all royalties (e.g. artist, producer, webcast, performance, special market, mechanical, etc.) are calculated for all products sold whether in physical format or digitally delivered.
            </p>
          </div>

          <div className="glass-medium rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Artist Royalties and Mechanical Royalties</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Royalty Accounting services include semi-annual or quarterly Standard Record and Mechanical Royalty Statements. Statements reflect the period of sale, territory of sale, units sold, unit rate, catalog number, configuration, opening balances, and royalties earned.
            </p>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Standard Royalty Summary Statement</h2>
            <p className="text-gray-700">
              <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                Sample Royalty Statement
              </a>
            </p>
          </div>

          <div className="glass-light rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Standard Artist Royalty Statement</h2>
            <p className="text-gray-700">
              <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                Sample Artist Royalty Statement
              </a>
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