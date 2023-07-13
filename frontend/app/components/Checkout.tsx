import Image from "next/image";
import Text from "./Text";
import { Contract } from "zksync-web3";
import zkSyncImage from "../assets/zkSync_logo.png";
import { PowerStoneNft } from "../types/powerStoneNft";

type CheckoutProps = {
  greeterInstance: Contract | null;
  message: string;
  setGreetingMessage: React.Dispatch<React.SetStateAction<string>>;
  cost: string;
  price: string;
  gas: string;
  nfts: PowerStoneNft[];
};

type GreeterData = {
  message: string;
};

export default function Checkout({
  greeterInstance,
  message,
  setGreetingMessage,
  cost,
  price,
  gas,
  nfts,
}: CheckoutProps) {
  
  const hasNFT = nfts.length > 0;
  const updateGreeting = async ({ message }: GreeterData) => {
    // TODO: TO BE IMPLEMENTED
    // REQUIREMENTS:
    // 1. If the user owns an NFT, fetch paymaster params by importing the `usePaymaster` hook, and call the 'setGreeting' function on 'greeterInstance' with 'message' and 'params'.
    // 2. If not, user does get to use the paymaster, so call the 'setGreeting' function on 'greeterInstance' with only the 'message' parameter.
    // 3. Wait for the transaction to be confirmed.
    // 4. Fetch the updated greeting message, and update the 'greeting' state. 
    // 5. If any error occurs during the process, the function should catch the error and log it to the console with a suitable message.
  };

  return (
    <>
      <main className="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden mt-8">
        <section className="hidden w-full max-w-md flex-col bg-gray-50 lg:flex justify-between">
          <h2 className="text-black text-center text-2xl mb-2 mt-4">
            Transaction Details
          </h2>
          <div className="text-black text-center mb-2">
            <Text>
              The details of your transaction are displayed below for your
              convenience.
            </Text>
          </div>
          <div className="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">
            <dl className="mt-4 space-y-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Transaction: </dt>
                <dd className="text-gray-900">setGreeting</dd>
              </div>
              <div className="flex justify-between">
                <dt>Transaction Fee: </dt>
                <dd className="text-gray-900">{gas} ETH</dd>
              </div>
              <div className="flex justify-between">
                <dt>Gas Price: </dt>
                <dd className="text-gray-900">{price} ETH</dd>
              </div>
              {!hasNFT && (
                <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                  <dt className="text-base">
                    Total Cost:
                  </dt>
                  <dd className="text-base">{cost} ETH</dd>
                </div>
              )}
              {hasNFT && (
                <>
                  {/* Just choose the first stone if the wallet has more than one */}
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                    <dt>
                      Estimated Cost:
                    </dt>
                    <dd className="text-base">{cost} ETH</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="flex items-center">
                      NFT Discount
                      <span
                        className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-white h-5"
                        style={{
                          backgroundColor: nfts[0].attributes.find(x => x.trait_type === "Color")?.value,
                          // Do not display white font on a yellow background, it should be black for readability
                          color: nfts[0].attributes.find(x => x.trait_type === "Color")?.value === "Yellow" ? "black" : "white",
                        }}>
                        {nfts[0].name}
                      </span>
                    </dt>
                    <dd className="flex items-center text-emerald-500 font-bold">-100%</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                    <dt className="text-base">
                      Total Cost:
                    </dt>
                    <dd className="text-base">FREE</dd>
                  </div>
                </>
              )}
            </dl>
            <button
              type="submit"
              onClick={() => updateGreeting({ message })}
              className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Change Greeting for {hasNFT ? "FREE" : cost + " ETH"}
            </button>
          </div>
        </section>

        {/* NFT display */}
        <section className="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0 bg-white justify-between">
          <div className="mx-auto max-w-lg mt-12">
            {hasNFT ? (
              <div className="flex flex-col items-center">
                <Text>
                  Congratulations! You own an Infinity Stone NFT. Enjoy gas-free
                  transactions, courtesy of Stark Industries Paymaster.
                </Text>
                <img
                  className="h-36"
                  src={nfts[0].image}
                  alt="Power Stone Image" />
              </div>
            ) : (
              <Text>
                Unfortunately, you don't own an Infinity Stone NFT. A small gas
                fee will be charged to update the greeting.
              </Text>
            )}
            <div className="mb-8 mt-8">
              <Image
                src={zkSyncImage}
                alt="zkSync Era Logo"
                priority
                width={550}
                height={250}
              />
            </div>
            <Text>
              If you want to learn more about Paymasters on zkSync Era, check
              out our docs for more information{" "}
              <a
                className="text-blue-500"
                href="https://era.zksync.io/docs/reference/concepts/aa.html#paymasters"
              >
                here
              </a>{" "}
              or check out the paymaster-examples{" "}
              <a
                className="text-blue-500"
                href="https://github.com/matter-labs/paymaster-examples"
              >
                repo
              </a>{" "}
              for more ideas!
            </Text>
          </div>
        </section>
      </main>
    </>
  );
}
