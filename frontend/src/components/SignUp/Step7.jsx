import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
export default function SignUpStep7(props) {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm();
    const [ExistsUser, setExistsUser] = useState(false)
    const onSubmit = async (data) => {
        await axios.post("http://localhost:3002/ragisterUser", { ...(props.FinalDataForSignup), UserName: data.UserName });
    }
    async function CheckExistanceWithUerName(value) {
        let user = await axios.get('http://localhost:3002/user', { params: { UserName: value } });
        setExistsUser(user.data);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1 className="text-2xl capitalize">Choose UserName </h1>
                </div>
                <div className="mb-3 ">
                    <input type="text" id="SingnUpstep6Password" maxLength={18} aria-describedby="SingnUpstep6Password"
                        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="@username123"
                        {...register('UserName', { required: true, minLength: 3 })}
                        onBlur={e => { CheckExistanceWithUerName(e.target.value) }}
                    />
                    <div className="text-sm text-red-500">
                        {errors.UserName?.message}
                        {ExistsUser && <span> already exists please choose another</span>}
                    </div>
                </div>
                <div className='mt-24'>
                    <button className={`w-full py-2.5 font-semibold bg-blue-500 text-white  text-lg rounded-full text-center subpixel-antialiased active:bg-blue-700
                    ${(!isValid || ExistsUser) ? 'bg-blue-300' : 'bg-blue-500'}`}
                        disabled={!isValid || ExistsUser}>Create account</button>
                </div>
            </form>
        </>
    )
}