import React, {useContext} from 'react';
import {CartContext}  from './cart';


const Item = ({id,title,description,price,img,amount}) => {

    const { removeItem,inc,dec } = useContext(CartContext);
    return (
        <>
          <div className="items_info">
                               <div className="product_img">
                                   <img src={img}  alt="product"/>
                               </div>
                               <div className="title">
                                   <h2>{title}</h2>
                                   <p>{description}</p>
                               </div>
                               <div className="add-minus-quantity">
                               <i className="fas fa-minus minus" onClick = {() => dec(id)}></i>
                                   <input type="text" className="input" placeholder={amount}/>
                                   <i className="fas fa-plus add"  onClick = {() => inc(id)} ></i>
                               </div>
                               <div className="price">
                                   <h3>{price}<span>₹</span></h3>
                               </div>
                               <div className="remove-items">
                                   <i className="fas fa-trash-alt remove" onClick = {() => removeItem(id)}></i>
                               </div>
                               <hr/>  
                               </div>
        </>
    )
}

export default Item
