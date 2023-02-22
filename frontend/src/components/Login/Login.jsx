import { Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
export default function Login(props) {
    const [LoginData, setLoginData] = useState("");
    const PhonePattern = new RegExp(/[6-9]{1}[0-9]{9}/);
    const EmailPattern = new RegExp(/^[\w -\.]+@([\w-]+\.)+(com|net)/)


    async function checkForAccount() {
        if (EmailPattern.test(LoginData)) {
            const data = await axios.get("http://localhost:3002/user", { params: { Email: LoginData } });
            if (data.data) {
                props.HandleLoginData({ Email: LoginData });
                props.HandleLoginStep(1);
            } else {
                alert("sorry we don't able to find you ")
            }
        }
        else if (PhonePattern.test(LoginData)) {
            const data = await axios.get("http://localhost:3002/user", { params: { Phone: LoginData } });
            if (data.data) {
                props.HandleLoginData({ Phone: LoginData });
                props.HandleLoginStep(1);
            } else {
                alert("sorry we don't able to find you ")
            }
        } else {
            const data = await axios.get("http://localhost:3002/user", { params: { UserName: LoginData } });
            if (data.data) {
                props.HandleLoginData({ UserName: LoginData });
                props.HandleLoginStep(1);
            } else {
                alert("sorry we don't able to find you ")
            }
        }
    }

    return (
        <>
            <div className='w-[300px] sm:w-[364px] mx-auto bg-white'>
                <div className='my-5'>
                    <h1 className="text-2xl font-semibold  tracking-wide  capitalize">sign in to  twitter </h1>
                </div>
                <div className='my-5'>
                    <button className="flex space-x-4 justify-center  text-small border rounded-full w-full  py-1 hover:bg-blue-50 hover:border-blue-200">
                        <span className="py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
                                <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" /><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" /><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" /><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
                            </svg>
                        </span>
                        <p className="text-sm align-bottom py-1 text-gray-700 ">Sign in with Google</p>
                    </button>
                </div>
                <div className='mt-5'>
                    <button className="flex space-x-4  justify-center  text-small border rounded-full w-full  py-1 hover:bg-gray-100 hover:border-gray-300">
                        <span className="my-auto h-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" data-name="Layer 1" viewBox="0 0 24 24">
                                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
                            </svg>
                        </span>
                        <p className="text-sm align-bottom py-1 text-blck ">Sign in with Apple</p>
                    </button>
                </div>
                <div className='flex space-x-2 my-2'>
                    <span className="w-full" >
                        <div className="border-b pt-3"></div>
                    </span>
                    <span className="">or</span>
                    <span className="w-full" >
                        <div className="border-b pt-3"></div>
                    </span>
                </div>
                <div className='mt-2'>
                    <div className="relative mb-3 ">
                        <input type="text" id="floatingInputForLoginVariants" aria-describedby="floatingInputForLoginVariants"
                            className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            onChange={e => { setLoginData(e.target.value) }}
                        />
                        <label htmlFor="floatingInputForLoginVariants" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"><span className='truncate'>Phone, email address, or username</span></label>
                    </div>
                </div>
                <div className='my-5'>
                    <button className="w-full py-1.5 font-semibold bg-black  text-white rounded-full text-center subpixel-antialiased active:bg-gray-700"
                        disabled={LoginData.length < 1}
                        onClick={e => {
                            e.preventDefault();
                            checkForAccount();
                        }}
                    >Next</button>
                </div>
                <div className='my-5' >
                    <button className="w-full py-1.5 font-semibold border  rounded-full text-center subpixel-antialiased active:bg-gray-200">Forgot password?</button>
                </div>
                <div>
                    <span className="text-gray-600 ">Don't have an account? <span className="text-blue-600"><Link to='/i/flow/signup'>Sign up</Link></span> </span>
                </div>
            </div>
        </>
    )
}