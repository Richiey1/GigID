"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export default function CreateVaultPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    asset: 'USDC',
    depositAmount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    setIsLoading(true);
    // Simulate transaction
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8">
        <button 
          onClick={() => router.back()} 
          className="text-neutral-muted hover:text-primary text-sm mb-4 flex items-center gap-1"
        >
          ← Back to Dashboard
        </button>
        <h1 className="text-3xl font-bold text-neutral-dark dark:text-neutral-text">Create New Vault</h1>
        <p className="text-neutral-muted mt-1">Deploy a new ERC-4626 compliant strategy vault.</p>
      </div>

      <Card>
        <div className="space-y-6">
          {/* Step 1: Basic Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-dark dark:text-neutral-text">Vault Details</h3>
            <Input
              label="Vault Name"
              name="name"
              placeholder="e.g. Stable Yield Strategy"
              value={formData.name}
              onChange={handleChange}
              helperText="Give your vault a descriptive name."
            />
          </div>

          {/* Step 2: Asset Selection */}
          <div>
            <label className="block text-sm font-medium text-neutral-dark dark:text-neutral-text mb-1.5">
              Base Asset
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['USDC', 'WETH', 'DAI'].map((asset) => (
                <div
                  key={asset}
                  onClick={() => setFormData({ ...formData, asset })}
                  className={`
                    cursor-pointer rounded-lg border p-4 text-center transition-all
                    ${formData.asset === asset 
                      ? 'border-primary bg-primary/5 ring-1 ring-primary' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  <p className="font-bold">{asset}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Initial Deposit */}
          <div>
            <Input
              label="Initial Deposit (Optional)"
              name="depositAmount"
              type="number"
              placeholder="0.00"
              value={formData.depositAmount}
              onChange={handleChange}
              helperText={`Amount of ${formData.asset} to deposit immediately.`}
            />
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3">
            <Button variant="ghost" onClick={() => router.back()}>Cancel</Button>
            <Button onClick={handleCreate} isLoading={isLoading}>
              Deploy Vault
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
