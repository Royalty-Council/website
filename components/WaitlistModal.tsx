"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

interface WaitlistModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  platform: "mac" | "windows"
}

export default function WaitlistModal({ open, onOpenChange, platform }: WaitlistModalProps) {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    if (!consent) {
      setError("Please agree to receive updates")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          platform,
          consent: consent,
          timestamp: new Date().toISOString(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist")
      }

      setSuccess(true)
      
      // Close modal after showing success message
      setTimeout(() => {
        onOpenChange(false)
        // Reset form state
        setEmail("")
        setConsent(false)
        setSuccess(false)
        setError("")
      }, 2000)

    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a Consultation</DialogTitle>
          <DialogDescription>
            {platform === "mac" 
              ? "Schedule a consultation with our royalty experts." 
              : "Learn more about our comprehensive services."}
          </DialogDescription>
        </DialogHeader>
        
        {success ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg font-medium text-gray-900">Thank you for your interest!</p>
            <p className="text-sm text-gray-600 mt-2">We'll contact you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="w-full"
              />
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked as boolean)}
                disabled={loading}
              />
              <label 
                htmlFor="consent" 
                className="text-sm text-gray-600 leading-tight cursor-pointer"
              >
                I agree to receive information about RRC's services and understand I can unsubscribe anytime. 
                View our <Link href="/privacy" className="underline">Privacy Policy</Link>.
              </label>
            </div>
            
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary-realistic disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}