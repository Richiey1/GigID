"use client";

import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useUserVault } from '@/hooks/useUserVault';
import { isAddress } from 'viem';

interface ShareTransferProps {
  vaultAddress: `0x${string}`;
}

export const ShareTransfer: React.FC<ShareTransferProps> = ({ vaultAddress }) => {
  const { address } = useAccount();
  const { userShares, transferShares, isPending } = useUserVault(vaultAddress, address);
  
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleTransfer = async () => {
    setError(null);
    
    if (!isAddress(recipient)) {
      setError('Invalid recipient address');
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      setError('Amount must be greater than zero');
      return;
    }

    if (parseFloat(amount) > parseFloat(userShares)) {
      setError('Insufficient share balance');
      return;
    }

    try {
      await transferShares(recipient as `0x${string}`, amount);
      setRecipient('');
      setAmount('');
    } catch (err: any) {
      setError(err.message || 'Transfer failed');
    }
  };

  return (
    <Card>
      <h3 className="text-lg font-bold mb-6">Transfer Shares</h3>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-neutral-muted mb-1">Your Share Balance</p>
          <p className="text-xl font-bold">{userShares} vUSDC</p>
        </div>

        <Input
          label="Recipient Address"
          placeholder="0x..."
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />

        <Input
          label="Amount to Transfer"
          placeholder="0.00"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          helperText="Transfer your vault ownership shares."
        />

        {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

        <Button 
          className="w-full" 
          onClick={handleTransfer} 
          isLoading={isPending}
          disabled={!recipient || !amount}
        >
          Transfer Shares
        </Button>
      </div>
    </Card>
  );
};
