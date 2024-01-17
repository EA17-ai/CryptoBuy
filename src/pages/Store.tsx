import Items from "../data/Items"
import StoreItem from "../components/StoreItem"
import { useState } from "react"
import Pagination from "../components/Pagination"







const Store = () => {
  const [currentPage,setCurrentPage]=useState(2)
  const [postsPerPage]=useState(8)


  const lastpostIndexInPage=currentPage*postsPerPage;
  const firstpostIndexInpage=lastpostIndexInPage-postsPerPage
  const currentItemsInPage=Items.slice(firstpostIndexInpage,lastpostIndexInPage)
  
  


  return (
    <>
    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      
        
      {currentItemsInPage.map((item )=>{return (<StoreItem id={item.id} name={item.name} imgUrl={item.imgUrl} price={item.price} />)})}  

      
    </div>
    <div className=" mt-10">
    <Pagination postsPerPage={postsPerPage} totalPosts={Items.length} setCurrentPage={setCurrentPage}/>

    </div>
    </>
  )
}

export default Store
