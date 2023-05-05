const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // Use the Ganache network
const readline = require('readline');
const contractABI = require('../build/contracts/Transfer.json').abi;

async function transferETH() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter Contract Address: ', async (contractAddress) => {
        const privateKey = await new Promise(resolve => {
            rl.question('Enter Private Key: ', (answer) => {
                resolve(answer);
            });
        });
        const amount = await new Promise(resolve => {
            rl.question('Enter amount of ETH to transfer: ', (answer) => {
                resolve(answer);
            });
        });
        rl.close();

        const senderAddress = await web3.eth.accounts.privateKeyToAccount(privateKey).address;
        const gasPrice = await web3.eth.getGasPrice();
        const gasLimit = 22000;
        const nonce = await web3.eth.getTransactionCount(senderAddress);

        const contract = new web3.eth.Contract(contractABI, contractAddress);

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
        console.log(`Gas fee: ${txReceipt.gasUsed * gasPrice}`);

        const senderBalance = await getBalance(senderAddress);
        const contractBalance = await getBalance(contractAddress);

        console.log(`Sender Balance: ${senderBalance}`);
        console.log(`Contract Balance: ${contractBalance}`);

    });
}

async function getBalance(address) {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
  }


transferETH();

