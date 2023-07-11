import Header from "./Components/Layout/Header";
import React, {useState } from "react";
import Meal from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
const[cartIsShown,setCartIsShown] = useState(false);

const showCartHandler =() =>{
  setCartIsShown(true);
};

const hideCartHandler = () =>{
  setCartIsShown(false);
};

  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
   <Header onShowCart={showCartHandler}/>
   <main>
    <Meal/>
   </main>
    </CartProvider >
  );
}

export default App;


