import axios from 'axios';

const API_URL = 'https://stark-badlands-18948.herokuapp.com';

// eslint-disable-next-line
const deleteNft = (id) => axios.delete(`${API_URL}/nft/${id}`);

// eslint-disable-next-line
const addNft = (values) => axios.post(`${API_URL}/nft`,values);

// eslint-disable-next-line
const fetchNfts = () => axios.get(`${API_URL}/nft`);

export default {
  fetchNfts,
  addNft,
  deleteNft,
};
