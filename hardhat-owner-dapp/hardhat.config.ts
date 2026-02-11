import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
  },
  networks: {
    arc: {
      url: "https://rpc.testnet.arc.network",
      accounts: [`0x${PRIVATE_KEY}`],
    },
    liskSepolia: {
      url: "https://rpc.sepolia-api.lisk.com",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      arc: "empty",
      liskSepolia: "empty",
    },
    customChains: [
      {
        network: "arc",
        chainId: 5042002,
        urls: {
          apiURL: "https://explorer.testnet.arc.xyz/api",
          browserURL: "https://explorer.testnet.arc.xyz",
        },
      },
      {
        network: "liskSepolia",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com",
        },
      },
    ],
  },
};

export default config;
