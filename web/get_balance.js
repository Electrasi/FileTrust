const web3 = new Web3('http://localhost:8545');

function getBalance() {
  const directAddress = document.getElementById('address').value;

  web3.eth.getBalance(directAddress, function(error, balance) {
    if (error) {
      console.log(error);
    } else {
      const balanceElement = document.getElementById('balance');
      balanceElement.innerHTML = `Balance of ${directAddress} is ${web3.utils.fromWei(balance, 'ether')}`;
    }
  });
}
