"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_TOKENS_BY_OWNER_ID = exports.GET_TOKEN_BY_ID = exports.GET_LATEST_LIST = exports.FETCH_MARKETPLACE = void 0;
exports.FETCH_MARKETPLACE = `
  query getMyListed($limit: Int!, $offset: Int!) {
    list(
      where: { currentOfferId: { _is_null: true } }
      order_by: [{ createdAt: desc }, { price: asc }]
      limit: $limit
      offset: $offset
    ) {
      id
      price
      ownerId
      storeId
      createdAt
      groupId
      tokenId
      splits {
        account
        percent
        id
      }
      token {
        thingId
      }
    }
  }
`;
exports.GET_LATEST_LIST = `
  query getListedItemsTree($groupId: String!) {
    list(where: { groupId: { _eq: $groupId } }) {
      createdAt
      price
      tokenKey
      acceptedOfferId
      removedAt
      ownerId
      token {
        id
        thingId
        minter
        ownerId
        royaltyPercent
        royaltys {
          account
          percent
        }
      }
      splits {
        account
        percent
      }
      store {
        id
        name
        owner
        createdAt
        things(limit: 5) {
          id
        }
      }
    }
  }
`;
exports.GET_TOKEN_BY_ID = `
  query getToken($tokenId: String!) {
    token(where: {id: {_eq: $tokenId}}) {
      id
      ownerId
      storeId
      tokenId
      thingId
    }
  }
`;
exports.GET_TOKENS_BY_OWNER_ID = `
  query getToken($ownerId: String!) {
    token(where: {ownerId: {_eq: $ownerId}}) {
      id
      ownerId
      storeId
      tokenId
    }
  }
`;
//# sourceMappingURL=queries.js.map