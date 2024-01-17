import { useShoppingCart } from "../context/ShoppingCartContext"

const NavBar = () => {
  const {cartQuantity}=useShoppingCart()
  return (
    
    <nav className="flex flex-wrap justify-between gap-10 py-4 px-3 bg-slate-500 text-white ">
      <p className="mt-4 font-serif text-2xl mr-auto">CryptoMe</p>
      <a href="/" className="mt-4 ">Home</a>
      <a href="/store" className="mt-4 ">Store</a>
      
     
      <a href="/cart"><button className="py-4 ml-auto px-1 relative border-2 border-transparent text-white rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Cart">
  <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </svg>
  <span className="absolute inset-0 object-right-top -mr-6">
    {/* <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
      6
    </div> */}
  </span>{cartQuantity ?<p>{cartQuantity}</p> : null}
</button></a>

      
    </nav>
  )
}

export default NavBar