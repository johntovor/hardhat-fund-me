require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
// require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "https://sepolia-net/";
const PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY || "0xerf";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "0xerf";
const LOCALHOST_URL = process.env.LOCALHOST_URL || "http://localhost/";
const LOCALHOST_PRIVATE_KEY = process.env.LOCALHOST_PRIVATE_KEY || "0xerf";
const COINMARKET_API_KEY = process.env.COINMARKET_API_KEY || "0xerf";

module.exports = {
  // solidity: "0.8.8",
  solidity: {
    compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6,
    },
    localhost: {
      url: LOCALHOST_URL,
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKET_API_KEY,
  },

  //This is the part you need to verify
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
    player: {
      default: 1,
    },
  },
};
