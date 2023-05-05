const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // Use the Ganache network

const contractAddress = '0x96386c5b072d15362a1E2D76d221EE6BAb59Dca8'; // Replace with the address of the deployed contract
const privateKey = '0x03197a0180c9b6bbdd45bbbb21f7202106c040ff5821487b275952b46ddb898b'; // Replace with the private key of the sender account

const contractABI = require('../build/contracts/Transfer.json').abi;
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function transferETH(amount) {
    const senderAddress = await web3.eth.accounts.privateKeyToAccount(privateKey).address;
    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 100000;
    const nonce = await web3.eth.getTransactionCount(senderAddress);

    const txParams = {
        from: senderAddress,
        to: contractAddress,
        value: web3.utils.toWei(amount.toString(), 'ether'),
        gasPrice: gasPrice,
        gasLimit: gasLimit,
        nonce: nonce
    };

    const signedTx = await web3.eth.accounts.signTransaction(txParams, privateKey);

    const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log(`Transaction successful: ${txReceipt.transactionHash}`);
}

const amount = 20; // Replace with the amount of ETH to transfer
transferETH(amount);