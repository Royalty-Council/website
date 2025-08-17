import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'

export default function MechanicalLicensingPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Mechanical Licensing & Song Research" 
        breadcrumbs={[
          { label: 'Royalty Accounting', href: '/royalty-accounting' },
          { label: 'Mechanical Licensing & Song Research', href: '/mechanical-licensing' }
        ]}
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="glass-medium rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mechanical Licensing</h2>
            <p className="text-gray-700 leading-relaxed">
              Royalty Review Council can request your mechanical licenses. We can manage all of your licensing activities, pending licenses, past due licenses, and expiring licenses. This includes mechanical licenses by configuration and sub-publishing agreements by territory.
            </p>
          </div>

          <div className="glass-light rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Song Publisher Research</h2>
            <p className="text-gray-700 leading-relaxed">
              Royalty Review Council has the resources to effectively research unknown song publisher interest of musical compositions.
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