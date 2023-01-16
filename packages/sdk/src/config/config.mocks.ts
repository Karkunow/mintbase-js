import { GRAPHQL_ENDPOINTS, MARKET_CONTRACT_ADDRESS, MINTBASE_CONTRACTS, NEAR_NETWORKS, RPC_ENDPOINTS } from '../types';

export const TESTNET_MOCK = {
  contractAddress: 'ruben.mintspace2.testnet', 
  callbackUrl: 'https://mintbase.xyz/success',
  debugMode: true, 
  graphqlUrl: GRAPHQL_ENDPOINTS.testnet, 
  isSet: true, 
  marketAddress: MARKET_CONTRACT_ADDRESS.testnet, 
  mbContract: MINTBASE_CONTRACTS.testnet, 
  nearRpcUrl: RPC_ENDPOINTS.testnet, 
  network: NEAR_NETWORKS.TESTNET };


export const MAINNET_MOCK = {
  contractAddress: 'zengin.mintbase1.near', 
  callbackUrl: 'https://mintbase.xyz/success',
  debugMode: false, 
  graphqlUrl: GRAPHQL_ENDPOINTS.mainnet, 
  isSet: true, 
  marketAddress: MARKET_CONTRACT_ADDRESS.mainnet, 
  mbContract: MINTBASE_CONTRACTS.mainnet, 
  nearRpcUrl: RPC_ENDPOINTS.mainnet, 
  network: NEAR_NETWORKS.MAINNET };
  