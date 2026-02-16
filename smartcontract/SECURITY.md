# GigID Security & Architecture Assumptions

## 🏗️ Architecture Overview

GigID is built to provide verifiable income credentials for gig workers. The system consists of three main components:

1.  **IncomeRegistry.sol**: A central registry where authorized verifiers (e.g., gig platforms or trusted third-party verifiers) record income events.
2.  **CredentialNFT.sol**: A Soulbound (non-transferable) NFT contract that issues periodic income certificates based on verified registry data.
3.  **Attestation Service (Off-chain)**: A service that validates income from gig platforms (Uber, Upwork, etc.) and signs the data for the `IncomeRegistry`.

## 🔐 Security Assumptions

### 1. Trusted Verifiers
The security of the income data relies on the integrity of the addresses authorized as verifiers in the `IncomeRegistry`. If a verifier's private key is compromised, they could record fraudulent income events.

### 2. Soulbound Credentials
`CredentialNFT` is designed to be non-transferable to ensure that a worker's financial reputation cannot be sold or transferred to another address. This is enforced at the contract level by overriding the `_update` function (OpenZeppelin ERC721).

### 3. Oracle/API Integrity
When integrating with off-chain gig platforms, we assume that the API data provided by these platforms is accurate at the time of attestation.

### 4. Base Network Security
We inherit the security and finality properties of the Base network (Layer 2).

## 🛡️ Mitigation Strategies

- **Access Control**: Use OpenZeppelin's `Ownable` or `AccessControl` for managing verifier whitelists.
- **Circuit Breakers**: Implementation of a pause mechanism in case of detected anomalies.
- **Auditable Events**: Every record and minting event is logged on-chain for transparent auditing.
