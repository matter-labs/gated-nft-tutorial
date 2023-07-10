'use client'

import { useState, useEffect } from "react";
import { Web3Provider, Signer } from "zksync-web3";

type Web3Data = {
  provider: Web3Provider | null;
  signer: Signer | null;
  setProvider: React.Dispatch<React.SetStateAction<Web3Provider | null>>;
  setSigner: React.Dispatch<React.SetStateAction<Signer | null>>;
};

const useWeb3 = (): Web3Data => {
  // TODO: use wallet connect 
  // Establish requirements for tutorial
  const [provider, setProvider] = useState<Web3Provider | null>(null);
  const [signer, setSigner] = useState<Signer | null>(null);

  useEffect(() => {
    const setupWeb3 = async () => {
      if ((window as any).ethereum) {
        const provider = new Web3Provider((window as any).ethereum);
        setProvider(provider);

        await provider.send("eth_requestAccounts", []);

        const networkVersion = await provider
          .getNetwork()
          .then((network) => network.chainId);
        if (networkVersion !== 280) {
          alert("Please switch to the zkSync Testnet to use this application.");
          return;
        }

        const signerInstance = provider.getSigner();
        setSigner(signerInstance);
      }
    };

    setupWeb3();
  }, []);

  return {
    provider,
    signer,
    setProvider,
    setSigner,
  };
};

export default useWeb3;
