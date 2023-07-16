// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract InfinityStones is ERC721URIStorage, Ownable {
    uint256 public tokenId;
    string public baseURI;
    mapping (string => bool) public stoneExists;
    mapping (address => uint256[]) private _ownedTokens;

    string[] public stones = [
        "Space Stone",
        "Mind Stone",
        "Reality Stone",
        "Power Stone",
        "Time Stone",
        "Soul Stone"
    ];

    constructor() ERC721("InfinityStones", "ISTN") {}

    function mint(address recipient, string memory stoneName) public onlyOwner {
        // TODO: TO BE IMPLEMENTED
        // REQUIREMENTS:
        // 1. Only the owner of the contract can mint
        // 2. The stone name must be one of the 6 stones
        // 3. The stone name must not have been minted before
        // 4. The stoneName cannot be empty
        // 5. The recipient must be a valid non-zero address
        // 6. We must add the token to the list of tokens owned by the recipient
    }

    function setBaseURI(string memory _baseURI) public onlyOwner {
        baseURI = _baseURI;
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        require(_exists(_tokenId), "ERC721URIStorage: URI query for nonexistent token");
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, "/", Strings.toString(_tokenId))) : "";
    }

    function tokensOfOwner(address owner) public view returns (uint256[] memory) {
        return _ownedTokens[owner];
    }
}
