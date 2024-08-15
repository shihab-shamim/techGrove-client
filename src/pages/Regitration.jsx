import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const Regitration = () => {
    const {createUser}=useAuth()
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
                // Swal.fire({
                //     position: "top-end",
                //     icon: "error",
                //     title: `${error.message.split("/")[1].replace(")", "")}`,
                //     showConfirmButton: false,
                //     timer: 1500
                //   });
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
        </div>
    </div>
    );
};

export default Regitration;