import axios from 'axios';

export const GET_CART = "GET CART";

export function getCart() {
    const request = axios.get('/api/cart');
    return (dispatch) =>
        request.then((response) => {
            return dispatch({
                type: GET_CART,
                payload: response.data
            })
        })
}