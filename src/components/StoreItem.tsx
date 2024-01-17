import { formatCurrency } from "../utilities/formatCurrency";

import { useShoppingCart } from "../context/ShoppingCartContext";
import { useEffect } from "react";


type StoreItemProps={
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem = ({id,name,price,imgUrl}:StoreItemProps) => {

    useEffect(()=>{
      if (!localStorage.getItem('shopCart')){
        localStorage.setItem("shopCart", JSON.stringify([]))
      }
      
    })


  
  const {getItemQuantity,incrementProduct,decrementProduct,removeFromCart}=useShoppingCart()



  const quantity=getItemQuantity(id);
  return (
    <div key={id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={imgUrl} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">{formatCurrency(price)}</p>
                   {quantity ? 
                    (<div className="flex flex-col  ml-auto gap-2">
                      <div className="flex flex-col-1 flex-row  gap-2">
                    <div className="flex-1">                    
                    <button  className="w-6 h-6 bg-blue-400 text-white" onClick={()=>incrementProduct(id)}>+</button>
                    </div>
                    <div className="flex-1">                    
                    <p className="w-6 h-6 bg-white text-black justify-center">{getItemQuantity(id)}</p>
                    </div>
                    <div className="flex-1">                    
                    <button  className="w-6 h-6 bg-blue-400 text-white" onClick={()=>decrementProduct(id)}>-</button>
                    </div>
                   </div>
                    <div  className="flex flex-col-1"><button  className="bg-red-500 text-white px-2 py-2 rounded-lg " onClick={()=>removeFromCart(id)}>Remove</button></div>
                    </div>
 )                   
                   :(
                    <button  className="ml-auto border rounded-2xl bg-blue-500 hover:bg-blue-800  text-white px-2 py-1 border-black" onClick={() => incrementProduct(id)}> Add</button>
)
                   } 
                  
                </div>
            </div>
        
    </div>
  )
}

export default StoreItem;
