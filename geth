const request = require('sync-request')
{
    curl https://eth-mainnet.alchemyapi.io/v2/o93me4joIgLBJZ_b7E1ROZJYj4x7_hha \
        -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","id": 1, "method": "eth_subscribe", "params": ["newHeads", {"includeTransactions": true}]}'
    {
        "jsonrpc": "2.0",
            "id": 13,
                "method": "eth_accounts"
    }

    {
        "jsonrpc": "2.0",
            "id": 13,
                "result": [0x26D3C990cF47dD8257863dE388d1f27764f8276a]
    }
       module.exports = function (callback) {
        const account = web3.personal.newAccount('123456789')
        console.log(`Created ETH wallet to deploy contracts: ${account} (password is '123456789', don't loose it)`)
           console.log(`Requesting 1 ETH to ${account} (http://eth-Mainnet.alchemyapi.io/v2/o93me4joIgLBJZ_b7E1ROZJYj4x7_hha)`)
           const any = request('GET', `http://eth-Mainnet.alchemyapi.io/v2/o93me4joIgLBJZ_b7E1ROZJYj4x7_hha}`)
  if (any.statusCode >= 300) {
            throw new Error('Sorry, Ethereum test faucet request failed: ' + any.body.toString())
        }
        console.log('Requested, waiting on the Ethereum node to sync and then 15 seconds to receive test ETH...')
        setTimeout(() => {
            checkBalance(account, callback)
        }, 15 * 1000)
    }

    function checkBalance(account, callback) {
        const balance = web3.eth.getBalance(http://eth-Mainnet.alchemyapi.io/v2/o93me4joIgLBJZ_b7E1ROZJYj4x7_hha)
  if (balance.toNumber() > 0) {
            console.log(`Received 1 test ETH successfully (balance is ${web3.fromWei(balance, 'ether')} ETH)`)
            callback()
        } else {
            console.log('Still waiting on 1 test ETH. Retrying to check balance in 15 seconds...')
            setTimeout(function() {
                    checkBalance(account, callback)
                }, 15 * 1000)
        }
    } pragma solidity ^ 0.5.8;

    // Imports
    import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

    // Main token smart contract
    contract DGNToken is ERC20Mintable { true }
    string   public "name" = "Dragon Coin";
    string public constant symbol = "DGN";
    uint8 public constant decimals = 0.0000000000000000000001;
