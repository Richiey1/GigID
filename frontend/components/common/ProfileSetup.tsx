'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { CheckCircle } from 'lucide-react'

export function ProfileSetup() {
  const [name, setName] = useState('')
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [isSaved, setIsSaved] = useState(false)

  const platforms = ['Uber', 'Upwork', 'DoorDash', 'Fiverr', 'Instacart']

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform) 
        : [...prev, platform]
    )
  }

  const handleSave = () => {
    // Logic to save profile on-chain or locally
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  return (
    <Card className="p-8 max-w-xl mx-auto bg-white/5 border-white/10 rounded-3xl">
      <h2 className="text-2xl font-bold mb-6">Complete Your Profile</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Display Name</label>
          <Input 
            placeholder="John Doe" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black/50 border-white/10 text-white"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Gig Platforms You Use</label>
          <div className="flex flex-wrap gap-3">
            {platforms.map(platform => (
              <button
                key={platform}
                onClick={() => togglePlatform(platform)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                  selectedPlatforms.includes(platform)
                    ? 'bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        <Button 
          variant="primary" 
          size="lg" 
          className="w-full h-14 text-lg rounded-2xl flex items-center justify-center gap-2"
          onClick={handleSave}
          disabled={!name || selectedPlatforms.length === 0}
        >
          {isSaved ? (
            <>
              <CheckCircle className="w-5 h-5" /> Saved Successfully
            </>
          ) : (
            'Save Profile'
          )}
        </Button>
      </div>
    </Card>
  )
}
