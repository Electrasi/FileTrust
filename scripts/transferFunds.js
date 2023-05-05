const Web3 = require('web3');
const contract = require('truffle-contract');
const TransferContract = contract(require('../build/contracts/Transfer.json'));

async function transferFunds(from, to, amount) {

  console.log(`Transfer details:\nFrom: ${from}\nTo: ${to}\nAmount: ${amount_eth} ETH`);
  // Set up a Web3 provider, e.g. using Ganache or Infura
  const provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
  const web3 = new Web3(provider);
  TransferContract.setProvider(provider);

  // Get an instance of the contract deployed at the specified address
  const instance = await TransferContract.deployed();

  // Estimate the gas required for the transfer
  const gasEstimate = await instance.transfer.estimateGas(from, to, amount, { from: from });

  // Call the transfer() function on the contract instance
  const tx = await instance.transfer(from, to, amount, { from: from, gas: gasEstimate });

  console.log(`Transfer completed successfully. Gas used: ${tx.receipt.gasUsed} wei`);
  return;
}

// Call the transferFunds function with the desired parameters
const amount_eth = 5;
const amount_wei= amount_eth * 1000000000000000;
transferFunds('0x55D5eEEDc42bA9fF59937dE85f5400B87Fb93359', '0x858a82Dd879825aa8a37eF6D3867188C8feB0Dce', amount_wei);
