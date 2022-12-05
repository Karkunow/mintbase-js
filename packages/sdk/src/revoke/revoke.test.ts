/* eslint-disable @typescript-eslint/camelcase */
import { GAS, ONE_YOCTO, TOKEN_METHOD_NAMES } from '../constants';
import { revokeApproval } from './revoke';

describe('revoke account', () => {

  const nftContractId = 'test';
  const tokenId= 'test';
  const accountToRevokeId = 'test';

  test('revoke with all args', () =>{
    const args = revokeApproval({
      nftContractId: nftContractId,
      tokenId: tokenId,
      accountToRevokeId: accountToRevokeId,
    });

    expect(args).toEqual({
      contractAddress: nftContractId,
      methodName: TOKEN_METHOD_NAMES.TOKEN_ACCOUNT_REVOKE,
      args: {
        token_id: tokenId,
        account_id: accountToRevokeId,
      },
      deposit: ONE_YOCTO,
      gas: GAS,
    });
  });

  test('revoke without accountToRevokeId uses all method', () =>{
    const args = revokeApproval({
      nftContractId: nftContractId,
      tokenId: tokenId,
    });

    expect(args).toEqual({
      contractAddress: nftContractId,
      methodName: TOKEN_METHOD_NAMES.TOKEN_ACCOUNT_REVOKE_ALL,
      args: {
        token_id: tokenId,
      },
      deposit: ONE_YOCTO,
      gas: GAS,
    });
    expect.not.objectContaining(args);
  });
});