import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
    return (
        <div  className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <h2>footer</h2>
            
        </div>
    );
};

export default Main;