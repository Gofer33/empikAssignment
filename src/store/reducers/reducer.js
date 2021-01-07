import {GET_CART} from "../actions/actions";

const initialState = {
    cart: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                cart: action.payload
            };
        default:
            return state
    }
}

export default rootReducer;