// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Test is ERC20 {
    constructor() ERC20("Test", "TEST") {
        _mint(msg.sender, 42069 * 10 ** decimals());
    }
}
