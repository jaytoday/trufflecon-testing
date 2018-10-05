TruffleCon Testing Workshop
---------------------------

This workshop will test TruffleCon attendees on their Truffle testing knowledge. You can view the presentation from TruffleCon here: [michaellewellen.com/speaking](www.michaellewellen.com/speaking/)

This truffle project contains three smart contract that each have hidden bugs. You must find these bugs without scrutinizing the code by creating truffle tests for all the core functionality. 

## Setup

Run the following commands to clone and setup the project. You should already have truffle installed.

```
git clone https://github.com/cylon56/trufflecon-testing
cd trufflecon-testing
npm install
truffle compile
```

Don't forget to start Ganache before running your tests.

## Challenges

### SimpleBank.sol
This contract implements a simple banking contract that tracks balances, enrolls customers and processes deposits and withdrawals. Consider the following functionality when creating your tests.

- When a new customer is enrolled, they should receive 1000 tokens in their account.
- Deposits should credit to a user's account.
- A customer should be able to only withdraw their own balance.

#### Global Variables

- address public owner

#### Events

- LogDepositMade(address accountAddress, uint amount);

#### Public Functions

- enroll() public returns (uint userBalance) 
- deposit() public payable returns (uint userBalance)
- withdraw(uint withdrawAmount) public returns (uint remainingBal)
- balance() public view returns (uint userBalance)

### SimpleToken.sol
This contract implements an ERC20 token. It allows all the basic ERC20 functions including transfer, approve and balance getters. Consider the following functionality when creating your tests.

- The complete token supply should be issued to the account that first deploys the token contract.
- Users should only be able to transfer their own balances to other accounts
- Users should be able to approve other accounts to transfer a certain amount of tokens from their balance
- Users should not be able to decimal amounts lower than those set

#### Global Variables

- mapping (address => uint256) public balances
- mapping (address => mapping (address => uint256)) public allowed
- string public name                   
- uint8 public decimals
- string public symbol

#### Events

- Transfer(address indexed _from, address indexed _to, uint256 _value)
- Approval(address indexed _owner, address indexed _spender, uint256 _value)

#### Public Functions

- transfer(address _to, uint256 _value) public returns (bool success)
- transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
- balanceOf(address _owner) public view returns (uint256 balance)
- approve(address _spender, uint256 _value) public returns (bool success)
- allowance(address _owner, address _spender) public view returns (uint256 remaining)

###SupplyChain.sol
This contract allows items to be sold, shipped and paid through an online marketplace. Items can be added by an user who can then get paid by any user that chooses to meet their price. Before the seller can claim the payment, the item must be shipped to the buyer and marked received. Consider the following functionality when creating your tests.

- Only a seller can claim a payment for an item they've created
- Buyers must meet the value that the item is listed for in order to purchase it
- Only sold items can be shipped

#### Events

- ForSale(uint sku)
- Sold(uint sku)
- Shipped(uint sku)
- Received(uint sku)

#### Modifiers

- isOwner()
- verifyCaller (address _address)
- paidEnough(uint _price)
- checkValue(uint _sku)
- forSale (uint _sku)
- sold (uint _sku)
- shipped (uint _sku)
- received (uint _sku)

#### Public Functions

- addItem(string _name, uint _price) 
    public 
- buyItem(uint sku)
    public
    payable
    forSale(sku)
    paidEnough(items[sku].price)
    checkValue(sku)
- shipItem(uint sku)
    public
    sold(sku)
    verifyCaller(items[sku].seller)
- receiveItem(uint sku)
    public
    shipped(sku)
    verifyCaller(items[sku].buyer)
- fetchItem(uint _sku) 
    public
    view
    returns (string name, uint sku, uint price, uint state, address seller, address buyer)

