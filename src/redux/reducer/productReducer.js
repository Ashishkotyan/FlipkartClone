import * as actionType from '../constants/productConstant'



export const getProductsReducer = (state = {products: [] }, action) => {

    switch(action.type){
        case  actionType.GET_PRODUCT_SUCCES:
            return {products: action.payload}

        case  actionType.GET_PRODUCT_fail:
            return {erroe: action.payload}

            default:
                return state
    }
    
};