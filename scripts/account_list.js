const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

web3.eth.getAccounts((error, accounts) => {
    if (error) {
      console.error(error);
    } else {
      console.log('List of accounts addresses and their balances:');
      accounts.forEach(async (account) => {
        const balance = await web3.eth.getBalance(account);
        console.log(`${account}: ${web3.utils.fromWei(balance, 'ether')} ETH`);
      });
    }
});
