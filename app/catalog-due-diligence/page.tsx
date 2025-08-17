import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'

export default function CatalogDueDiligencePage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Strategic Financial Consulting Services" 
        breadcrumbs={[{ label: 'Strategic Financial Consulting Services', href: '/catalog-due-diligence' }]}
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="glass-medium rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Record Label & Song Catalog Due Diligence</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Royalty Review Council assists potential buyers in assessing acquisition opportunities by providing financial consulting on master catalogs and song catalogs available for sale. Before acquiring a catalog, it is vital that you assess the gross and net income figures received and retained being represented by the seller. Royalty Review Council has advised on master and song catalog acquisitions that exceed over $5 billion in aggregate value.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Some of our due diligence procedures include:</h3>
            <ul className="space-y-3">
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Financial due diligence procedures in connection with publishing and administration catalog acquisitions, including review of the accuracy of representation of Net Publisher's Share</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Financial due diligence procedures in connection with record label and/or sound recording rights acquisitions to assess the accuracy of the Net Label Share</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Creation of sales books (including financial schedules) for the sale of music assets and the management of data rooms between buyers and sellers of catalogs</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Research in connection with musical compositions and/or sound recordings to determine uses that may be unknown to a rights holder. This type of research may disclose illegal and/or unreported uses of copyrighted material</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Research to determine unknown song publishers and/or unknown song ownership shares in connection with the licensing of musical compositions</span>
              </li>
            </ul>
          </div>

          <div className="glass-light rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Financial Consulting Services</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Royalty Review Council is known in the entertainment and new media industries for our financial skill and knowledge in complex matters related to accounting, reporting, copyrights, and licensing of creative works (e.g. music copyrights, record masters, films, merchandise licenses, etc.). In addition to our main services (Royalty Audits, Royalty Accounting, and Master & Song Catalog Due Diligence), we offer a valuable mix of strategic consulting services:
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Litigation Support and Expert Testimony</h3>
                <p className="text-gray-700 leading-relaxed">
                  We act as expert witnesses and litigation consultants to assist clients and attorneys
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Distribution Rights</h3>
                <p className="text-gray-700 leading-relaxed">
                  Analysis of the distribution rights of existing licenses for new business models and acquisitions
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Distribution Licenses</h3>
                <p className="text-gray-700 leading-relaxed">
                  Assistance to obtain required licenses for the distribution or transmission of creative works
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Royalty Reporting Requirements</h3>
                <p className="text-gray-700 leading-relaxed">
                  The review and/or identification of the data collection and royalty reporting requirements to licensors associated with the exploitation of licensed sound recordings and licensed musical compositions by methods of distribution such as apps
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Operating Scenario Modeling</h3>
                <p className="text-gray-700 leading-relaxed">
                  Spreadsheet modeling as it relates to traditional music industry royalty accounting and/or your particular business model to enable you to project various operating scenarios from the sale of creative works
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Audit Report Review</h3>
                <p className="text-gray-700 leading-relaxed">
                  Review and response to audit reports submitted to records labels and publishers to determine the accuracy of the claims and the amount payable
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