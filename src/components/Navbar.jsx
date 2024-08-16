import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const Navbar = () => {
  const {user,logOut}=useAuth()
    const navlink = <>
    <NavLink to='/'><li><a>Home</a></li></NavLink>
    <NavLink to='/products'><li><a>All Categories</a></li>  </NavLink>
  
    </>
    const handleLogOut =()=>{
      logOut()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `log out success`,
        showConfirmButton: false,
        timer: 1500
      });
    }
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {navlink}
      </ul>
    </div>
    <a className=" "><img src="https://i.ibb.co/dW4g6W2/download.png" alt="TechGrove" className="w-28 btn" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlink}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <Link to='/regitration'><a className="btn">Registration</a></Link>  */}
    {user?<a onClick={handleLogOut} className="btn">LogOut</a> :<Link to='/regitration'><a className="btn">Registration</a></Link> }
  </div>
</div>
    );
};

export default Navbar;