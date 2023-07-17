"use client";
import { PencilIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import * as ethers from "ethers";
import { InputProps } from "../types/types";

export default function Input({
  greeterInstance,
  setGreetingMessage,
  provider,
  nfts,
}: InputProps) {
  // State variables
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [gas, setGas] = useState("");

  useEffect(() => {
    if (message !== "") {
      getEstimate();
    }
  }, [message]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  async function getEstimate() {
    // TODO: TO BE IMPLEMENTED
    // REQUIREMENTS:
    // 1. Fetch the current gas price from the provider and store in a state variable
    // 2. Estimate the amount of gas required for the `setGreeting` transaction and store in a state variable
    // 3. Calculate the cost of the transaction and store in a state variable
  }

  return (
    <div>
      <div className="mt-2 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <PencilIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            id="greeter-message"
            className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter Greeter message"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={openModal}
        >
          Change message
        </button>
      </div>
      {/* // TODO: TO BE IMPLEMENTED
        // REQUIREMENTS:
        // 1. Import the Modal component
        // 2. Render the `Modal` component when the `isOpen` state is true.
        // 3. Pass the closeModal function to the Modal component as a prop.
        // 4. Pass the greeterInstance, setGreetingMessage, message, cost, price, gas, and nfts to the Modal component as props. 
        */}
    </div>
  );
}
