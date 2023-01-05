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
  privateKey:
    "0xac24d912bdcc6a39994c3aa4ff22dce7b9af11c8fe19799e7d4b4611db767411",
  address: "0x922d5A2e77105a8e38CF32cAEf9a9b8f414A1bc5",
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
