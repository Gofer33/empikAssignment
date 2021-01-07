import * as Actions from "../store/actions/actions";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

function ProductsList() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    console.log(cart);
    useEffect(() => {
        dispatch(Actions.getCart())
    }, [dispatch]);

    return (
        <div className="container">
            <h3>Lista produktów</h3>
            <ul>
                {cart.map((cartItem) =>
                    <li className="row">{cartItem.name}, cena: {cartItem.price}zł</li>
                )}
            </ul>
        </div>
    )
}

export default ProductsList;