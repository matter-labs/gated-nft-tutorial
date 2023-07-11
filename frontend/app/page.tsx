"use client";

import { useEffect,  useContext } from "react";
import Image from "next/image";
import Text from "./components/Text";
import WalletButton from "./components/WalletButton";
import Web3Context from "./context/Web3Context";
import zkSyncImage from "./assets/zkSync_logo.png";

export default function Home() {
  const web3Context = useContext(Web3Context);

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-52">
      <div className="mb-4">
        <WalletButton />
      </div>
      <div className="mb-12">
        <Image
          src={zkSyncImage}
          alt="zkSync Era Logo"
          priority
          width={550}
          height={250}
        />
      </div>
      <div className="mb-8">
      <Text>
        Explore this demonstrative dApp showcasing the key benefits of Paymasters
        on zkSync Era. Enter a message, and discover if you own an Infinity
        Stone NFT. Lucky holders enjoy gas-free transactions, covered by Stark
        Industries paymaster. Give it a try now!
      </Text>
      </div>
      {/* 
        // TODO: TO BE IMPLEMENTED
        // REQUIREMENTS:
        // 1. Import the Greeting component
        // 2. Pass the greeting to the Greeting component as a prop.
        // 3. Import the Input component
        // 4. Pass the greeterContractInstance, setGreetingMessage, provider, nfts to the Input component as props.
      */}
      <div className="mb-12"></div>
    </main>
  );
}
