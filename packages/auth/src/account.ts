
import { connectToNear, Account } from '@mintbase-js/sdk';
import { KeyStore } from 'near-api-js/lib/key_stores';
import { NearNetwork, NEAR_ENV, NEAR_RPC_URL } from './constants';

/**
 * Connect to a NEAR account `accountId` with credentials in `keyStore` {@link KeyStore}
 *
 * @param call an array or single instance of {@link NearContractCall} to execute
 * @param signingOptions object containing either near wallet selector
 *  wallet: {@link Wallet} or account: {@link Account}, defaults to wallet when present
 * @returns a result for single transactions of {@link FinalExecutionOutcome}, or void for batches
 */
export const connect = async (
  accountId: string,
  keyStore: KeyStore,
  network: NearNetwork = NEAR_ENV,
): Promise<Account> => {
  const near = await connectToNear({
    keyStore,
    networkId: network,
    nodeUrl: network === 'testnet'
      ? NEAR_RPC_URL.TESTNET
      : NEAR_RPC_URL.MAINNET,
    headers: {},
  });
  return await near.account(accountId);
};