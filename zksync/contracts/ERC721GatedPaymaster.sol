// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "@matterlabs/zksync-contracts/l2/system-contracts/Constants.sol";

import {IPaymaster, ExecutionResult, PAYMASTER_VALIDATION_SUCCESS_MAGIC} from "@matterlabs/zksync-contracts/l2/system-contracts/interfaces/IPaymaster.sol";
import {IPaymasterFlow} from "@matterlabs/zksync-contracts/l2/system-contracts/interfaces/IPaymasterFlow.sol";
import {TransactionHelper, Transaction} from "@matterlabs/zksync-contracts/l2/system-contracts/libraries/TransactionHelper.sol";

/// @author Matter Labs
/// @notice This smart contract pays the gas fees on behalf of users that are the owner of a specific NFT asset
contract ERC721GatedPaymaster is IPaymaster, Ownable {
    IERC721 private immutable nft_asset;

    modifier onlyBootloader() {
        require(
            msg.sender == BOOTLOADER_FORMAL_ADDRESS,
            "Only bootloader can call this method"
        );
        // Continue execution if called from the bootloader.
        _;
    }

    // The constructor takes the address of the ERC721 contract as an argument.
    // The ERC721 contract is the asset that the user must hold in order to use the paymaster.
    constructor(address _erc721) {
        nft_asset = IERC721(_erc721); // Initialize the ERC721 contract
    }

    // The gas fees will be paid for by the paymaster if the user is the owner of the required NFT asset.
    function validateAndPayForPaymasterTransaction(
        bytes32,
        bytes32,
        Transaction calldata _transaction
    )
        external
        payable
        onlyBootloader
        returns (bytes4 magic, bytes memory context)
    {
        // TODO: TO BE IMPLEMENTED
        // REQUIREMENTS:
        // 1. Only the bootloader can validate and pay for the paymaster transaction.
        // 2. The standard paymaster input must be at least 4 bytes long.
        // 3. We must use a valid paymaster input selector (e.g. General or Approval-based).
        // 4. The user address from the transaction must own the required NFT asset to use the paymaster.
        // 5. We need to calculate the minimum required ETH value to pay for the transaction.
        // 6. We need to to use the Bootloader to execute the transaction.
    }

    function postTransaction(
        bytes calldata _context,
        Transaction calldata _transaction,
        bytes32,
        bytes32,
        ExecutionResult _txResult,
        uint256 _maxRefundedGas
    ) external payable override onlyBootloader {
    }

    function withdraw(address payable _to) external onlyOwner {
        // send paymaster funds to the owner
        uint256 balance = address(this).balance;
        (bool success, ) = _to.call{value: balance}("");
        require(success, "Failed to withdraw funds from paymaster.");
    }

    receive() external payable {}
}