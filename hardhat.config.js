secrets = require("./secrets")

require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",

  networks: {
    optimism_kovan: {
      url: "https://kovan.optimism.io",
      accounts: {
        mnemonic: secrets.MNEMONIC
      },
      ovm: true
    }
  },

  ovm: {
    solcVersion: '0.8.4'
  }
};
