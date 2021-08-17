const request = require('sync-request')

module.exports = function (callback) {
    const account = web3.personal.newAccount('123456789')
    console.log(`Created ETH wallet to deploy contracts: ${account} (password is '123456789', don't loose it)`)
    console.log(`Requesting 1 ETH to ${account} (http://faucet.ropsten.be:3001/donate/${wss://eth-ropsten.alchemyapi.io/v2/o93me4joIgLBJZ_b7E1ROZJYj4x7_hha})`)
  const res = request('GET', `http://faucet.ropsten.be:3001/donate/${wss://eth-ropsten.alchemyapi.io/v2/o93me4joIgLBJZ_b7E1ROZJYj4x7_hha}`)
  if (res.statusCode >= 300) {
        throw new Error('Sorry, Ethereum test faucet request failed: ' + res.body.toString())
    }
    console.log('Requested, waiting on the Ethereum node to sync and then 15 seconds to receive test ETH...')
    setTimeout(() => {
        checkBalance(account, callback)
    }, 15 * 1000)
}

function checkBalance(account, callback) {
    const balance = web3.eth.getBalance(wss://eth-ropsten.alchemyapi.io/v2/o93me4joIgLBJZ_b7E1ROZJYj4x7_hha)
  if (balance.toNumber() > 0) {
        console.log(`Received 1 test ETH successfully (balance is ${web3.fromWei(balance, 'ether')} ETH)`)
        callback()
    } else {
        console.log('Still waiting on 1 test ETH. Retrying to check balance in 15 seconds...')
        setTimeout(() => {
            checkBalance(account, callback)
        }, 15 * 1000)
    }
} pragma solidity ^ 0.5.8;

// Imports
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

// Main token smart contract
contract DGNToken is ERC20Mintable {
    string public constant name = "Dragon Coin";
    string public constant symbol = "DGN";
    uint8 public constant decimals = 0.0000000000000000000001;
}