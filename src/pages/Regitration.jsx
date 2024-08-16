import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const Regitration = () => {
    const navigate=useNavigate()
    const {createUser,googleLogIn}=useAuth()
    const handleSubmit= e =>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value
        const password = form.password.value 
        const confirmPasword =form.ConfirmPassword.value
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            return Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Password must8 characters  one uppercase , one lowercase , and one special character",
                showConfirmButton: false,
                timer: 1500
              });
        }
        if(password !== confirmPasword){
           return Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Password not match",
                showConfirmButton: false,
                timer: 1500
              });
        }
      
            createUser(email,password)
            .then(result=>{
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Log in success`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
            })
            
        .catch (error=> {
            // console.log(error.message.split("/")[1].replace(")", ""))
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${error.message.split("/")[1].replace(")", "")}`,
                showConfirmButton: false,
                timer: 1500
              });
            
        })

    }
    const handleGoogleLogIn =()=>{
        googleLogIn()
        .then(result=>{
           Swal.fire({
               position: "top-end",
               icon: "success",
               title: `log in success`,
               showConfirmButton: false,
               timer: 1500
             });
             navigate('/')
        })
        .catch(error=>{
           Swal.fire({
               position: "top-end",
               icon: "error",
               title: `${error.message.split("/")[1].replace(")", "")}`,
               showConfirmButton: false,
               timer: 1500
             });
        })

   }
    return (
        <div className="container mx-auto flex justify-center items-center mt-12 md:mt-36">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-2xl font-bold">Please Register Your Account</h1>
            </div>
            <form onSubmit={handleSubmit}  className="space-y-12">
                <div className="space-y-4">
                   
                   
                    <div>
                        <label htmlFor="emailOrNumber" className="block mb-2 text-sm">Email </label>
                        <input
                            
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                         
                    </div>
                    <div>
                        <label htmlFor="pin" className="block mb-2 text-sm">Password</label>
                        <input
                         required
                            type="password"
                            name="password"
                            placeholder="*****"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                          
                    
                    </div>
                    <div>
                        <label htmlFor="pin" className="block mb-2 text-sm">ConfirmPassword</label>
                        <input
                             required
                            type="password"
                            name="ConfirmPassword"
                            placeholder="*****"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                          
                    
                    </div>
                    
                </div>
                <div className="space-y-2">
                    <div>
                        <input type="submit" value='Registration' className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 cursor-pointer"/>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">
                        Already Have an Account? <span className="text-blue-600 font-bold"><Link to='/login'>Log in</Link></span>
                    </p>
                </div>
            </form>
            <div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-sm dark:text-gray-600">Login with google accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
	</div>
    <div className="flex justify-center space-x-4">
		<button onClick={handleGoogleLogIn} aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
		
		
	</div>
        </div>
    </div>
    );
};

export default Regitration;