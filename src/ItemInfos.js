
const GET_ALL_INFOS = 'GET_ALL_INFOS';
const ADD_CHECKOUT = 'ADD_CHECKOUT'
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';

export const addToCart = (id) => {
    return{
        type: ADD_ITEM,
        id
    }
}
export const addToCheckout = (id) => {
    return{
        type: ADD_CHECKOUT,
        id
    }
}

export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}

export const addQuantity=(id) =>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
export const subQuantity=(id) =>{
    return{
        type: SUB_QUANTITY,
        id
    }
}