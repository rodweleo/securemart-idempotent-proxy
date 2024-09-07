import axios from "axios"

const fetchCategoryProducts = async (category: string) => {
    if(category.length === undefined || category.length === 0 || category === "" || category === null){
        return [];
    }

    const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
    return response.data;
}

export {fetchCategoryProducts}