import axios from "axios"

const fetchAllProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
}

export {fetchAllProducts}