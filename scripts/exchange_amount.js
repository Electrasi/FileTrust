const Web3 = require('web3');
const contract = require('truffle-contract');
const TransferContract = contract(require('../build/contracts/Transfer.json'));
const readline = require('readline');


async function transferFunds() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Prompt the user for the account addresses and amount
  const from_address = await prompt(rl, 'Enter the source account address:');
  const to_address = await prompt(rl, 'Enter the destination account address:');
  const amountStr = await prompt(rl, 'Enter the amount to transfer:');
  const amount = parseInt(amountStr);

  // Set up a Web3 provider, e.g. using Ganache or Infura
  const provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
  const web3 = new Web3(provider);
  TransferContract.setProvider(provider);

  // Get the current account list
  const accounts = await web3.eth.getAccounts();

  // Check if the input addresses are valid
  if (!accounts.includes(from_address)) {
    throw new Error('Invalid source account address');
  }
  if (!accounts.includes(to_address)) {
    throw new Error('Invalid destination account address');
  }

  console.log(`Transfer details:\nFrom: ${from_address}\nTo: ${to_address}\nAmount: ${amount} ETH`);

  // Double check with the user before proceeding with the transfer
  const confirm = await prompt(rl, 'Confirm transfer (Y/N): ');
  if (confirm.toLowerCase() !== 'y') {
    console.log('Transfer cancelled by user');
    return;
  }

  // Get an instance of the contract deployed at the specified address
  const instance = await TransferContract.deployed();

  const amount_eth = amount;
  const amount_wei= amount_eth * 1000000000000000;
  
  // Estimate the gas required for the transfer
  const gasEstimate = await instance.transfer.estimateGas(from_address, to_address, amount_wei, { from: from_address });

  // Call the transfer() function on the contract instance

  const tx = await instance.transfer(from_address, to_address, amount_wei, { from: from_address, gas: gasEstimate });

  console.log(`Transfer completed successfully. Gas used: ${tx.receipt.gasUsed} wei`);
  const getAllAccounts = require('./balance_check_all');
}

function prompt(rl, question) {
  return new Promise((resolve, reject) => {
    rl.question(question, answer => {
      resolve(answer.toString());
    });
  });
}

// Call the transferFunds function
transferFunds();



