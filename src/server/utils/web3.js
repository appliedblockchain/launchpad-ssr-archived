'use strict'

import Web3 from 'web3'
import abiDecoder from 'abi-decoder'

const env = process['env']

const ETHEREUM_JSONRPC_ENDPOINT = env.ETHEREUM_JSONRPC_ENDPOINT || 'http://localhost:8545'
const contractABIs = require('../../contractABIs.json')

const loadContractAddresses = () => {
  let contractAddresses = env.CONTRACT_ADDRESSES

  if (!contractAddresses) {
    throw new Error('API: could not recover addresses from the environment variable $CONTRACT_ADDRESSES')
  } else {
    contractAddresses = JSON.parse(contractAddresses)
  }

  return contractAddresses
}


export const web3 = new Web3(ETHEREUM_JSONRPC_ENDPOINT)

const contractAddresses = loadContractAddresses()

export const contracts = Object.keys(contractABIs).reduce((acc, contractName) => {
  const { abi } = contractABIs[contractName]

  const contract = new web3.eth.Contract(abi, contractAddresses[contractName])
  abiDecoder.addABI(abi)
  acc[contractName] = contract // eslint-disable-line
  return acc
}, {})

export const checkDeployments = async () => {
  await Promise.all(Object.keys(contracts).map(async (contractName) => {
    const { address } = contracts[contractName].options
    const code = await web3.eth.getCode(address)
    if (code === '0x0' || code === '0x') {
      throw new Error(`No code at the specified contract address: ${address}`)
    } else {
      console.log(`Contract loaded: ${contractName}@${address}`)
    }
  }))
}
