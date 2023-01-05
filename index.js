const { ethers } = require("ethers");
require("dotenv").config();

// Alchemy Provider
const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const network = "goerli";
const provider = new ethers.providers.AlchemyProvider(network, ALCHEMY_KEY);

// Getting Blocknumber
// const getBlockNumber = async () => {
//   const blockNumber = await provider.getBlockNumber();
//   console.log(blockNumber);
// };
// getBlockNumber();

// Generate Ethereum Keys
// const data = new ethers.Wallet.createRandom();
// const privateKey = data._signingKey().privateKey;
// const address = data.address;
// console.log({
//   privateKey,
//   address,
// });

const walletData = {
  privateKey: process.env.PRIVATE_KEY,
  address: "0x6f13527967357Ae9b86D53339E67a56EE6C0Bc78",
};

// Ethers Signer
const wallet = new ethers.Wallet(walletData.privateKey, provider);

// Get ETH Balance
// const getEthBalance = async () => {
//   const weiBalance = await provider.getBalance(walletData.address);
//   const balance = ethers.utils.formatEther(weiBalance);
//   console.log(balance);
// };
// getEthBalance();

// Sending ETH
// const recipientAddress = "0x709ee34A24f5A483222b84b40064998b16D41ba7";
// const sendEth = async (value) => {
//   const tx = {
//     to: recipientAddress,
//     value: ethers.utils.parseEther(value),
//   };
//   const result = await wallet.sendTransaction(tx);
//   console.log(`https://goerli.etherscan.io/tx/${result.hash}`);
// };
// sendEth("0.001");
