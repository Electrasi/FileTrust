const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // replace with your local network provider URL

async function getAllAccounts() {
  const accounts = await web3.eth.getAccounts();
  const blockNumber = await web3.eth.getBlockNumber();
  let allAccounts = [...accounts];
  for (let i = 0; i <= blockNumber; i++) {
    const block = await web3.eth.getBlock(i, true);
    if (block && block.transactions) {
      block.transactions.forEach(transaction => {
        const { to, from } = transaction;
        if (web3.utils.isAddress(to) && !allAccounts.includes(to)) {
          allAccounts.push(to);
        }
        if (web3.utils.isAddress(from) && !allAccounts.includes(from)) {
          allAccounts.push(from);
        }
      });
    }
  }
  console.log('All Accounts:');
  for (const account of allAccounts) {
    const balance = await web3.eth.getBalance(account);
    const code = await web3.eth.getCode(account);
    const isContract = code !== '0x';
    console.log(`${account} (${isContract ? 'Contract' : 'Main'}) - Balance: ${web3.utils.fromWei(balance)} ETH`);
  }
  process.exit();
}

getAllAccounts();

module.exports = getAllAccounts;