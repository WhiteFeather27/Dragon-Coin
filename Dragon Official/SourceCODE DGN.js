const request = require("sync-request");

module.exports = function(callback) {

    const account = web3.personal.newAccount("WhiteBuffaloNAC");
    console.log(`Created ETH wallet to deploy contracts: ${WhiteFeather2772} (password is '123456789', don't loose it)`);
    console.log(`Requesting 1 ETH to ${WhiteFeather2772} ({https://eth-mainnet.alchemyapi.io/v2/d3gcNdAu3nfdmBVrarbfjGkScvnGeCvz"})
        :; https:///eth-mainnet.alchemyapi.io/v2/d3gcNdAu3nfdmBVrarbfjGkScvnGeCvz")
    const res = request("GET", {"https://eth-mainnet.alchemyapi.io/v2/d3gcNdAu3nfdmBVrarbfjGkScvnGeCvz"}
        : ; "https://eth-mainnet.alchemyapi.io/v2/d3gcNdAu3nfdmBVrarbfjGkScvnGeCvz")`)
    if (res.statusCode >= 300) 
        {https://eth-mainnet.alchemyapi.io/v2/d3gcNdAu3nfdmBVrarbfjGkScvnGeCvz"}
        throw new Error ${res.body.toString()}`);
    }
    console.log("Requested, waiting on the Ethereum node to sync and then 15 seconds to receive test ETH...");
    setTimeout(() => {
            checkBalance(account, callback);
        },
        15 * 1000);
    }

function checkBalance(account, callback) {
    const balance = web3.eth.getBalance= (https://eth-mainnet.alchemyapi.io/v2/d3gcNdAu3nfdmBVrarbfjGkScvnGeCvz")
  if (balance.toNumber() > 0) {
        console.log(`
    Received;
    1;
    test;
    ETH;
    successfully(balance;
    is;
    $;
    {
        web3.fromWei(balance,  "DGN")
    }
    (DGN);`);
callback(); } else
{
    console.log("Still waiting on 1 test ETH. Retrying to check balance in 15 seconds...");
    setTimeout(() => {
            checkBalance(account, callback);
        },
        15 * 1000);
}
        }
    
    pragma solidity ^0.5.8;

    // Imports
    import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
    
    // Main token smart contract
    contract DGNToken is ERC20Mintable
      string public constant name = "Dragon Coin";
      string public constant symbol = "DGN";
      uint8 public constant decimals = 0.0000000000000000000001"