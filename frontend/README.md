# GigID — Frontend

A modern Next.js frontend for GigID - a decentralized platform providing on-chain income credentials for gig workers. Built with TypeScript, Tailwind CSS, and wagmi for the Base network.

## Overview

GigID provides a user-friendly interface for gig workers to manage their financial identity. Workers can verify their income, mint credential NFTs, and share privacy-preserving proofs with lenders and service providers.

### Worker Dashboard
- **Verify Income**: Connect gig platform sources to generate attestations.
- **Manage Credentials**: View and share minted Income NFTs.
- **Privacy Controls**: Generate range-proofs without revealing exact earnings.

### Lender Portal
- **Verify Credentials**: Instant on-chain verification of worker attestations.
- **Risk Assessment**: Access verified income data for fair credit scoring.
- **Integration API**: Connect GigID proofs to existing financial workflows.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Web3:** wagmi, viem, Reown AppKit
- **Identity:** EAS Integration / DID

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
gigid-frontend/
├── app/                # App router pages (Dashboard, Portal, Settings)
├── components/         # UI components (AttestationCards, Profile, Charts)
├── config/             # Wagmi and Web3 configuration
├── lib/                # Utilities and API connectors
└── hooks/              # Custom hooks for contract interaction
```

## Contributing

We welcome contributions! To get started:

1. **Pick an issue** from [`TODO.md`](./TODO.md)
2. **Create a branch** using the issue number: `issue/<number>-short-description`
3. **Implement your changes** following the issue's acceptance criteria
4. **Submit a PR** with the issue number in the title/description

## License

MIT License.
