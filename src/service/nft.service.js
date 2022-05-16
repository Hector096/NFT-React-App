import axios from 'axios';

const API_URL = 'https://stark-badlands-18948.herokuapp.com';

const deleteNft = (id) => axios.delete(`${API_URL}/nft/${id}`);

const addNft = (values) => axios.post(`${API_URL}/nft`, values);

const updateNft = (values, id) => axios.put(`${API_URL}/nft/${id}`, values);

const fetchNfts = () => axios.get(`${API_URL}/nft`);

export default {
  fetchNfts,
  addNft,
  deleteNft,
  updateNft,
};
