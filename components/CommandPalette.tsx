"use client"

import { useEffect, useState, useRef } from 'react'
import { Search, Command, ArrowRight, ExternalLink } from 'lucide-react'

export default function CommandPalette() {
  const [typedQuery, setTypedQuery] = useState('')
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isFirstRun, setIsFirstRun] = useState(true)
  const [showResponse, setShowResponse] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [responseProgress, setResponseProgress] = useState(0)
  
  const queries = [
    "Are my royalty statements accurate?",
    "How much are my streaming royalties worth?",
    "What's included in a catalog due diligence?",
    "How do I audit my digital service providers?",
    "What is Net Publisher Share?",
    "How can I reduce my royalty processing costs?",
    "Do I need a royalty audit?",
    "What's the value of my music catalog?",
    "How do I verify my Spotify payments?",
    "What mechanical licenses do I need?",
    "How do I track international royalties?",
    "What's the ROI of outsourcing royalty accounting?",
    "How do I prepare for a catalog sale?",
    "What are standard industry royalty rates?",
    "How do I dispute an audit finding?"
  ]
  
  const mockResponses: Record<string, any> = {
    "Are my royalty statements accurate?": {
      response: "Our audit specialists can verify your statements against source data. We typically find 15-25% underreporting in digital royalties.",
      code: `Common discrepancies found:
• Incorrect territory reporting
• Missing streaming tiers
• Underpaid sync licenses`,
      sources: ["RRC Audit Database", "Industry Benchmarks", "Digital Service Agreements"]
    },
    "How much are my streaming royalties worth?": {
      response: "Streaming royalty valuations depend on multiple factors including DSP mix, territory distribution, and growth trends. Our analysis provides precise Net Publisher Share calculations.",
      code: `Valuation factors:
• Historical earnings (3-5 years)
• Platform distribution
• Geographic performance`,
      sources: ["RRC Valuation Models", "Streaming Analytics", "Market Comparables"]
    },
    "What's included in a catalog due diligence?": {
      response: "Our comprehensive due diligence covers ownership verification, income analysis, and growth projections. We've advised on over $5B in catalog acquisitions.",
      code: `Due diligence scope:
• Chain of title review
• Income stream analysis
• Royalty audit findings`,
      sources: ["RRC Due Diligence Framework", "M&A Best Practices", "Copyright Database"]
    },
    "How do I audit my digital service providers?": {
      response: "DSP audits require specialized expertise in data analysis and platform agreements. We've conducted over 200 DSP examinations worldwide.",
      sources: ["RRC Audit Methodology", "DSP Compliance Standards", "Platform Agreements"]
    },
    "What is Net Publisher Share?": {
      response: "Net Publisher Share (NPS) is the actual amount received by publishers after all deductions. Critical for accurate catalog valuations.",
      sources: ["Music Publishing Guide", "RRC Valuation Standards", "Industry Definitions"]
    },
    "How can I reduce my royalty processing costs?": {
      response: "Outsourcing royalty accounting typically reduces costs by 40-60% while improving accuracy. Our scalable solutions eliminate software and staffing overhead.",
      sources: ["RRC Cost Analysis", "Outsourcing Benefits Study", "Client Case Studies"]
    },
    "Do I need a royalty audit?": {
      response: "If you haven't audited in 3+ years or have significant digital revenue, an audit is recommended. Most clients recover 10-30% in underpaid royalties.",
      sources: ["Audit ROI Statistics", "Industry Standards", "RRC Client Results"]
    },
    "What's the value of my music catalog?": {
      response: "Catalog values typically range from 10-20x annual NPS, depending on asset quality and growth potential. We provide detailed valuation analysis.",
      sources: ["Market Multiples", "RRC Valuation Database", "Recent Transactions"]
    },
    "How do I verify my Spotify payments?": {
      response: "Spotify verification requires analyzing stream counts, rate cards, and territory reporting. Our audits often uncover significant discrepancies.",
      sources: ["Spotify Audit Procedures", "Streaming Rate Analysis", "Territory Verification"]
    },
    "What mechanical licenses do I need?": {
      response: "Mechanical licensing requirements vary by usage type and territory. We provide comprehensive licensing analysis and compliance solutions.",
      sources: ["Mechanical Licensing Guide", "Territory Requirements", "MLC Resources"]
    },
    "How do I track international royalties?": {
      response: "International royalty tracking requires relationships with collection societies worldwide. Our global network ensures maximum collection.",
      sources: ["International Collection Network", "Society Agreements", "Territory Guides"]
    },
    "What's the ROI of outsourcing royalty accounting?": {
      response: "Clients typically see 200-300% ROI through cost savings and increased collections. Eliminates software, training, and staffing expenses.",
      sources: ["ROI Case Studies", "Cost-Benefit Analysis", "Client Testimonials"]
    },
    "How do I prepare for a catalog sale?": {
      response: "Catalog sale preparation includes income documentation, rights verification, and creating a comprehensive data room. We guide you through the entire process.",
      sources: ["M&A Preparation Guide", "Data Room Standards", "Transaction Best Practices"]
    },
    "What are standard industry royalty rates?": {
      response: "Rates vary by format and usage: streaming (10.5% mechanical), sync (negotiable), physical (9.1¢). We provide detailed rate analysis.",
      sources: ["Statutory Rate Schedule", "Industry Rate Cards", "RRC Rate Database"]
    },
    "How do I dispute an audit finding?": {
      response: "Audit disputes require careful documentation and negotiation. Our experts help evaluate findings and negotiate favorable resolutions.",
      sources: ["Dispute Resolution Guide", "Audit Response Strategies", "Settlement Precedents"]
    }
  }

  // Single animation controller
  useEffect(() => {
    let animationTimeout: NodeJS.Timeout | null = null
    let typingTimeout: NodeJS.Timeout | null = null
    let isAnimating = false

    const startTyping = () => {
      setIsTyping(true)
      let charIndex = 0
      const query = queries[currentQueryIndex]
      
      const typeNextChar = () => {
        if (charIndex < query.length) {
          setTypedQuery(query.substring(0, charIndex + 1))
          charIndex++
          typingTimeout = setTimeout(typeNextChar, 40)
        } else {
          // Typing complete
          setIsTyping(false)
          
          // Show response immediately (or expand first if needed)
          if (!isExpanded) {
            setIsExpanded(true)
            animationTimeout = setTimeout(() => {
              setShowResponse(true)
              
              // Animate response progress
              let progress = 0
              const progressInterval = setInterval(() => {
                progress += 5
                setResponseProgress(Math.min(progress, 100))
                if (progress >= 100) {
                  clearInterval(progressInterval)
                }
              }, 50)
            
            // Prepare for next query
            const displayTime = 5000
            
            animationTimeout = setTimeout(() => {
              clearInterval(progressInterval)
              
              // Reset for next query (but stay expanded)
              setShowResponse(false)
              setResponseProgress(0)
              setTypedQuery('')
              
              isAnimating = false
              if (isFirstRun) {
                setIsFirstRun(false)
              }
              // Move to next query
              setCurrentQueryIndex((prev) => (prev + 1) % queries.length)
            }, 3000)
            }, 400)
          } else {
            // Already expanded, show response immediately
            animationTimeout = setTimeout(() => {
              setShowResponse(true)
              
              // Animate response progress
              let progress = 0
              const progressInterval = setInterval(() => {
                progress += 5
                setResponseProgress(Math.min(progress, 100))
                if (progress >= 100) {
                  clearInterval(progressInterval)
                }
              }, 30)
              
              // Wait then move to next
              animationTimeout = setTimeout(() => {
                clearInterval(progressInterval)
                
                // Reset for next query (but stay expanded)
                setShowResponse(false)
                setResponseProgress(0)
                setTypedQuery('')
                
                isAnimating = false
                // Move to next query
                setCurrentQueryIndex((prev) => (prev + 1) % queries.length)
              }, 3000)
            }, 300)
          }
        }
      }
      
      typeNextChar()
    }

    const runAnimation = () => {
      if (isAnimating) return
      isAnimating = true

      // Reset states
      setShowResponse(false)
      setResponseProgress(0)
      setTypedQuery('')

      // Start animation sequence
      if (isFirstRun && currentQueryIndex === 0) {
        // First run: minimal delay for smooth start
        animationTimeout = setTimeout(() => {
          startTyping()
        }, 200)
      } else {
        // Subsequent runs: start typing after short delay
        animationTimeout = setTimeout(() => {
          startTyping()
        }, 300)
      }
    }

    runAnimation()

    // Cleanup
    return () => {
      if (animationTimeout) clearTimeout(animationTimeout)
      if (typingTimeout) clearTimeout(typingTimeout)
    }
  }, [currentQueryIndex])

  const currentResponse = mockResponses[queries[currentQueryIndex]]

  return (
    <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center">
      
      {/* Morphing container with fixed max height */}
      <div className={`
        liquid-glass-strong rounded-2xl shadow-2xl overflow-hidden 
        transition-all relative transform-gpu
        ${!isExpanded 
          ? 'w-[140px] h-[48px] duration-300 ease-out' 
          : 'w-full h-[400px] flex flex-col duration-500 ease-out scale-100'
        }
        ${isExpanded && isFirstRun ? 'animate-expand-bounce' : ''}
      `}>
        {/* Search Bar */}
        <div className={`
          transition-all duration-300 ease-out flex-shrink-0
          ${!isExpanded ? 'p-3' : 'p-6 border-b border-white/20'}
        `}>
          {/* Search input */}
          {isExpanded && (
            <div className="flex items-center gap-3 glass-light px-4 py-2.5 rounded-lg animate-fade-in">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                value={typedQuery}
                readOnly
                placeholder="Ask anything..."
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 font-medium"
              />
              {isTyping && (
                <div className="w-[2px] h-5 bg-blue-600 animate-pulse"></div>
              )}
            </div>
          )}
        </div>
        
        {/* AI Response - with scroll if needed */}
        {isExpanded && (
          <div className={`
            flex-1 overflow-hidden transition-all duration-500 ease-out
            ${showResponse && currentResponse
              ? 'opacity-100' 
              : 'opacity-0'
            }
          `}>
            {showResponse && currentResponse && (
              <div className="p-6">
                {/* Full response text with streaming effect */}
                <div className={`transition-opacity duration-500 ${showResponse ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-gray-800 leading-relaxed">
                    {currentResponse.response.slice(0, Math.floor(currentResponse.response.length * (responseProgress / 100)))}
                    {responseProgress < 100 && <span className="inline-block w-[2px] h-4 bg-blue-600 animate-pulse ml-1"></span>}
                  </p>
                  
                  {/* Code block - show after text is 50% complete */}
                  {currentResponse.code && responseProgress > 50 && (
                    <div className="glass-minimal rounded-lg p-4 overflow-x-auto" style={{
                      opacity: Math.min(1, (responseProgress - 50) / 50),
                      transform: `translateY(${Math.max(0, 10 - (responseProgress - 50) / 5)}px)`,
                      transition: 'all 0.3s ease-out'
                    }}>
                      <pre className="text-sm text-gray-800">
                        <code>{currentResponse.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Footer - always visible outside container */}
      {isExpanded && (
        <div className="mt-4 text-center text-sm text-gray-600 animate-fade-in">
          <span>Trusted by leading entertainment companies worldwide</span>
        </div>
      )}
    </div>
  )
}