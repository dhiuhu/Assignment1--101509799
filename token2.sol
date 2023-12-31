// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token2 is ERC20 {
    constructor() ERC20("Token2", "TOK2") {
        _mint(msg.sender, 1000000000000000000000000); // Mint 1,000,000 TOK1 tokens
    }
}