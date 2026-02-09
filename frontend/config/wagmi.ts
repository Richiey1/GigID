import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { base, baseSepolia } from '@reown/appkit/networks'

// Get projectId from environment variables
export const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || ''

export const networks = [base, baseSepolia]

// Set up Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
})

// Initialize AppKit
createAppKit({
  adapters: [wagmiAdapter],
  networks: [base, baseSepolia],
  projectId,
  metadata: {
    name: 'GigID',
    description: 'Gig Worker Income Verification',
    url: 'https://gigid.io', // Placeholder
    icons: ['https://avatars.githubusercontent.com/u/179229932'] // Placeholder
  },
  features: {
    analytics: true
  },
  themeMode: 'dark'
})
