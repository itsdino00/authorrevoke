import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

const SolanaAuthorityRevoker: React.FC = () => {
  return (
    <div>
      <h1>Solana Authority Revoker</h1>
      <WalletMultiButton />
    </div>
  );
}

export default SolanaAuthorityRevoker;
