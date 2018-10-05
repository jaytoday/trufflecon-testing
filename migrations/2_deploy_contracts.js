var SimpleBank = artifacts.require("./SimpleBank.sol");
var SimpleToken = artifacts.require("./SimpleToken.sol");
var SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleBank);
  deployer.deploy(SimpleToken);
  deployer.deploy(SupplyChain);
};
