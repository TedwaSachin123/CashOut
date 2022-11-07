import ethers from "ethers"

const createInstance = (address, abi, provider) => {
  const contract = ethers.contract(address, abi, provider)
  return contract
}

export default createInstance
