import { Link } from "react-router-dom";


const Gallary = () => {
    return (
        <div>
            <h1 className="text-xl font-bold text-center">Featured Products</h1>
            <div className="grid grid-cols-2 md:grid-cols-3">
                <div className="w-36"><img src="https://i.ibb.co/qWXDVNz/havit-h2011d-pro-over-ear-black-wired-rgb-gaming-11664098789.webp" alt="" /></div>
                <div className=""><img src="https://i.ibb.co/dB5cWKp/download-1.jpg" alt="" /></div>
                <div className=""><img src="https://i.ibb.co/mF1x9pv/images.jpg" alt="" /></div>
                <div className=""><img src="https://i.ibb.co/Mg4pWtp/download.jpg" alt="" /></div>
                <div className=""><img src="https://i.ibb.co/p2GPW1L/download-2.jpg" alt="" /></div>
                <div className=""><img src="https://i.ibb.co/dPkDcWf/download-3.jpg" alt="" /></div>

            </div>
           <div className="flex justify-center items-center mb-12">
           <Link to='/products'><a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500  shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
All Products
</span>
<span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">All Products</span>
<span class="relative invisible">All Products</span>
</a></Link>
           </div>
            
        </div>
    );
};

export default Gallary;