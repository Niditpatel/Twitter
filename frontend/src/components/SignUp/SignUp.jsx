import { Link } from 'react-router-dom';
export default function SignUp(props) {
    return (
        <div className='sm:w-[364px] mx-auto h-full'>
            <div className='my-5'>
                <h1 className="text-2xl font-semibold text-center sm:text-left sm:pl-3 tracking-wide  capitalize">join  twitter  today</h1>
            </div>
            <div className='my-5'>
                <button className="flex space-x-4 justify-center  text-small border rounded-full w-full  py-1 hover:bg-blue-50 hover:border-blue-200">
                    <span className="py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
                            <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" /><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" /><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" /><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
                        </svg>
                    </span>
                    <p className="text-sm align-bottom py-1 text-gray-700 ">Sign up with Google</p>
                </button>
            </div>
            <div className='mt-5'>
                <button className="flex space-x-4  justify-center  text-small border rounded-full w-full  py-1 hover:bg-gray-100 hover:border-gray-300">
                    <span className="my-auto h-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" data-name="Layer 1" viewBox="0 0 24 24">
                            <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
                        </svg>
                    </span>
                    <p className="text-sm align-bottom py-1 text-blck ">Sign up with Apple</p>
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
                <button className="w-full py-1.5 px-5 tracking-wide first-letter:uppercase font-semibold bg-black  text-white rounded-full text-center subpixel-antialiased truncate active:bg-gray-700" onClick={e => { e.preventDefault(); props.handleSignupCallback(1) }}>sign up with the phone number or email address</button>
            </div>
            <div className='my-2' >
                <p className="text-sm whitespace-pre-wrap break-words tracking-wide">
                    By signing up, you agree to the
                    <span className="text-blue-600">
                        <a href="https://twitter.com/en/tos" target='_blank' rel='noopener noreferrer' > Terms of Service </a>
                    </span>
                    and
                    <span className="text-blue-600">
                        <a href="https://twitter.com/en/privacy" target='_blank' rel='noopener noreferrer'> Priveacy Policy</a>
                    </span>
                    , including
                    <span className="text-blue-600">
                        <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies" target='_blank' rel='noopener noreferrer'> Cookie Use </a>
                    </span>
                </p>
            </div>
            <div className="mt-5">
                <span className="text-gray-600 ">Have an account already? <span className="text-blue-600"><Link to='/i/flow/login'>Log in</Link></span> </span>
            </div>
        </div>
    )
}