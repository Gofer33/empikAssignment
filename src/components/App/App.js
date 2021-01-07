import React from 'react';
import './App.css';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "../../store/reducers/reducer";
import {Provider} from 'react-redux';
import ProductsList from "../ProductsList";

const App = () => {
    const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(thunk),
    ));

    return (
        <Provider store={store}>
            <ProductsList/>
        </Provider>
    );
};

export {
    App
};
