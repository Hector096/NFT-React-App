// /* eslint-disable no-console */
// import {
//   NFT_FETCH_SUCCESS,
//   NFT_UPDATE_FAIL,
//   NFT_FETCH_FAIL,
//   SET_MESSAGE,
//   NFT_UPDATE_SUCCESS,
//   NFT_DELETE_FAIL,
//   NFT_DELETE_SUCCESS,
// } from './types';

// import UserService from '../../service/user.service';

// // eslint-disable-next-line max-len
// export const addProduct = (values) => (dispatch) => UserService.addProducts(values).then(
//   (response) => {
//     console.log(response.data);
//     dispatch({
//       type: PRODUCT_SUCCESS,
//       payload: response.data.product,
//     });

//     dispatch({
//       type: SET_MESSAGE,
//       payload: response.data.message,
//     });

//     return Promise.resolve();
//   },
//   (error) => {
//     console.log(error.response);
//     const message = (error.response
//                 && error.response.data
//                 && error.response.data.message)
//               || error.message
//               || error.toString();
//     dispatch({
//       type: PRODUCT_FAIL,
//     });

//     dispatch({
//       type: SET_MESSAGE,
//       payload: message,
//     });

//     return Promise.reject();
//   },
// );

// export const fetchProducts = () => (dispatch) => UserService.fetchProducts().then(
//   (response) => {
//     dispatch({
//       type: PRODUCT_FETCH_SUCCESS,
//       payload: { products: response.data.products },
//     });

//     dispatch({
//       type: SET_MESSAGE,
//       payload: response.data.message,
//     });

//     return Promise.resolve();
//   },
//   (error) => {
//     console.log(error.response);
//     const message = (error.response
//                 && error.response.data
//                 && error.response.data.message)
//               || error.message
//               || error.toString();
//     dispatch({
//       type: PRODUCT_FETCH_FAIL,
//     });

//     dispatch({
//       type: SET_MESSAGE,
//       payload: message,
//     });

//     return Promise.reject();
//   },
// );

// export const deleteProduct = (id) => (dispatch) => UserService.deleteProduct(id).then(
//   // eslint-disable-next-line
//     (response) => {
//     dispatch({
//       type: PRODUCT_DELETE_SUCCESS,
//       payload: id,
//     });

//     return Promise.resolve();
//   },
//   (error) => {
//     console.log(error.response);
//     const message = (error.response
//                 && error.response.data
//                 && error.response.data.message)
//               || error.message
//               || error.toString();
//     dispatch({
//       type: PRODUCT_DELETE_FAIL,
//     });

//     dispatch({
//       type: SET_MESSAGE,
//       payload: message,
//     });

//     return Promise.reject();
//   },
// );
