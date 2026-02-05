# GigID: Gig Worker Income Verification

On-chain income credentials for gig workers to access credit, loans, and financial services.

Millions of gig workers earn legitimate income but are denied loans, rentals, and financial services because their income cannot be verified through traditional systems. **GigID** creates verifiable, cryptographic proof of income using blockchain attestations on the Base network.

## 🚀 Problem

Gig workers face systemic financial exclusion due to:
- **No W-2 or traditional pay stubs**: Traditional institutions rely on outdated documentation.
- **Unverifiable Income**: Banks and lenders cannot easily verify gig platform earnings.
- **Fraud Risk**: Manual statements are easily falsified, leading to high rejection rates.
- **Incomplete Scoring**: Credit scoring systems often ignore stable gig income streams.

## 💡 Solution

**GigID** provides on-chain income attestations and verifiable credentials, allowing gig workers to prove earnings to lenders without revealing sensitive data.

## ✨ Core Features

### 🧾 On-Chain Income Attestations
- Record verified income events on-chain.
- Immutable and tamper-resistant ledger.
- Timestamped payment records for historical consistency.

### 🎟 Income Credential NFTs
- Mint verifiable income proof tokens.
- Portable across platforms and lenders.
- User-controlled financial identity.

### 🔐 Privacy-Preserving Proofs
- Zero-knowledge proofs for income ranges.
- Prove income without revealing exact amounts.
- Selective disclosure for lenders to maintain privacy.

### 🏦 Lender Verification Portal
- Dashboard for lenders to verify credentials.
- API for fintech and DeFi integration.
- Attestation registry lookup for instant verification.

## 🧱 Architecture Overview

- **Income Registry Contract**: Records verified earnings on-chain.
- **Credential NFT Contract**: Issues income certificates as portable tokens.
- **Attestation Service**: Verifies off-chain income sources before on-chain recording.
- **Verification Dashboard**: Interface for lenders and financial institutions.

## 🛠 Tech Stack

- **Smart Contracts**: Solidity
- **Blockchain**: Base
- **Development**: Hardhat
- **Frontend**: Next.js + React
- **Identity**: EAS (Ethereum Attestation Service) / Custom Attestations
- **ZK Layer**: zkSNARKs (Optional future module)

## 🎯 Vision

To create a global, decentralized financial identity layer for gig workers, enabling fair access to loans, housing, and financial products.

## 🧩 Future Extensions

- Credit scoring smart contracts.
- DeFi lending protocol integrations.
- Cross-platform gig API connectors.
- Decentralized identity (DID) integration.

## 📁 Project Structure

```
SmartX/ (To be renamed to GigID)
├── smartcontract/          # Solidity smart contracts (Base)
│   ├── contracts/          # Income Registry & NFT contracts
│   ├── test/               # Quality assurance & security tests
│   ├── scripts/            # Deployment & initialization scripts
│   └── README.md           # Smart contract documentation
│
└── frontend/               # Next.js frontend application
    ├── app/                # App router pages & layouts
    ├── components/         # Reusable React components
    ├── config/             # Wagmi & wallet configuration
    └── README.md           # Frontend documentation
```
