/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
//for us to be working with polygon we want to decide if we want to interact with the public nodes or our own private endpoints
//https://docs.polygon.technology/docs/develop/network-details/network/
// we will be using infura
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
      //
    },
//  unused configuration commented out for now
  mumbai: {
    url: "https://rpc-mumbai.matic.today",
    accounts: [process.env.privateKey]
  }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
