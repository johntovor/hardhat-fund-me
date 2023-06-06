const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const fundMe = await ethers.getContract("FundMe", deployer);
  console.log("Funding....");
  //   const transactionResponse = await fundMe.fund({
  //     value: ethers.utils.parseEther("1"),
  //   });
  const transactionResponse = await fundMe.withdraw();
  const transactionReceipt = await transactionResponse.wait(1);
  console.log("Congrats, withdrawal successful.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
