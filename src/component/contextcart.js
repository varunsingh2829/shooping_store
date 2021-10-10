import React, {useContext} from 'react';
import { CartContext } from './cart';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Item from './item';


const Contextcart = () => {
    const {item,clear,totalitems,totalamount} = useContext(CartContext);
    
    return (
        <div>
            
           <header className="bg-light navbar">
               <div className="continue_shopping ">
                   <img src="https://www.pngarts.com/files/2/Left-Arrow-PNG-Free-Download.png"   alt="arrow" className="arrow_icon"/>
                   <h3>continue shopping</h3>

               </div>
               <div className="cart_icons">
                   <img src="https://maxcdn.icons8.com/Share/icon/nolan/Shopping/shopping_cart1600.png"  alt="cart" className="cart_icon"/>
                   <p className="totalnumber">{totalitems}</p>

               </div>

               </header> 
               <section className="main_cart_section">
                   <h1>shopping cart</h1>
                   <p className="total_items">you have <span className="total_items_count">{totalitems}</span> item in shopping cart</p>
                   <div className="cart_items">
                   <div className="cart_items_container">
                           <Scrollbars style={{ width: 1300}} >
                               
                               {
                                   item.map((curItem) => {
                                       return (
                                        <Item key = {curItem.id} {...curItem}/>

                                       )
                                           
                                           
                                   })
                               }
                               </Scrollbars>
                               

                           

                   </div>
                           
                   </div>
                   
                               
                       
                       <div className="cart_total">
                           <h3>cart total : <span>{totalamount}₹</span></h3>
                           <button className="checkout">buy</button>
                       </div>
                       <div className="clear_cart">
                           
                           <button className="clearout" onClick = {clear}>clear</button>
                       </div>


               </section>
        </div>
    )
}

export default Contextcart
