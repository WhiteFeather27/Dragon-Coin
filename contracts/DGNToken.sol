pragma solidity ^0.5.8;

// Imports
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

// Main token smart contract
contract DGNToken is ERC20Mintable {
  string public constant name = "Dragon Coin";
  string public constant symbol = "DGN";
  uint8 public constant decimals = 0.0000000000000000000001;
}