# Smart Contracts Issues (GigID)

This file tracks the development tasks for the GigID smart contracts.

## ❌ Pending Issues

### Issue #1: Income Registry Development
**Status:** ❌ PENDING  
**Labels:** `smart-contracts`, `core`, `registry`  
**Priority:** HIGH

**Description:**  
Implement the core `IncomeRegistry` contract to record verified income events on-chain using Base.

**Acceptance Criteria:**
- [ ] Define income record structure (Amount, Source, Timestamp, Attestation ID).
- [ ] Implement `recordIncome` function with access control.
- [ ] Implement view functions for selective disclosure.
- [ ] Integrate with Ethereum Attestation Service (EAS).

---

### Issue #2: Credential NFT Implementation
**Status:** ❌ PENDING  
**Labels:** `smart-contracts`, `nft`, `identity`  
**Priority:** HIGH

**Description:**  
Develop the `CredentialNFT` contract to issue portable, verifiable income certificates to gig workers.

**Acceptance Criteria:**
- [ ] ERC-721 implementation for income credentials.
- [ ] Link NFT metadata to verified registry data.
- [ ] Implement minting logic restricted to verified attestations.
- [ ] Add Soulbound (non-transferable) options for specific credentials.

---

### Issue #3: Privacy-Preserving Proofs (ZKP)
**Status:** ❌ PENDING  
**Labels:** `smart-contracts`, `zkp`, `privacy`  
**Priority:** MEDIUM

**Description:**  
Research and implement basic zero-knowledge proof verification for income ranges.

**Acceptance Criteria:**
- [ ] Integrate zkSNARK verifier contract.
- [ ] Implement range-proof validation for credit checks.
- [ ] Ensure user privacy while providing high-confidence proofs.

---

### Issue #4: Deployment & Audit Prep
**Status:** ❌ PENDING  
**Labels:** `devops`, `security`  
**Priority:** HIGH

**Description:**  
Prepare the codebase for Base Mainnet deployment and security audit.

**Acceptance Criteria:**
- [ ] Write comprehensive unit tests (>95% coverage).
- [ ] Create automated deployment scripts.
- [ ] Document architecture and security assumptions.
