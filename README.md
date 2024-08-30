# MyNFT Project

This project demonstrates the creation, deployment, and minting of an ERC-721 Non-Fungible Token (NFT) on the Sepolia testnet. The NFT metadata is stored on IPFS, and the minted NFTs can be viewed on OpenSea's Sepolia testnet.

## Project Structure

- **contracts/**
  - `MyNFT.sol`: The main smart contract that implements the ERC-721 standard using OpenZeppelin libraries.

- **scripts/**
  - `mint.js`: A script to mint an NFT by attaching to the deployed contract and passing the metadata URI.

- **metadata/**
  - `metadata.json`: Example JSON file containing metadata for the NFT, including the name, description, and image URI.

- **.env**
  - Contains environment variables, including the wallet address where the NFT will be minted.

## Requirements

- Node.js and npm
- Hardhat
- A MetaMask wallet with some Sepolia testnet ETH
- An account on [Pinata](https://pinata.cloud/) or another IPFS service

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/DonGuillotine/nft-opensea-contract.git
   cd MyNFT
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory with the following content:

   ```plaintext
   OWNER_ADDRESS=0xYourEthereumAddress
   ```

   Replace `0xYourEthereumAddress` with your MetaMask wallet address.

4. **Deploy the Smart Contract:**

   To deploy the smart contract to the Sepolia testnet:

   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

   This will deploy your `MyNFT` contract and output the contract address.

5. **Mint an NFT:**

   Update the `mint.js` script with the correct contract address and metadata URI. Then, run the script:

   ```bash
   npx hardhat run scripts/mint.js --network sepolia
   ```

   This script mints an NFT to the specified `OWNER_ADDRESS`.

6. **View Your NFT on OpenSea:**

   After minting, you can view your NFT on [OpenSea's Sepolia testnet section](https://testnets.opensea.io/). If the image or metadata does not appear immediately, use the "Refresh Metadata" button on OpenSea.

## Troubleshooting

- **Image Not Showing on OpenSea:** Make sure that the image URI in the `metadata.json` is correctly pointing to a valid IPFS link. If the `ipfs://` link is not displaying the image, try using a public gateway URL (e.g., `https://gateway.pinata.cloud/ipfs/...`).

- **Contract Deployment Issues:** Double-check your network settings in `hardhat.config.js` and make sure you have enough Sepolia testnet ETH in your MetaMask wallet.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License.
