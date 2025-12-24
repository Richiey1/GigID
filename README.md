# SmartX

A decentralized vault platform enabling users to create multiple ERC-4626 compliant vaults for automated yield generation on Base Sepolia testnet.

## Overview

SmartX is a comprehensive DeFi platform that allows users to:

- **Create Multiple Vaults**: Each user can create multiple personal ERC-4626 compliant vaults
- **Automated Yield Generation**: Deploy assets to DeFi protocols (Aave, Compound, Uniswap) automatically
- **ERC-4626 Standard**: Industry-standard tokenized vault interface for maximum interoperability
- **Share-Based Ownership**: Transferable ERC-20 vault shares representing ownership
- **Protocol Allocations**: Configure how assets are distributed across different DeFi protocols

## Project Structure

```
SmartX/
├── smartcontract/          # Solidity smart contracts
│   ├── contracts/          # Contract source files
│   ├── test/              # Contract tests
│   ├── scripts/           # Deployment scripts
│   └── README.md          # Smart contract documentation
│
└── frontend/              # Next.js frontend application
    ├── app/               # Next.js app router pages
    ├── components/        # React components
    ├── config/            # Wagmi and wallet configuration
    └── README.md          # Frontend documentation
```

## Tech Stack

### Smart Contracts
- **Language:** Solidity ^0.8.20
- **Framework:** Hardhat
- **Network:** Base Sepolia Testnet
- **Standards:** ERC-4626, ERC-20

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Web3:** wagmi, viem, Reown AppKit

## Quick Start

### Smart Contracts

```bash
cd smartcontract
npm install
npx hardhat compile
npx hardhat test
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Features

### VaultFactory Contract
- Multi-vault creation for registered users
- User registration system with username and bio
- Protocol address management (Aave, Compound, Uniswap, WETH)
- Admin system for protocol configuration
- Vault tracking and ownership management

### UserVault Contract (ERC-4626)
- ERC-4626 standard compliance for tokenized vaults
- ERC-20 share tokens representing vault ownership
- Deposit/Withdraw/Mint/Redeem operations
- Protocol integration for yield generation
- Allocation management across DeFi protocols
- Pause/unpause functionality

### Frontend Features
- Wallet connection (MetaMask, WalletConnect)
- Multi-vault dashboard
- Vault creation interface
- Deposit and withdrawal operations
- Protocol allocation management
- Share transfer functionality
- Transaction history

## Network Configuration

### Base Sepolia Testnet
- **Chain ID:** 84532
- **RPC URL:** `https://sepolia.base.org`
- **Explorer:** [Base Sepolia Explorer](https://sepolia.basescan.org/)
- **Faucet:** [Base Sepolia Faucet](https://www.coinbase.com/faucets/base-ethereum-goerli-faucet)

## Development

### Smart Contracts

See [smartcontract/README.md](./smartcontract/README.md) for detailed smart contract documentation.

**Key Commands:**
```bash
npm run compile      # Compile contracts
npm run test         # Run tests
npm run deploy       # Deploy to Base Sepolia
```

### Frontend

See [frontend/README.md](./frontend/README.md) for detailed frontend documentation.

**Key Commands:**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run linter
```

## Contributing

We welcome contributions! To get started:

1. Pick an issue from the respective `ISSUES.md` files:
   - [Smart Contract Issues](./smartcontract/ISSUES.md)
   - [Frontend Issues](./frontend/ISSUES.md)
2. Create a branch: `issue/<number>-short-description`
3. Implement your changes following the acceptance criteria
4. Write tests for your changes
5. Submit a PR with the issue number in the title/description

## Environment Variables

### Smart Contracts (.env)
```env
PRIVATE_KEY=your_private_key
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
ETHERSCAN_API_KEY=your_etherscan_api_key
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id
NEXT_PUBLIC_VAULT_FACTORY_ADDRESS=0x...
NEXT_PUBLIC_NETWORK=base-sepolia
```

**Note:** Never commit your private keys or `.env` files to version control!

## Security

- All contracts follow best practices
- Access control implemented for admin functions
- Reentrancy guards on critical functions
- Input validation on all user inputs
- Comprehensive test coverage

**Note:** Contracts should be audited before mainnet deployment.

## License

MIT License - see LICENSE file for details.

## Links

- **Repository:** [https://github.com/Richiey1/SmartX](https://github.com/Richiey1/SmartX)
- **Base Sepolia Explorer:** [https://sepolia.basescan.org/](https://sepolia.basescan.org/)
- **Documentation:** See individual README files in `smartcontract/` and `frontend/` directories

## Support

For questions or issues, please open an issue on GitHub or refer to the respective ISSUES.md files for planned features and known issues.
