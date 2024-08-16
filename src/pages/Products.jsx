import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useLoaderData } from "react-router-dom";


const Products = () => {
    const [products, setProducts] = useState([]);
    const {count} =useLoaderData()
    const [currentPage,setCurrentPage]=useState(0)
    const itemPerPage=10;
    const numberOfPages =Math.ceil(count/itemPerPage)
    const pages =[...Array(numberOfPages).keys()]
    // for(let i=0;i<numberOfPages; i++){
    //     pages.push(i)
    // }
    console.log(pages)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/products?page=${currentPage}&size=${itemPerPage}`);
                setProducts(data); // Set the fetched data into the products state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [currentPage,itemPerPage]);
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

    // console.log(products); // Log the current state of products
    return (
        <div className="min-h-screen">
          <div>
          <fieldset className="w-full space-y-1 dark:text-gray-800">
	<label htmlFor="Search" className="hidden">Search</label>
	<div className="relative">
		<span className="absolute inset-y-0 left-0 flex items-center pl-2">
			<button type="button" title="search" className="p-1 focus:outline-none focus:ring">
				<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
					<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
				</svg>
			</button>
		</span>
		<input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
	</div>
</fieldset>
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