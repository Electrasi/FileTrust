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
  const resultsDiv = document.getElementById('results');
  if (resultsDiv) {
    resultsDiv.innerHTML = ''; // clear any previous results
    for (const account of allAccounts) {
      const balance = await web3.eth.getBalance(account);
      const code = await web3.eth.getCode(account);
      const isContract = code !== '0x';
      const accountDiv = document.createElement('div');
      accountDiv.innerHTML = `${account} (${isContract ? 'Contract' : 'Main'}) - Balance: ${web3.utils.fromWei(balance)} ETH`;
      resultsDiv.appendChild(accountDiv);
    }
  } else {
    console.error("Could not find 'results' div in the DOM.");
  }
}

// Add an event listener to the button
const button = document.getElementById('getAccountsButton');
button.addEventListener('click', getAllAccounts);
