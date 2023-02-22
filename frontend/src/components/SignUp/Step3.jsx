import right from "../../Images/right.svg";
export default function SignUpStep3(props) {
    return (
        <>
            <div className="my-7">
                <h1 className="text-3xl font-semibold first-letter:text-[32px]">
                    Create your account
                </h1>
            </div>
            <div className="relative my-5 ">
                <input
                    type="text"
                    id="SingnUpstep3Name"
                    value={props.UserdataConformation.FullName}
                    aria-describedby="SingnUpstep3Name"
                    className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    readOnly
                />
                <label
                    htmlFor="SingnUpstep3Name"
                    className="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Name
                </label>
                <label
                    htmlFor="SingnUpstep3Name"
                    className="absolute right-1 bottom-3"
                >
                    <img src={right} alt="" />
                </label>
            </div>
            {
                props.UserdataConformation?.Phone &&
                <div className="relative my-5 ">
                    <input
                        type="text"
                        id="SingnUpstep3Phone"
                        value={props.UserdataConformation?.Phone}
                        aria-describedby="SingnUpstep3Phone"
                        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        readOnly
                    />
                    <label
                        htmlFor="SingnUpstep3Phone"
                        className="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                        Phone
                    </label>
                    <label
                        htmlFor="SingnUpstep3Phone"
                        className="absolute right-1 bottom-3"
                    >
                        <img src={right} alt="" />
                    </label>
                </div>
            }
            {
                props.UserdataConformation?.Email &&
                <div className="relative my-5 ">
                    <input
                        type="text"
                        id="SingnUpstep3Email"
                        value={props.UserdataConformation?.Email}
                        aria-describedby="SingnUpstep3Email"
                        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        readOnly
                    />
                    <label
                        htmlFor="SingnUpstep3Email"
                        className="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                        Email
                    </label>
                    <label
                        htmlFor="SingnUpstep3Email"
                        className="absolute right-1 bottom-3"
                    >
                        <img src={right} alt="" />
                    </label>
                </div>
            }
            <div className="relative my-5 ">
                <input
                    type="text"
                    id="SingnUpstep3DateOfBirth"
                    value={props.UserdataConformation?.DOB}
                    aria-describedby="SingnUpstep3DateOfBirth"
                    className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    readOnly
                />
                <label
                    htmlFor="SingnUpstep3DateOfBirth"
                    className="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                    Date of birth
                </label>
                <label
                    htmlFor="SingnUpstep3DateOfBirth"
                    className="absolute right-1 bottom-3"
                >
                    <img src={right} alt="" />
                </label>
            </div>
            <div className="mt-20">
                <p className="text-sm text-gray-600">
                    By signing up, you agree to the
                    <span className="text-blue-500">
                        <a href="https://twitter.com/en/tos#new" target="_blank" rel="noopener noreferrer" >  Terms of Service  </a>
                    </span>
                    and
                    <span className="text-blue-500">
                        <a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" > Privacy Policy</a>

                    </span>,
                    including
                    <span className="text-blue-500">
                        <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies" target="_blank" rel="noopener noreferrer" >  Cookie Use </a>
                    </span>
                    . Twitter may use your contact information,
                    including your email address and phone number for purposes outlined
                    in our Privacy Policy, like keeping your account secure and
                    personalising our services, including ads.
                    <span className="text-blue-500">
                        <a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" >  Learn more </a>

                    </span>. Others will
                    be able to find you by email or phone number, when provided, unless
                    you choose otherwise
                    <span className="text-blue-500">
                        <a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" > here </a>
                    </span>.
                </p>
            </div>
            <div className='mt-6 px-4'>
                <button className="w-full py-2.5 font-semibold bg-blue-500 text-lg text-white rounded-full text-center subpixel-antialiased active:bg-blue-700"
                    onClick={e => { e.preventDefault(); props.handleSignupCallback(4); }}
                >Sign up</button>
            </div>
        </>
    );
}
