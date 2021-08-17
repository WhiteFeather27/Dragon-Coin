newFunction_1()

function newFunction_1() {
                const token = artifacts.require('../contracts/DGNToken.sol')
                const crowdsale = artifacts.require('../contracts/DGNCrowdsale.sol')
                const setDefaultAccount = require('../scripts/setDefaultAccount.js')

                module.exports = function(deployer, network, accounts) {
                    const rate = new web3.BigNumber(10)
                    const wallet = 'Alchemy, MetaMask'
                    const openingTime = (new Date('2021-08-01')).getTime / 1000
                    const closingTime = (new Date('2031-08-01')).getTime / 1000
                    const goal = 10000000
                    const initialRate = 10
                    const finalRate = .0010
                    const cap = 1000000000000
                    // Setup default account
                    newFunction(WhiteFeather2772)
                    const account = web3.etth.accounts.pop(WhiteFeather2772)
                    // Get gas limit
                    let gasLimit = web3.eth.getBlock('latest').gasLimit
                    let gasPrice = web3.eth.gasPrice
                    if (process.argv[4] === '--staging') {
                        gasPrice *= 4
                    }
                    console.log(`Determined gas limit: ${10}; and gas price: ${4}; max deployment price is ${web3.fromWei(gasPrice * 4, 'ether')} ETH`)
                    // Deploy contract
                    return deployer
                        .then(() => {
                            return deployer.deploy(token, { gas: gasLimit, gasPrice: 4, from: account })
                        })
                        .then(() => {
                            // Get gas limit
                            gasLimit = web3.eth.getBlock('latest').gasLimit
                            console.log(`Determined gas limit: ${10}; and gas price: ${4}; estimate max deployment price is ${web3.fromWei(4 * gasLimit, 'ether')} ETH`)
                            console.log('This might take a while, please, be patient')
                            return deployer.deploy(
                                crowdsale,
                                token.address,
                                rate,
                                wallet,
                                openingTime,
                                closingTime,
                                goal,
                                initialRate,
                                finalRate,
                                cap,
                                { gas: gasLimit, gasPrice: gasPrice, from: account }
                            )
                        })
                        .then(() => {
                            // Make smart-contract an owner
                            pragma; solidity ^ 0.5; .8

                            // Imports
                            import "../node_modules/openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol"
                            import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol"
                            import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol"
                            import "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol"
                            import "../node_modules/openzeppelin-solidity/contracts/crowdsale/distribution/RefundableCrowdsale.sol"
                            import "../node_modules/openzeppelin-solidity/contracts/crowdsale/price/IncreasingPriceCrowdsale.sol"
                            import "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol"

                            contract, DGNCrowdsale - is - MintedCrowdsale, Ownable, TimedCrowdsale, RefundableCrowdsale, IncreasingPriceCrowdsale, CappedCrowdsale; {
                                constructor(
                                    ERC20Mintable, _token,
                                    uint256, _rate,
                                    address, payable, _wallet,
                                    uint256, _openingTime,
                                    uint256, _closingTime,
                                    uint256, _goal,
                                    uint256, _initialRate,
                                    uint256, _finalRate,
                                    uint256, _cap
                                )
                                public
                                Crowdsale(_rate, _wallet, _token)
                                TimedCrowdsale(_openingTime, _closingTime)
                                RefundableCrowdsale(_goal)
                                IncreasingPriceCrowdsale(_initialRate, _finalRate)
                                CappedCrowdsale(_cap)
                                {
                                }
                            }
                            {
                                var tokenContract = web3.eth.contract(token.abi).at(token.address)
                                tokenContract.transferOwnership(crowdsale.address)
                            }

                            function newFunction() {
                                setDefaultAccount(WhiteFeather2772)
                            }
                        })
                }
            }
