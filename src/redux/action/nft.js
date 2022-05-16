/* eslint-disable no-console */
import {
  NFT_FETCH_SUCCESS,
  NFT_UPDATE_FAIL,
  NFT_FETCH_FAIL,
  NFT_ADD_SUCCESS,
  NFT_ADD_FAIL,
  SET_MESSAGE,
  NFT_UPDATE_SUCCESS,
  NFT_DELETE_FAIL,
  NFT_DELETE_SUCCESS,
} from './types';

import NftService from '../../service/nft.service';

export const addNft = (values) => (dispatch) => NftService.addNft(values).then(
  (response) => {
    console.log(response.data);
    dispatch({
      type: NFT_ADD_SUCCESS,
      payload: response.data,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: response.data,
    });

    return Promise.resolve();
  },
  (error) => {
    console.log(error.response);
    const message = (error.response
                && error.response.data
                && error.response.data.message)
              || error.message
              || error.toString();
    dispatch({
      type: NFT_ADD_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);

export const updateNft = (values, id) => (dispatch) => NftService.updateNft(values, id).then(
  (response) => {
    dispatch({
      type: NFT_UPDATE_SUCCESS,
      payload: response.data,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: response.data,
    });

    return Promise.resolve();
  },
  (error) => {
    console.log(error.response);
    const message = (error.response
                  && error.response.data
                  && error.response.data.message)
                || error.message
                || error.toString();
    dispatch({
      type: NFT_UPDATE_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);

export const fetchNfts = () => (dispatch) => NftService.fetchNfts().then(
  (response) => {
    console.log(response.data);
    dispatch({
      type: NFT_FETCH_SUCCESS,
      payload: { nfts: response.data },
    });

    dispatch({
      type: SET_MESSAGE,
      payload: response.data,
    });

    return Promise.resolve();
  },
  (error) => {
    console.log(error.response);
    const message = (error.response
                && error.response.data
                && error.response.data.message)
              || error.message
              || error.toString();
    dispatch({
      type: NFT_FETCH_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);

export const deleteNft = (id) => (dispatch) => NftService.deleteNft(id).then(
  // eslint-disable-next-line
    (response) => {
    dispatch({
      type: NFT_DELETE_SUCCESS,
      payload: id,
    });

    return Promise.resolve();
  },
  (error) => {
    console.log(error.response);
    const message = (error.response
                && error.response.data
                && error.response.data.message)
              || error.message
              || error.toString();
    dispatch({
      type: NFT_DELETE_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);
