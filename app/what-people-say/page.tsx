import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'

export default function WhatPeopleSayPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="What People Say" 
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'What People Say', href: '/what-people-say' }
        ]}
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-8">
            <div className="glass-light rounded-2xl p-8">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                <p className="mb-4">
                  "I have known and worked with Keith for nearly 20 years. Hard to believe. It seems like just yesterday that he was dotting my i's and crossing my t's at A&M Records. Since then we've stayed close and worked together at various times as Keith has elevated himself to Pioneer status in the digital content age. There is not a smarter man alive when it comes to tracking content and making sure that rights holders get compensated for their hard work. Keith is honest, brilliant, commanding, and a true visionary. I'm honored to call him a friend and mentor."
                </p>
                <cite className="block text-right not-italic">
                  <strong className="font-semibold">Larry Weintraub</strong>, CEO at Fanscape
                </cite>
              </blockquote>
            </div>
            
            <div className="glass-medium rounded-2xl p-8">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                <p className="mb-4">
                  "BMG made an excellent choice a few years ago when we selected Royalty Review Council to conduct financial due diligence for our catalog acquisitions. Their in-depth knowledge of the business (publishing and masters) and ability to acutely assess the accuracy of historical earnings played a part in our success to acquire so many catalogs so quickly and efficiently. We value our relationship with RRC as a trusted business partner."
                </p>
                <cite className="block text-right not-italic">
                  <strong className="font-semibold">Laurent Hubert</strong>, (Former) COO - North America at BMG Rights Management
                </cite>
              </blockquote>
            </div>
            
            <div className="glass-light rounded-2xl p-8">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                <p className="mb-4">
                  "We have hired RRC to conduct audits of digital services for many years and their specialized skill set delivers results. I'm always confident that when RRC handles an audit that they will focus on the details and are thorough. Their understanding of the reporting from various digital services around the world is unparalleled."
                </p>
                <cite className="block text-right not-italic">
                  <strong className="font-semibold">Ping Hu</strong>, V.P. Royalty Audits at Universal Music Group
                </cite>
              </blockquote>
            </div>
            
            <div className="glass-medium rounded-2xl p-8">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                <p className="mb-4">
                  "As we continue to expand the services we provide our clients, we are laser-focused on selecting the best companies in their respective fields. And there is none better than Royalty Review Council. Keith has assembled an A-list team that possesses in-depth knowledge and extensive experience in music royalties, copyrights, contracts, licenses and distribution - true professionals who understand the business from the inside. Their proven track record of success will be an incredible resource and benefit to our partner labels."
                </p>
                <cite className="block text-right not-italic">
                  <strong className="font-semibold">Ron Spaulding</strong>, (Former) President at Fontana Distribution
                </cite>
              </blockquote>
            </div>
            
            <div className="glass-light rounded-2xl p-8">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                <p className="mb-4">
                  "We felt that the best provider to manage the royalty accounting services for our clients was Royalty Review Council. Their track record and in-depth knowledge with music royalties, copyrights, licenses, contracts and distribution will greatly benefit our independent label partners."
                </p>
                <cite className="block text-right not-italic">
                  <strong className="font-semibold">Jillian Bordeaux</strong>, VP of Finance at Caroline
                </cite>
              </blockquote>
            </div>
            
            <div className="glass-medium rounded-2xl p-8">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                <p className="mb-4">
                  "Royalty Review Council has handled our music royalty accounting for over 3 years. I have complete trust in them. They work hard to deliver timely and accurate statements."
                </p>
                <cite className="block text-right not-italic">
                  <strong className="font-semibold">Jay Faires</strong>, (Former) President, Music and Publishing at Lionsgate
                </cite>
              </blockquote>
            </div>
            
            <div className="glass-light rounded-2xl p-8">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                <p className="mb-4">
                  "We've worked with Royalty Review Council on several occasions for over seven years. We appreciate their tremendous insights that help us make good decisions about our catalog acquisitions. RRC brings an unparalleled skill set to the financial due diligence process. We continue to expand our relationship with RRC and highly recommend their due diligence services."
                </p>
                <cite className="block text-right not-italic">
                  <strong className="font-semibold">John Titta</strong>, (Former) CEO at MPCA Music Publishing
                </cite>
              </blockquote>
            </div>
            
            <div className="glass-medium rounded-2xl p-8">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                <p className="mb-4">
                  "My clients and I have worked with Royalty Review Council for many years and appreciate their in-depth knowledge of music copyright issues, specialized digital audits and other aspects of digital distribution. They're sharp and savvy professionals who regularly confront complex and cutting-edge issues in the entertainment industry. Whether it be sophisticated due diligence for a potential transaction or specialized consultation for hard-fought litigation, Royalty Review Council delivers high quality results."
                </p>
                <cite className="block text-right not-italic">
                  <strong className="font-semibold">Stephen Ma</strong>, Partner at Early Sullivan Wright Gizer & McRae, LLP
                </cite>
              </blockquote>
            </div>
            
            <div className="glass-light rounded-2xl p-8">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                <p className="mb-4">
                  "We've used Royalty Review Council to prepare our royalty statements for a couple of years. We have complete confidence in their work - they show time & time again that they're the best."
                </p>
                <cite className="block text-right not-italic">
                  <strong className="font-semibold">Indie Record Label Client</strong>
                </cite>
              </blockquote>
            </div>
            
            <div className="glass-medium rounded-2xl p-8">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                <p className="mb-4">
                  "I really like working with Royalty Review Council. Their combination of industry knowledge & specialized audit experience makes them very effective. Audits can be expensive and time-consuming, but we use Royalty Review Council because they're so efficient."
                </p>
                <cite className="block text-right not-italic">
                  <strong className="font-semibold">Major Music Publishing Client</strong>
                </cite>
              </blockquote>
            </div>
            
            <div className="glass-light rounded-2xl p-8">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                <p className="mb-4">
                  "The team at Royalty Review Council really understands the worldwide digital royalty workflow. Our audits with them are thorough and insightful. RRC has been a great partner for digital audits for many years."
                </p>
                <cite className="block text-right not-italic">
                  <strong className="font-semibold">Major Record Label Client</strong>
                </cite>
              </blockquote>
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