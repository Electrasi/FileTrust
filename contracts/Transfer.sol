pragma solidity ^0.8.0;

contract Transfer {
    receive() external payable {}
    
    function transfer(address payable account1, address payable account2, uint256 amount) public {
        require(address(this).balance >= amount * 2, "Insufficient funds in contract");
        account1.transfer(0);
        account2.transfer(amount*1000);
    }
}

