"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const faqs = [
    {
      id: "what-is-audit",
      question: "What is a royalty audit?",
      answer: "A royalty audit is typically an examination of the books and records of the licensee or distributor of intellectual property to determine if there were any payment miscalculations or underreporting of transactions related to the statements rendered and the royalties paid."
    },
    {
      id: "why-audit",
      question: "Why do I need to perform a royalty audit?",
      answer: "The primary purpose of a royalty audit is to verify the payments and amounts otherwise payable by an authorized distributor in connection with the transactions of intellectual property, such as music, movies, TV programs, books and video games. A royalty audit is performed on behalf of the owner of the intellectual property. There are a number of reasons why a royalty audit could determine that your royalties were underpaid, such as reporting errors, interpretation of contract terms, the implementation of workflows & software and the accounting of complex royalty terms. If no reporting and accounting errors are found, you have the comfort that you are being paid properly."
    },
    {
      id: "companies-we-audit",
      question: "For what kind of companies do you perform royalty audits?",
      answer: "The list of royalty examinations we have performed is unparalleled. Royalty Review Council performs examinations of digital service providers on behalf of record companies, music publishers, book publishers, game companies and film & television studios. We also review record companies and performing rights societies on behalf of recording artists, producers, publishers and licensors and music publishing companies on behalf of songwriters, publishers, and administrators. Selected projects in progress or completed are shown on our website."
    },
    {
      id: "independent-auditor",
      question: "Why do you call yourselves an \"independent\" royalty auditor?",
      answer: "Few royalty auditing firms are truly independent. The obvious concern in an audit is that a conflict of interest could be a reason to challenge the credibility of the review. Our company's strategy is to avoid situations where we are performing royalty audits on the same companies on whose behalf we audit. Since we avoid conflicts of interest, our objectivity provides comfort to our clients."
    },
    {
      id: "dsp-audit",
      question: "What do you mean by Digital Service Provider audit?",
      answer: "Royalty Review Council is the premier digital service provider auditing firm in the world. Since we started, Royalty Review Council has pioneered methods to review digital service providers, those companies delivering new media content such as music, films, television programs, audio books and games. We have reviewed download companies, streaming media companies, subscription services, aggregators, mobile carriers and other DSPs."
    },
    {
      id: "audit-cost",
      question: "How much does a royalty audit cost?",
      answer: "To determine the fees for any royalty audit, we first need to understand the scope of the project (for example, the number of years to review, the frequency of royalty statements and payments, how many products, etc.). With a limited amount of information concerning a potential audit we can prepare a fee estimate for you."
    }
  ]

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between"
              >
                <span className="text-gray-900 font-medium">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openFaq === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === faq.id && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}