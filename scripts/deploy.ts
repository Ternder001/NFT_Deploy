const { ethers } = require("hardhat");

async function main() {
  const PNFT = await ethers.getContractFactory("PromaxNFT");
  const pNFT = await PNFT.deploy(PNFT.target);

  await pNFT.waitForDeployment();

  console.log("MyNFT deployed to:", pNFT.target);

  // Mint NFTs
  await pNFT.mint("0xYourAddressHere", 1); // Mint NFT to your address
  console.log("NFT minted!");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
