import {
  NFT_FETCH_SUCCESS,
  NFT_UPDATE_FAIL,
  NFT_FETCH_FAIL,
  NFT_UPDATE_SUCCESS,
  NFT_DELETE_FAIL,
  NFT_DELETE_SUCCESS,
} from '../action/types';

const initialState = { nfts: [] };

export default function nfts(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case NFT_UPDATE_SUCCESS:
      const filteredNfts = state.nfts.filter((item) => item._id !== payload._id);
      return {
        ...state,
        nfts: [...filteredNfts, payload],
      };
    case NFT_UPDATE_FAIL:
      return {
        ...state,
      };
    case NFT_DELETE_SUCCESS:
      return {
        ...state,
        // eslint-disable-next-line
        nfts: state.nfts.filter((item) => item._id !== payload),
      };
    case NFT_DELETE_FAIL:
      return {
        ...state,
      };
    case NFT_FETCH_SUCCESS:
      return {
        ...state,
        nfts: payload.nfts,
      };
    case NFT_FETCH_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
