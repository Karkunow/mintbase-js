import { connect } from '@mintbase-js/auth';
import { execute, GAS, mint, ONE_YOCTO } from '@mintbase-js/sdk';
import { FinalExecutionOutcome } from '@near-wallet-selector/core';
import { TEST_TOKEN_CONTRACT } from '../../src/constants';
import { authenticatedKeyStore } from '../../src/utils';

test('mint token without options', async () => {

  const keyStore = await authenticatedKeyStore(['mb_alice.testnet']);
  const signingAccount = await connect('mb_alice.testnet', keyStore);
  
  const result = (await execute(
    {
      ...mint({
        nftContractId: TEST_TOKEN_CONTRACT,
        ownerId: 'mb_bob.testnet',
        reference: 'https://arweave.net/OzOg7k329BMjb-ib3AZ3cCrxf5KpChzyBAobHtulxRE',
      }),
      gas: GAS,
      deposit: ONE_YOCTO,
    },
    { account: signingAccount },
  )) as FinalExecutionOutcome;
  
  expect(result.receipts_outcome).not.toBeUndefined();
});


test('mint token with options', async () => {

  const keyStore = await authenticatedKeyStore(['mb_alice.testnet']);
  const signingAccount = await connect('mb_alice.testnet', keyStore);
    
  const result = (await execute(
    {
      ...mint({
        nftContractId: TEST_TOKEN_CONTRACT,
        ownerId: 'mb_bob.testnet',
        reference: 'https://arweave.net/OzOg7k329BMjb-ib3AZ3cCrxf5KpChzyBAobHtulxRE',
        options: {
          royaltyPercentage: 0.5,
          splits: {
            'test1': 0.5,
            'test': 0.5,
          },
          amount: 2,
        },
      }),
      gas: GAS,
      deposit: ONE_YOCTO,
    },
    { account: signingAccount },
  )) as FinalExecutionOutcome;
    
  expect(result.receipts_outcome).not.toBeUndefined();
});

