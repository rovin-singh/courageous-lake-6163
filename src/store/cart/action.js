import axios from "axios";
import {
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
} from "./action.type";

export const addingInCart = (data) => (dispatch) => {
  // Loading
  dispatch({ type: ADD_ITEM_TO_CART_LOADING });
  // success
  axios
    .post(`http://localhost:8000/cart`, data)
    .then((res) => {
        console.log("response",res)
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS,payload:res.data });
    })
    .catch(() => {
      dispatch({ type: ADD_ITEM_TO_CART_ERROR });
    });
};
