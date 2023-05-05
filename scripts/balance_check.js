//Usage node get_balance.js 0xa5086d86A3884dce9BE7c7e6Df0497ab5a2b296e
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

const directAddress = process.argv[2];

web3.eth.getBalance(directAddress, function(error, balance) {
  if (error) {
    console.log(error);
  } else {
    console.log(`Balance of ${directAddress} is ${web3.utils.fromWei(balance, 'ether')}`);
  }
});