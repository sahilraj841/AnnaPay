"use client"

import { X, Copy, Share2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ReferEarnModel({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false)
  const referralCode = "RANJEET2025"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-xl w-full max-w-md overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h2 className="text-xl font-medium text-white">Refer & Earn</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg p-6 text-center mb-6">
            <h3 className="text-black text-xl font-bold mb-2">Win up to ₹1000</h3>
            <p className="text-black">For every friend who joins ANNA PAY</p>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-400 mb-2">Your referral code</p>
            <div className="flex items-center justify-center gap-2 bg-gray-800 rounded-lg p-3 mb-4">
              <span className="text-white text-xl font-mono">{referralCode}</span>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={copyToClipboard}>
                <Copy className="h-5 w-5" />
              </Button>
            </div>
            {copied && <p className="text-green-500 text-sm">Copied to clipboard!</p>}
          </div>

          <div className="space-y-4">
            <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium py-5 flex items-center justify-center gap-2">
              <Share2 className="h-5 w-5" />
              Share Referral Code
            </Button>

            <div className="text-center text-gray-400 text-sm">
              <p>Your friend gets ₹500 when they join</p>
              <p>You get ₹1000 when they make their first payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

