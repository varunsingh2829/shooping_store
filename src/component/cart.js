import React, {createContext,useReducer, useEffect} from 'react';
import {products} from './products.js';
import Contextcart from './contextcart.js';
import { reducer } from './reducer.js';
import "./cart.css";
export const CartContext = createContext();

const initialState ={
    item: products,
    totalamount :0,
    totalitems: 0,

};
const Cart = () => {

//  const [itm, setItem] = useState(products);
const [state, dispatch] = useReducer(reducer, initialState);

//to delete the indi item cart
const  removeItem =  (id) => {
    return dispatch({
        type: "remove_item",
        payload: id
    }

    );
};
//clear cart
const  clear =  () => {
    return dispatch({
        type: "clear_cart",
        
    }

    );
};
const  inc =  (id) => {
    return dispatch({
        type: "increment",
        payload: id,
        
    }

    );
};
const  dec =  (id) => {
    return dispatch({
        type: "decrement",
        payload: id,
        
    }

    );
};
//we will use useeffect hooks
useEffect(() => {
    dispatch({type: "get_total"});
    
}, [state.item]);


    return (
        <CartContext.Provider value ={{...state, removeItem ,clear ,inc,dec}}>
            <Contextcart/>
            </CartContext.Provider>
        
        
    )
}

export default Cart
