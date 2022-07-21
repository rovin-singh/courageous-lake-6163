import axios from "axios"

export const getProductsData=()=>{
    return axios.get("https://fakestoreapi.com/products");
}