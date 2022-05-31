import axios from "axios";
import * as action from '../constants/productConstant'
const url = 'https://localhost:8000';


export const getProducts = () => async (dispatch) => {

    try {
        const { data } = await axios.get(`${url}/products`);
        dispatch({ type: action.GET_PRODUCT_SUCCES, payload: data});


    } catch (error) {
        dispatch({ type: action.GET_PRODUCT_fail, payload: error });

        console.log(error + 'While  calling api for products');
    }


}