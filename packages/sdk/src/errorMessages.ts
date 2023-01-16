const DEFAULT_SUPPORT = '- read more on: https://docs.mintbase.io/dev/mintbase-sdk-ref/sdk , further help available on our telegram channel: https://t.me/mintdev';
const SUPPORT = '- further help available on our telegram channel: https://t.me/mintdev';

export const ERROR_MESSAGES = {
  CONTRACT_ADDRESS: `You must provide a contractAddress, define contractAddress on mbjs.config,or a CONTRACT_ADDRESS enviroment variable to default to - ${DEFAULT_SUPPORT}`,
  INVALID_ROYALTY_PERCENTAGE: `Invalid royalty percentage ${SUPPORT}`,
  SPLITS_PERCENTAGE: `Splits percentages must add up to 1 ${SUPPORT}`,
  MAX_AMOUT: `It is not possible to mint more than 99 copies of this token using this method ${SUPPORT}`,
  SPLITS: `There must be at least 2 accounts in splits ${SUPPORT}`,
  MAX_SPLITS: `Splits cannnot have more than 50 entries ${SUPPORT}`,
  BURN_TOKEN_IDS: `Burn contract call should not have an empty array of tokens ids ${SUPPORT}`,
  TOKEN_NOT_ARRAY: `tokenIds must be an array  ${SUPPORT}`,
  TOKEN_LENGTH: `tokenIds must have more than one element ${SUPPORT}`,
  TRANSFER:  `You must transfer at least one token ${SUPPORT}`,
  NO_MINTERS: `There are no minters being provided to the batchChangeMinters method to be changed, try adding account Ids to at least one of the minter fields ${SUPPORT}`,
};