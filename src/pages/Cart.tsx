
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItem from '../components/CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import Items from '../data/Items';
import { useNavigate } from 'react-router';
const Cart = () => {
    const { cartItems} = useShoppingCart();
    const navigate=useNavigate()
  
    // Load cart items from local storage on component mount

  
    return (
      <div className=' container mt-10 ml-10 mr-4 border-2 border-black px-10 py-10'>
        <h1 className='flex font-bold text-4xl  justify-center px-4 py-4 '>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
            <>
            <div className='flex flex-col gap-2'>
            {cartItems.map((cartItem) => (
                <CartItem id={cartItem.id} quantity={cartItem.quantity}/>

            ))}
            </div>
            <div className='flex flex-col gap-3 justify-end mt-10 font-serif text-xl'>
            <div className='flex-1 items-center ml-auto'>
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = Items.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
              </div>  
            
            <div className='flex-1 justify-end items-end  ml-auto'>
            <button className='btn bg-blue-500 rounded-xl px-2 py-2 mr-4 text-white' onClick={()=>{navigate("/store")}} >Continue Shopping </button>
            <button className='btn bg-slate-400 ml-4 px-2 py-2 text-white rounded-xl '>Proceed to Checkout </button>

            </div>
                        </div>
            </>
            
          
        )}
      </div>
    );
  };
  
  export default Cart;