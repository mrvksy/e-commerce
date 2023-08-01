
import axios from "axios"
export const fetchProductList = async() => {
    const {data} = await axios.get('https://5fc9346b2af77700165ae514.mockapi.io/products')

    return data;

}