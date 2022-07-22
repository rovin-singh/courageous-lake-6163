import axios from "axios"

export const getProductsData=()=>{
    return axios.get("http://localhost:8000/products");
}

export const getproduct=(id)=>{
 return axios.get(`http://localhost:8000/products/${id}`)
}