import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";


type CartItem = {
    id: number
    quantity: number
  }
type ShoppingCartContextProps={
    getItemQuantity:(id:number)=>number;
    incrementProduct : (id:number) =>void;
    decrementProduct : (id:number) =>void;
    removeFromCart :(id:number)=>void;
    cartItems:CartItem[];
    cartQuantity:number
  
  }



const ShoppingCartContext=createContext({} as ShoppingCartContextProps )

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}


type ShoppingCartProviderProps = {
    children: ReactNode
  }

export const ShoppingCartProvider=({children}:ShoppingCartProviderProps)=>{
    const [cartItems,setCartItems]=useLocalStorage<CartItem[]>(
        "shopping-cart",
        []
      )
    const getItemQuantity=(id:number)=>{
        return (
          cartItems.find(cartItem=>cartItem.id===id)?.quantity || 0
        )
      }
    const incrementProduct=(id:number)=>{
        console.log("cart Items are",cartItems)        
        setCartItems(currItems=>{
          if(currItems.find(item=>item.id===id)==null){
            return [...currItems,{id,quantity:1}]
          }else{
            return currItems.map((item)=>{
            if(item.id===id){
              return {...item,quantity:item.quantity+1}
            }
            else{
              return item
            }
            })
          }
      })
    
    
    }
    const decrementProduct=(id:number)=>{
      setCartItems(currItems=>{
        if(currItems.find(item=>item.id===id)?.quantity===1){
          return currItems.filter(item =>item.id!==id)
        }else{
          return currItems.map((item)=>{
          if(item.id===id){
            return {...item,quantity:item.quantity-1}
          }
          else{
            return item
          }
          })
        }
      })
      
    }
    const removeFromCart=(id:number)=>{
      setCartItems(cartItems=>{return cartItems.filter(item=>item.id!==id)})
      
    }
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      )
          
      

    return(
<ShoppingCartContext.Provider value={{getItemQuantity,incrementProduct,decrementProduct,removeFromCart,cartItems,cartQuantity}}>
    {children}
</ShoppingCartContext.Provider>
    )
    
}