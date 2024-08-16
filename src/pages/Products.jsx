import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useLoaderData } from "react-router-dom";


const Products = () => {
   const [recent,setRecent]=useState(false)
   const [categories,setCategorie]=useState('All')
    const [asc,setAsc]=useState(true)
    const [products, setProducts] = useState([]);
    const [search,setSearch]=useState('')
    const {count} =useLoaderData()
    const [currentPage,setCurrentPage]=useState(0)
    const itemPerPage=10;
    const numberOfPages =Math.ceil(count/itemPerPage)
    const pages =[...Array(numberOfPages).keys()]
    // for(let i=0;i<numberOfPages; i++){
    //     pages.push(i)
    // }
 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/products?page=${currentPage}&size=${itemPerPage}&search=${search}&sort=${asc?'asc':'des'}&recent=${recent?'new':'old'}&categories=${categories}`);
                setProducts(data); // Set the fetched data into the products state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [currentPage,itemPerPage,search,asc,recent,categories]);
    const handlePrevPage =()=>{
        if(currentPage>0){
            setCurrentPage(currentPage-1)
        }
    }
    const handleNextPage =()=>{
        if(currentPage < pages.length-1){
            setCurrentPage(currentPage+1)
        }
    }
    const handleSearch = e =>{
        e.preventDefault()
        const text = e.target.search.value 
        setSearch(text)
    }
    

  const handleCategoryName = e =>{
    setCategorie(e.target.value)
  }
    return (
        <div className="min-h-screen">
          <div className="mt-8 w-3/4 mx-auto flex">
            <div>
            <form onSubmit={handleSearch} action="" className="flex">
            <input
  type="text"
  name="search"
  placeholder="Type here"
  className="input input-bordered input-md w-full max-w-xs" />
  <input type="submit" value='Search' name="" id=""  className="btn bg-orange-300 ml-8"/>
            </form>
            </div>
            <div className="ml-6">
                <button onClick={()=>setAsc(!asc)} className="btn btn-primary">{asc?'Price: High To Low':'Price: Low To High'}</button>
                {/* <button onClick={()=>setRecent(true)} className="btn btn-secondary">Newest Product</button> */}
            </div>
            <div>
            <select onChange={handleCategoryName} value={categories} className="select select-bordered w-full max-w-xs">
           <option   value='All'>All</option>
           <option value='Phone'>Phone</option>
         <option value='Laptop'>Laptop</option>
         <option value='camera'>Camera</option>
       <option value="Smartwatch">Smartwatch</option>
       <option value="HeadPhone">HeadPhone</option>
       <option value="Speaker">Speaker</option>
</select>
            </div>
          </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 justify-center items-center p-6">{products.map(product=> <Card key={product._id} product={product}></Card>)}</div>
            <div className="pagination">
                <h2>current page {currentPage}</h2>
                <button onClick={handlePrevPage} className="btn bg-black text-white">Prev</button>
                {
                    pages.map(page =><button
                    onClick={()=>setCurrentPage(page)}
                         className={`btn bg-black text-white ${currentPage===page&&"bg-red-500"}`}
                          key={page}>{page}</button>)
                }
                <button onClick={handleNextPage} className="btn bg-black text-white">Next</button>

            </div>
        </div>
    );
};

export default Products;