import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const LogIn = () => {
    const navigate=useNavigate()
    const {logIn,googleLogIn}=useAuth()
    const handleSubmit =e =>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one special character.');
            return;
        }

        console.log({email,password})
        logIn(email,password)
        .then(result=>{
            console.log(result.user)
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
                    <h1 className="my-3 text-2xl font-bold">Please Sign in Your Account</h1>
                    <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
                </div>
                <form  onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="emailornumber" className="block mb-2 text-sm">Email</label>
                            <input
                            required
                               
                                type="text"
                                id="emailornumber"
                                placeholder="email"
                                name="email"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                style={{
                                    backgroundImage: 'url(chrome-extension://igkpcodhieompeloncfnbekccinhapdb/images/web_access/vault-input-disabled.svg)',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '14px',
                                    backgroundPosition: 'calc(100% - 3px) center',
                                    cursor: 'auto',
                                    backgroundClip: 'border-box'
                                }}
                                data-temp-mail-org="0"
                            />
                            
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input
                            required
                               
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                style={{
                                    backgroundImage: 'url(chrome-extension://igkpcodhieompeloncfnbekccinhapdb/images/web_access/vault-input-disabled.svg)',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '14px',
                                    backgroundPosition: 'calc(100% - 3px) center',
                                    cursor: 'auto',
                                    backgroundClip: 'border-box'
                                }}
                            />
                          
                        </div>
                    </div>
                  
                    <div className="space-y-2">
                        <div>
                            <input type="submit" value='Log in' className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50" />
                        </div>
<p className="px-6 text-sm text-center dark:text-gray-600">New Here? <span className="text-blue-600 font-bold"><Link to='/regitration'>Create an Account</Link></span>
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

export default LogIn;