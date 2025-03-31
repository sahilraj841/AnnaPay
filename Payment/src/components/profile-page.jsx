"use client"

import { useState } from "react"
import { ArrowLeft, MessageSquare, Edit2, Building, ArrowRight, ChevronRight, Share2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import ReferEarnModal from "./refer-earn-model"

export default function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex flex-col h-full bg-black text-gray-300">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-black">
        <div>4:32</div>
        <div className="flex items-center gap-2">
          
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full border border-gray-300"></div>
            <div className="h-3 w-3 rounded-full border border-gray-300"></div>
            <div className="h-3 w-3 rounded-full border border-gray-300"></div>
            <div className="h-3 w-3 rounded-full border border-gray-300"></div>
          </div>
          <div className="w-6 h-3 border border-gray-300 rounded-sm relative">
            <div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-gray-300 rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <Button variant="ghost" size="icon" className="text-gray-300">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-medium text-white">Profile</h1>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full bg-gray-900 border-gray-800 text-gray-400 flex items-center gap-1"
        >
          <MessageSquare className="h-4 w-4" />
          <span>support</span>
        </Button>
      </div>

      {/* Profile Info */}
      <div className="flex items-center px-6 py-4">
        <div className="relative">
          <Avatar className="h-16 w-16 border-2 border-gray-700">
            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Profile" />
            <AvatarFallback className="bg-gray-800 text-white">RK</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-800 px-1 rounded-sm">
            <div className="h-1 w-4 bg-[#4cd3c2] rounded-sm"></div>
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h2 className="text-xl font-medium text-white">Ranjeet Kumar</h2>
          <p className="text-sm text-gray-500">member since Dec, 2018</p>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full bg-gray-900">
          <Edit2 className="h-5 w-5 text-white" />
        </Button>
      </div>

      {/* Bank Accounts */}
      <div className="mx-4 my-2 p-4 bg-gray-900 rounded-lg">
        <div className="flex items-center gap-2">
          <Building className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-400">track all your bank accounts</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-lg font-medium text-white">Try ANNA PAY</span>
          <ArrowRight className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Credit Score */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-yellow-500 flex items-center justify-center text-xs font-bold">c</div>
          <span className="text-white">credit score</span>
          <span className="text-[#4cd3c2] ml-1">•</span>
          <span className="text-[#4cd3c2] uppercase text-sm">refresh available</span>
        </div>
        <ArrowRight className="h-5 w-5 text-white" />
      </div>

      {/* Lifetime Cashback */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold">₹</div>
          <span className="text-white">lifetime cashback</span>
        </div>
        <div className="flex items-center">
          <span className="text-white mr-2">₹10,567</span>
          <ArrowRight className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Bank Balance */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center">
            <Building className="h-4 w-4 text-white" />
          </div>
          <span className="text-white">bank balance</span>
        </div>
        <div className="flex items-center">
          <span className="text-white mr-2">check</span>
          <ArrowRight className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Rewards & Benefits */}
      <div className="px-4 py-5">
        <h3 className="text-gray-500 uppercase text-sm tracking-wider mb-4">Your Rewards & Benefits</h3>

        {/* Cashback Balance */}
        <div className="flex justify-between items-center py-3 border-b border-gray-800">
          <div>
            <p className="text-white">cashback balance</p>
            <p className="text-gray-500">₹1</p>
          </div>
          <ChevronRight className="h-5 w-5 text-white" />
        </div>

        {/* Coins */}
        <div className="flex justify-between items-center py-3 border-b border-gray-800">
          <div>
            <p className="text-white">coins</p>
            <p className="text-gray-500">24,14,207</p>
          </div>
          <ChevronRight className="h-5 w-5 text-white" />
        </div>

        {/* Refer and Earn */}
        <div
          className="flex justify-between items-center py-3 border-b border-gray-800 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div>
            <p className="text-white">win upto Rs 1000</p>
            <p className="text-gray-500">refer and earn</p>
          </div>
          <ChevronRight className="h-5 w-5 text-white" />
        </div>

        {/* Refer and Earn Button */}
        <Button
          className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium py-5 flex items-center justify-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <Share2 className="h-5 w-5" />
          Refer and Earn
        </Button>
      </div>

      {/* Transactions & Support */}
      <div className="px-4 py-5">
        <h3 className="text-gray-500 uppercase text-sm tracking-wider mb-4">Transactions & Support</h3>

        {/* All Transactions */}
        <div className="flex justify-between items-center py-3 border-b border-gray-800">
          <p className="text-white">all transactions</p>
          <ChevronRight className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-auto p-4 flex justify-center">
        <div className="w-1/3 h-1 bg-gray-700 rounded-full"></div>
      </div>

      {/* Refer & Earn Modal */}
      <ReferEarnModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

