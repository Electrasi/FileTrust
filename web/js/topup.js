// Set up Web3
const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);

async function transfer(event) {
    event.preventDefault();
  
    const privateKey = document.getElementById('private_key').value;
    const contractAddress = document.getElementById('contract_address').value;
    const amount = document.getElementById('amount').value;
  
    const senderAddress = await web3.eth.accounts.privateKeyToAccount(privateKey).address;
    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 50000;
    const nonce = await web3.eth.getTransactionCount(senderAddress);
  
    const url = '../build/contracts/Transfer.json';
    //fetch the Json file
    try {
      const response = await fetch(url);
      const data = await response.json();
      const contractABI = data.abi;
  
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
  
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `Transaction successful: ${txReceipt.transactionHash}<br>Gas fee: ${txReceipt.gasUsed * gasPrice}`;
    } catch (error) {
      console.error(error);
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `Transaction failed: ${error.message}`;
    }
  }
  
