
import Items from '../data/Items';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  
  const { removeFromCart } = useShoppingCart();
  const item = Items.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <div className='flex flex-row container justify-evenly items-center border-2 px-5 py-5'>
      <div className='flex-1'>
        <img src={item.imgUrl} alt="Product" className="w-28 h-28 object-cover rounded-xl" />
        
      </div>
      <div className='flex-1 gap-4 font-serif'>
        <h3 className="text-3xl text-blue-600 mb-6">{item.name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Price:{formatCurrency(item.price)}</p>
      </div>
      <div className='flex-1 font-serif items-end'>
        {/* Fix the calculation of the total price */}
        <p>Total: {formatCurrency(item.price * quantity)}</p>
      </div>
      
      <div className='flex-1 font-serif ml-auto'>
      <button className='hover:text-red-600' onClick={()=>removeFromCart(id)}>x</button> 
      </div>
    </div>

    
  );
};

export default CartItem;
