

export default function SignUpStep5(props) {

    return (
        <>
            <div className="mt-4">
                <h1 className="text-4xl font-medium">
                    We sent you a code
                </h1>
                <p className="text-sm text-gray-500 mt-2 ">Enter it below to verify your Account </p>
            </div>
            <div className="relative mt-4 ">
                <input type="text" id="SingnUpstep5VerificationCode" maxLength={4} aria-describedby="SingnUpstep5VerificationCode" className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={e => { e.target.value = e.target.value.replace(/\D/g, '') }}
                />
                <label htmlFor="SingnUpstep5VerificationCode" className="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Verification Code
                </label>
            </div>
            <div>
                <button className="text-sm text-blue-500 active:underline">did't recived send again</button>
            </div>
            <div className='mt-24'>
                <button className="w-full py-2.5 font-semibold bg-blue-500 text-white  text-lg rounded-full text-center subpixel-antialiased active:bg-blue-700"
                    onClick={e => {
                        e.preventDefault();
                        props.handleSignupCallback(6)
                    }}
                >Submit </button>
            </div>
        </>
    )
}