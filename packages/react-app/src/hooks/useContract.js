import {ethers} from "ethers"
const createInstance = (address, abi,provider) => {

  const contract = ethers.Contract(address, abi, provider)
  return contract
}

export default createInstance
