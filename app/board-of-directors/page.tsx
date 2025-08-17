import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'

export default function BoardOfDirectorsPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Board of Directors" 
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Board of Directors', href: '/board-of-directors' }
        ]}
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
            The Board of Directors at Royalty Review Council brings decades of experience and in-depth industry knowledge to our business.
          </p>
          
          <div className="glass-medium rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Keith Bernstein</h2>
            <h3 className="text-xl font-semibold text-blue-600 mb-6">Chief Executive Officer</h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Keith Bernstein is the founder of Crunch Digital and CEO of Royalty Review Council. As CEO of Royalty Review Council he is responsible for extending RRC's partnerships and spearheading growth in international business segments, including music, film & television, publishing and games. Keith has been an expert witness in cases involving music royalty licensing and reporting matters. In addition, he has served as a "Neutral Accounting Master" as it relates to cases heard at JAMS, where he has acted as a neutral resource to Arbitrators for cases that involve intellectual property, licensing matters, and revenue participation calculations.
              </p>
              
              <p>
                As founder of Crunch Digital, Keith created a new business model to eliminate the barriers of music licensing and payments, ultimately fueling better revenue flow and reducing operating costs through streamlined workflows.
              </p>
              
              <p>
                Crunch Digital is an independent technology firm based in Los Angeles, California with a long pedigree in the media & entertainment industry. Crunch offers a full suite of solutions and services to provide a simple, affordable, compliant and a reliable way to use music content. Crunch supports content owners – including record labels and music publishers – by managing the flow of data to and from digital services and other licensees. Crunch also manages data flow for content licensees – digital service providers, fitness companies, multi-channel networks, game companies, app developers and mobile carriers – including royalty reporting and payments.
              </p>
              
              <p>
                In fall 2017, Crunch launched the Digital Music Sandbox™ a music licensing platform that enables qualified app developers to include music legally from participating major and indie record labels and music publishers under short-term restricted use developer licenses – and do it faster.
              </p>
              
              <p>
                Keith is the creator of TEMPO, a first of its kind multi-dimensional online tool for sound recording curation and song publisher clearance that is available as a part of Crunch Digital's services. With Tempo users can create a list of tracks that they would like to use for their music service, fitness classes, mobile App, or video… and using the platform they can validate whether those tracks are available for use under existing licenses with record labels, music publishers, and performance societies.
              </p>
              
              <p>
                Keith has over 30 years of experience managing the complexities of royalty accounting, reporting requirements, label and publishing operations, and copyrights. In his years prior to Crunch Digital and Royalty Review Council, Keith was Vice President of Operations for Napster, Senior Director of Operations for Universal Global e, the e-commerce division of the Universal Music Group, and Director of Operations for A&M Records.
              </p>
              
              <p>
                Keith has been a featured guest lecturer at universities and has spoken on a number of industry panels, covering such topics as licensing, music royalty accounting, royalty examination procedures, and financial due diligence related to song catalog acquisitions.
              </p>
              
              <p>
                Keith attended the John E. Anderson Graduate School of Management Executive Program in Business Management at the University of California, Los Angeles. He also received his Bachelor of Arts Degree in Economics/Business from the University of California, Los Angeles.
              </p>
            </div>
          </div>
          
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Steven Antebi</h2>
            <h3 className="text-xl font-semibold text-blue-600 mb-6">Chairman of the Board</h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mr. Antebi is the President and Chairman of the Board of Maple Capital Management, an equity fund focused on investments in North America. He is also President and CEO of Galileo Partners LLC and president of Blue and Gold Enterprises Inc., funds that invest in PIPE Transactions, Registered Direct Investments, Private Placements and open market equity transactions. He is also a member of the Board of Directors of Geovax, a NIH funded Company is seeking a therapeutic solution and cure for A.I.D.S. and has served as Chairman of the Board of Epinex Diagnostics since 2009. Epinex applies expert diagnostic technology in the quantitative analysis of glycated albumen, a superior marker for diabetic control.
              </p>
              
              <p>
                Mr. Antebi had a long tenure at Bear Stearns & Company in senior positions including institutional sales, trading of the firm's capital, investment banking, and syndicate. He started at Bear Stearns in 1972 as a limited partner and left the firm in 1991 as a shareholder and managing director.
              </p>
              
              <p>
                Mr. Antebi has been a member of the Board of Governors of Cedars Sinai Hospital in Los Angeles for over ten years. Cedars Sinai is one of the largest hospital/research centers in the world. He is also involved with Coach for Kids, the arm of Cedars Sinai that provides mobile medical units, caring for inner city children, living below the poverty line.
              </p>
              
              <p>
                He has worked extensively in collaboration with different academic and governmental organizations doing extensive research on the U.S. Economy.
              </p>
              
              <p>
                Mr. Antebi's academic credits include the Anderson School of Business at the University of California at Los Angeles, Loyola University School of Law, and a UCLA undergraduate degree in history.
              </p>
            </div>
          </div>
          
          <div className="glass-medium rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Roy Salter</h2>
            <h3 className="text-xl font-semibold text-blue-600 mb-6">Independent Board Member</h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mr. Salter is a Principal of Alpah Econ Group based in Los Angeles, where he directs the firm's overall practice and project management efforts.
              </p>
              
              <p>
                Prior to Alpah Econ Group, Mr. Salter was a Principal at FTI Consulting (who he sold his company "The Salter Group") and prior to The Salter Group, Mr. Salter was a Principal and Managing Director with the investment bank Houlihan Lokey Howard & Zukin, where he co-managed the firm's global industry group practices including, Entertainment & Media, Health Care, Telecom-Media-Technology and Diversified Industries between 1988 and 2003. Therein, Mr. Salter co directed the development and operating methods associated with the firm's industry groups. Further, Mr. Salter directly managed the valuation and transactional activities of the firm's entertainment and media industry practice, and led the development of methodologies and systems to evaluate entertainment and media properties.
              </p>
              
              <p>
                Mr. Salter frequently lectures on a variety of media and entertainment corporate finance subjects. Mr. Salter has taught MBA courses in the Anderson School of Business at UCLA on the subjects of business valuation and business-plan development. Mr. Salter has taught similar courses in the Harvard Business School, California Institute of Technology, the European Media Business School and other venues. In addition, Mr. Salter has authored a text on the subject of valuing media and entertainment industry investments published by Warren Publications.
              </p>
              
              <p>
                Mr. Salter is a member of the Board of Directors of California United Bank.
              </p>
              
              <p>
                Prior to Houlihan Lokey, Mr. Salter was a Vice President with Wells Fargo Capital Markets, Inc., where he provided mezzanine financing and M&A services to select bank clients. Previous to Wells Fargo Capital Markets, Mr. Salter was a Vice President in Well's Fargo's Commercial Banking Group focusing on providing loans to middle-market companies in Southern California. Mr. Salter attended California State University at Northridge where he earned a B.S. in Business Administration, with an emphasis in Business Economics and Investment Management, and Loyola Marymount University where he earned an M.B.A.
              </p>
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