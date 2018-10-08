Workshop Solutions
-------------------
Bug locations for the contracts.


### SimpleBank.sol

- Line 41: The LogDepositMade Event emits a 0x address rather than the depositing account
- Line 58: The withdraw function's require() conditional only checks for an amount  greater than the user's balance + 3
- Line 75: The balance getter function always returns 1000 rather than the user's actual balance.

### SimpleToken.sol

- Line 41: The transfer function will not send a full balance as the require statement checks for an amount > userBalance, rather than amount >= userBalance.
- Line 52: The amount being transferred is not deducted from the sender's balance.
- Line 65: The Approval event arguements are in the wrong order.

###SupplyChain.sol

- Line 57: The contract caller is never verified by the modifier
- Line 63: The require statement only accepts payments greater than the price and will not accept a payment equal to the price as it should.
- Line 111: skuCount increases by 2, rather than by 1