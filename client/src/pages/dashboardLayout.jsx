/* eslint-disable no-unused-vars */
import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl} from "@solana/web3.js";
import { useMemo } from "react";
import '@solana/wallet-adapter-react-ui/styles.css';

const DashboardLayout = () => {
  const endpoint = clusterApiUrl("devnet");
  const wallets = useMemo(() => [], []);
  return (
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets}>
      <WalletModalProvider>
        <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 ml-[200px]">
          {/* Header */}
          <Header />

          <div className="px-6 py-2">
            {/* Outlet will render the child routes here */}
            <Outlet />
          </div>
        </div>
      </div>

      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
  );
};

export default DashboardLayout;
