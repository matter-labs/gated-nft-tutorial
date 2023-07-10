"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Text from "./components/Text";
import useWeb3 from "./hooks/useWeb3";
import { Contract } from "zksync-web3";
import zkSyncImage from "./assets/zkSync_logo.png";
import {
  GREETER_ADDRESS,
  GREETER_CONTRACT_ABI,
  NFT_CONTRACT_ADDRESS,
  NFT_CONTRACT_ABI,
} from "./constants/consts";
import { PowerStoneNft } from "./types/powerStoneNft";

export default function Home() {
  const { provider, signer, setProvider, setSigner } = useWeb3();
  // State variables

  // TODO: TO BE IMPLEMENTED
  // REQUIREMENTS:
  // 1. Create a state variable to manage the state of the greeter contract instance.
  // 2. Create a state variable to manage the state of the greeting message.
  // 3. Create a state variable to manage the state of the owned NFTs.

  // Handler for setting up contracts
  useEffect(() => {
    const initContracts = async () => {
        // TODO: TO BE IMPLEMENTED
        // REQUIREMENTS:
        // 1. Create a new contract instance for the Greeter contract using the GREETER_ADDRESS and GREETER_CONTRACT_ABI, and set this instance in state.
        // 3. Call the greet() function from the greeterContract and set the result in state.
        // 4. Create a new contract instance for the Infinity Stone NFT contract using the NFT_CONTRACT_ADDRESS and NFT_CONTRACT_ABI.
        // 5. Check the NFT balance of the signer's address. 
        // 6. If the balance is greater than zero, fetch the NFT metadata using the tokenURI
        // 7. Set the ownedStones array in state.
        // 8. If the balance is not greater than zero, set an empty array in state.
    };

    initContracts();
  }, [provider, signer]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-52">
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
