import { combineReducers } from 'redux';
import message from './message';
import nfts from './nft';

export default combineReducers({
  message,
  nfts,
});
