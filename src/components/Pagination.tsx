


type paginationProps={
    postsPerPage:number,
    totalPosts:number
    setCurrentPage:(pageNumber: number) => void
}

const Pagination = ({postsPerPage,totalPosts,setCurrentPage}:paginationProps) => {
    const noOfPages=Math.ceil((totalPosts)/postsPerPage)
    const pages=[]

    for (let i=1;i<=noOfPages;i++){
        pages.push(i)
    }
  return (
    <div className="flex justify-center gap-6 mb-10 ">
      {pages.map((page)=>{
        return(
            <button className="px-3 py-2 rounded-lg border-2 border-black hover:bg-black hover:text-white" key={page} onClick={()=>{
                setCurrentPage(page)
            }}>{page}</button>
        )
      })}
    </div>
  )
}

export default Pagination
