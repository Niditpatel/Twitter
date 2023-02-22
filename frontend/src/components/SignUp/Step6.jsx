import { useForm } from "react-hook-form";
export default function SignUpStep6(props) {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm();
    const onSubmit = data => {
        console.log(data)
        props.handleSignupCallbackForPassword(data)
        props.handleSignupCallback(7)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1 className="text-2xl capitalize">you  have to create strong password </h1>
                </div>
                <div className="relative mb-3 ">
                    <input type="text" id="SingnUpstep6Password" maxLength={18} aria-describedby="SingnUpstep6Password"
                        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        {...register('Password', { required: true, minLength: 3 })}
                        placeholder=" " />
                    <label htmlFor="SingnUpstep6Password" className="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Password
                    </label>
                    <div>{errors.Password?.message}</div>
                </div>
                <div className='mt-24'>
                    <button
                        type="submit"
                        className={`w-full py-2.5 font-semibold  text-white  text-lg rounded-full text-center subpixel-antialiased active:bg-blue-700
                    ${!isValid ? 'bg-blue-300' : 'bg-blue-500'}`}>Submit</button>
                </div>
            </form>
        </>
    )
}