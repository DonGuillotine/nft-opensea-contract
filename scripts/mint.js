require('dotenv').config();
const hre = require("hardhat");

async function main() {
  const NFT_CONTRACT_ADDRESS = "0x8667b7bdf8F27E76200fA450bF48aA78BBBCC61f";
  const METADATA_URI = "ipfs://QmaFcBAs3uhp62P3mKTY3cNLaZKvZh7ucNfeJCRdQi914d";

  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const contract = MyNFT.attach(NFT_CONTRACT_ADDRESS);

  await contract.safeMint(process.env.OWNER_ADDRESS, METADATA_URI);
  console.log("NFT minted successfully");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });