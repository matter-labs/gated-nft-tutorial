import { Contract, utils } from "zksync-web3";
import { PAYMASTER_CONTRACT_ADDRESS } from "../constants/consts";
import * as ethers from "ethers";

type PaymasterProps = {
    greeterInstance: Contract;
    message: string;
    price: string;
  };

const usePaymaster = async ({ greeterInstance, message, price }: PaymasterProps) => {
  // TODO: TO BE IMPLEMENTED
  // REQUIREMENTS:
  // 1. Prepare the 'paramsForFeeEstimation' by calling 'getPaymasterParams' function from zksync-web3 utils with the 'PAYMASTER_CONTRACT_ADDRESS' and an object containing 'type' set to 'General' and 'innerInput' as a new instance of Uint8Array.
  // 2. Estimate the gas limit for the 'setGreeting' function call on 'greeterInstance' with 'message' and'customData' object as arguments.
  // 3. Define 'paymasterParams' with the same values as 'paramsForFeeEstimation'.
  // 4. Return an object containing 'maxFeePerGas', 'maxPriorityFeePerGas', 'gasLimit', and 'customData' with 'gasPerPubdata' and 'paymasterParams'.
  };

  export default usePaymaster;