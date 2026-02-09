// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title IncomeRegistry
 * @dev Records verified income events for gig workers on-chain.
 */
contract IncomeRegistry is Ownable {
    struct IncomeRecord {
        uint256 amount;
        string source; // e.g., "Uber", "Upwork"
        uint256 timestamp;
        bytes32 attestationId; // ID from EAS or other attestation services
        bool verified;
    }

    // Mapping from worker address to their income records
    mapping(address => IncomeRecord[]) private workerIncomes;

    // Authorized attestation services
    mapping(address => bool) public authorizedVerifiers;

    event IncomeRecorded(address indexed worker, uint256 amount, string source, bytes32 attestationId);
    event VerifierStatusChanged(address indexed verifier, bool authorized);

    modifier onlyAuthorized() {
        require(authorizedVerifiers[msg.sender] || msg.sender == owner(), "Not authorized");
        _;
    }

    constructor() Ownable(msg.sender) {
        authorizedVerifiers[msg.sender] = true;
    }

    function setVerifierStatus(address verifier, bool status) external onlyOwner {
        authorizedVerifiers[verifier] = status;
        emit VerifierStatusChanged(verifier, status);
    }

    /**
     * @dev Records a new income event for a worker.
     * @param worker The address of the gig worker.
     * @param amount The verified income amount.
     * @param source The source of the income.
     * @param attestationId The unique ID of the off-chain attestation.
     */
    function recordIncome(
        address worker,
        uint256 amount,
        string calldata source,
        bytes32 attestationId
    ) external onlyAuthorized {
        require(worker != address(0), "Invalid worker address");
        require(amount > 0, "Amount must be greater than zero");

        workerIncomes[worker].push(IncomeRecord({
            amount: amount,
            source: source,
            timestamp: block.timestamp,
            attestationId: attestationId,
            verified: true
        }));

        emit IncomeRecorded(worker, amount, source, attestationId);
    }

    /**
     * @dev Returns all income records for a specific worker.
     */
    function getWorkerIncomes(address worker) external view returns (IncomeRecord[] memory) {
        return workerIncomes[worker];
    }

    /**
     * @dev Returns the total number of income records for a worker.
     */
    function getIncomeCount(address worker) external view returns (uint256) {
        return workerIncomes[worker].length;
    }
}
