import React, { useState } from "react";
import ProductData from "./data.json";
import ProductList from "./Components/ProductList";
import "./App.css";
import YourCart from "./Components/YourCart";
import OrderModel from "./Components/OrderModel";

const App = () => {
  const [addtocart, setaddtocart] = useState([]);
  const [isModelOpen, setisModelOpen] = useState(false)

  const handleButton = (products) => {
   
    const isExist=addtocart.find((item)=>item.name===products.name);
  if(isExist){
    const updateData = addtocart.map((item)=>item.name===products.name ? {...item ,quantity:item.quantity+1} :item)

    setaddtocart(updateData);
  }
  else{
   setaddtocart([...addtocart,{...products ,quantity:1}]);
  }

  };

  const handleIncreament=(products)=>{
  
        const update=addtocart.map((item)=>item.name===products.name ? {...item,quantity:item.quantity+1} :item)
 

    setaddtocart(update)


  }

 const handleDecrement = (products) => {
  const update = addtocart
    .map((item) =>
      item.name === products.name ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);

  setaddtocart(update);
};


const handleDelete=(item)=>{
  
   
  const updateDelete= addtocart.filter((del)=>item.name!==del.name);
  setaddtocart(updateDelete);
   


}





 const  modelOpen=()=>{
  setisModelOpen(true);
 }

    const startNewOrder =()=>{
      setaddtocart([]);
      setisModelOpen(false);
    }


  return (
    <main className="app-container">
      
      <ProductList  
         addtocart={addtocart}
       handleIncreament={handleIncreament}
        handleDecrement={handleDecrement} 
        handleButton={handleButton} 
        products={ProductData} />
      <YourCart  modelOpen={modelOpen} handleDelete={handleDelete} cart={addtocart} />
      
        {isModelOpen && <OrderModel cart={addtocart}  startNewOrder={startNewOrder} />}

     

    
    </main>
  );
};

export default App;