export default function SignUpStep2(props) {
    return (
        <>
            <div className="my-7">
                <h1 className="text-3xl font-semibold"> Customise your experience</h1>
            </div>
            <div className="my-3">
                <p className="text-lg font-semibold tracking-wider">
                    {" "}
                    Track where you see Twitter content across the web
                </p>
            </div>
            <div className="flex space-x-5">
                <p className="font-thin text-base antialiased tracking-wide">
                    Twitter uses this data to personalise your experience. This web
                    browsing history will never be stored with your name, email, or
                    phone number.
                </p>
                <div className="">
                    <div className="flex justify-center p-2  rounded-full   focus-within:bg-blue-200 ">
                        <input type="checkbox" className="h-5 w-5 " name="" id="" />
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <p className=" text-sm text-gray-700">
                    By signing up, you agree to our{" "}
                    <span className="text-blue-700">
                        <a href="https://twitter.com/en/tos#new" target='_blank' rel="noopener noreferrer">Terms</a>href                   </span>,
                    <span className="text-blue-700">
                        <a href="https://twitter.com/en/privacy" target='_blank' rel="noopener noreferrer">Privacy Policy</a>href                   </span> and{" "}
                    <span className="text-blue-700">
                        <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies" target='_blank' rel="noopener noreferrer"> Cookie Use</a>href                   </span>
                    . Twitter may use
                    your contact information, including your email address and phone
                    number for purposes outlined in our Privacy Policy.{" "}
                    <span className="text-blue-700">
                        <a href="https://twitter.com/en/privacy" target='_blank' rel="noopener noreferrer">Learn more</a>href                   </span>
                </p>
            </div>
            <div className='mt-24 px-4'>
                <button className="w-full py-2.5 font-semibold bg-black text-lg text-white rounded-full text-center subpixel-antialiased active:bg-gray-700"
                    onClick={e => { e.preventDefault(); props.handleSignupCallback(3); }}>Next</button>
            </div>
        </>
    );
}
