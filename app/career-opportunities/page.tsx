import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'

export default function CareerOpportunitiesPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Career Opportunities" 
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Career Opportunities', href: '/career-opportunities' }
        ]}
      />
      
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="glass-light rounded-2xl p-8 mb-12">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Royalty Review Council is always looking for the best and the brightest professionals. We offer a unique opportunity to join a talented team delivering world-class financial services to the entertainment industry. If you consider yourself a royalty accounting specialist, software engineer or IT consulting expert, we encourage you to introduce yourself. We're a fast-growing, financially-stable company that provides competitive compensation and substantial growth potential.
              </p>
              
              <p>
                Excellent communication skills, both verbal and written, are required for all candidates.
              </p>
              
              <p>
                We invite you to submit your resume in Word, Adobe Acrobat, HTML or Text.
              </p>
              
              <p>
                No phone calls please.<br />
                Southern California residents preferred. No relocation offered.<br />
                ABSOLUTELY NO AGENCIES, CONTRACTORS OR OFFSHORE VENDORS PLEASE!
              </p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Openings</h2>
          
          <div className="glass-medium rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">JOB#9001A: Manager, Digital Royalty Audits</h3>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Royalty Review Council is a leading digital royalty examination firm who pioneered the procedures to conduct audits of digital services. We are currently seeking to fill the role for a Manager, Digital Royalty Audits. In this role, you will be responsible for various aspects of the audit process, as well as preparing detailed audit reports and assisting clients for settlement negotiations.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              This position affords the right candidate exposure to all aspects of royalty reporting and digital service music auditing. The right candidate will have a passion for music and must be detailed oriented with strong written and analytical skills.
            </p>
            
            <h4 className="text-xl font-bold text-gray-900 mb-3">Job Functions Include:</h4>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Overall management and supervision of the audit fieldwork process from beginning to end.</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Evaluate contractual payment terms.</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Work with a tech team to request appropriate data to be reviewed, stored, and analyzed. Write a scope of work to be conducted to analyze a high volume of data to assess contractual reporting compliance.</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Perform IT systems and data assessment of relevant systems and interfaces in the examinee's value chain pertaining to music royalty payments paid or payable to a licensor for permanent and non-permanent downloads</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Review and provide feedback to analysis and draft audit claim schedules and reports.</span>
              </li>
            </ul>
            
            <h4 className="text-xl font-bold text-gray-900 mb-3">Job Requirements:</h4>
            
            <p className="text-gray-900 font-semibold mt-4 mb-2">Skills/Abilities:</p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Must be comfortable with working in an adversarial capacity.</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Strong quantitative, analytical and organizational skills with attention to detail.</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Must be able to think objectively and present multiple sides of an issue.</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Must be able to work independently.</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Able to multi-task, prioritize work and meet deadlines.</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Excellent verbal and written communication skills.</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Must be comfortable taking argumentative positions.</span>
              </li>
            </ul>
            
            <p className="text-gray-900 font-semibold mb-2">Experience:</p>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>At least 2 years of experience in an audit role. Experience with music royalty audits a plus. CPA is a plus.</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Exposure to recording contracts or participation agreements.</span>
              </li>
            </ul>
            
            <p className="text-gray-900 font-semibold mb-2">Education:</p>
            <ul className="space-y-2">
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Four-year college degree in business, accounting, or equivalent work experience.</span>
              </li>
            </ul>
          </div>
          
          <div className="glass-light rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">JOB#6011: Royalty Accountant</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Royalty Review Council has an immediate opening for a Royalty Accountant, an ideal opportunity for an experienced royalty accountant from the entertainment industry, particularly with experience with Counterpoint Systems software (Record Maestro, Music Maestro, Maestro 400, or iMaestro).
            </p>
            
            <h4 className="text-xl font-bold text-gray-900 mb-3">Required Experience</h4>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>2+ years of record label or music publishing administration experience in preparing royalty statements REQUIRED</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Solid math skills and the ability to think analytically</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Highly proficient in Microsoft Excel (pivot tables, lookups, data validation, formulas)</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Experience working with Counterpoint Systems Record Maestro and/or Music Maestro a plus</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Accounting, Finance or Information Systems degree preferred</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Ability to work within deadlines, exercise good judgment, and maintain client confidentiality</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Strong written and oral communication skills</span>
              </li>
            </ul>
            
            <h4 className="text-xl font-bold text-gray-900 mb-3">Responsibilities</h4>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Set up royalty rate terms and label copy information in royalty system</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Enter quarterly sales, costs, reserves and related data for clients in royalty system</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Review royalty statements for accuracy</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Research unknown song publisher shares</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Other music related projects</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="mr-2">•</span>
                <span>Meet established guidelines and timelines with high quality results</span>
              </li>
            </ul>
            
            <p className="text-gray-600 italic">
              Disclaimer: Job descriptions only provide an overview of job responsibilities that are subject to change.
            </p>
          </div>
          
          <div className="text-center">
            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
              Apply Now!
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