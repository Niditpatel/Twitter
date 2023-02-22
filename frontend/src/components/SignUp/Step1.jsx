import { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';


//  schema validation of usersignup details for forntend  
const UserSignupstep1Schema = yup.object().shape({
    FullName: yup.string().max(50).required('fullname is required'),
    Phone: yup.string().when('Email', {
        is: (Email) => !Email || Email.length === 0,
        then: yup.string().required('Phone is required').matches(/[6-9]{1}[0-9]{9}/, 'phone number is not valid').min(10, 'Minimum 10 number is required').max(10, 'maximum 10 number is allowed'),
        otherwise: yup.string().matches(/[6-9]{1}[0-9]{9}/, 'phone number is not valid').min(10, 'Minimum 10 number is required').max(10, 'maximum 10 number is allowed')
    }),
    Email: yup.string().when('Phone', {
        is: (Phone) => !Phone || Phone.length === 0,
        then: yup.string().email().required(),
        otherwise: yup.string().email()
    }),
    DOB: yup.string().required('date of birth is required')
},
    [['Email', 'Phone']]);


export default function SignUpStep1(props) {
    const [ToggleforchaneInputVarient, setToggleforchaneInputVarient] = useState({ Visibility: 0, innertext: 'use Email instead' });
    const [WordCountForFullName, setWordCountForFullName] = useState(0)
    const [ExistsUser, setExistsUser] = useState(false)
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(UserSignupstep1Schema)
    });

    const onSubmit = data => {
        console.log(data);
        props.handleSignupCallbackForData(data);
        props.handleSignupCallback(2);
    };

    // change the choice of user for enter Email or Phone
    function ToggleInput() {
        if (ToggleforchaneInputVarient.Visibility === 0) {
            setToggleforchaneInputVarient({ Visibility: 1, innertext: 'use Phone instead' })
        } else {
            setToggleforchaneInputVarient({ Visibility: 0, innertext: 'use Email instead' })
        }
    }

    // Check for Already Exists Account 
    async function FilterUsers(value, Field) {
        if (Field === "Phone") {
            let User = await axios.get('http://localhost:3002/user', { params: { Phone: value } })
            setExistsUser(User.data);
        } else if (Field === "Email") {
            let User = await axios.get('http://localhost:3002/user', { params: { Phone: value } })
            setExistsUser(User.data);
        } else {
            setExistsUser(false)
        }
        console.log(ExistsUser);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='my-7'>
                    <h1 className="text-4xl first-letter:uppercase font-medium">Create your account</h1>
                </div>
                <div className="relative mb-5 ">
                    <input type="text" id="SingnUpstep1Name" aria-describedby="SingnUpstep1Name" maxLength={50}
                        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        {...register('FullName')}
                        onChange={(e) => setWordCountForFullName((e.target.value).length)}
                    />
                    <label htmlFor="SingnUpstep1Name" className="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Name
                    </label>
                    <label htmlFor="" className="absolute text-gray-500 dark:text-gray-400  top-1 hidden peer-focus:block z-10 origin-[0] right-2.5">{WordCountForFullName}/50</label>
                    <div className='text-sm tracking-wide text-red-500'> <span>{errors.FullName?.message}</span></div>
                </div>
                {
                    ToggleforchaneInputVarient.Visibility === 0 &&
                    <div className="relative mb-3 ">
                        <input type="text" id="SingnUpstep1Phone" aria-describedby="SingnUpstep1Phone"
                            className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            {...register('Phone')}
                            onBlur={(e) => FilterUsers(e.target.value, "Phone")}
                        />
                        <label htmlFor="SingnUpstep1Phone" className="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                            Phone
                        </label>
                        <div className='text-sm tracking-wide text-red-500'>
                            {errors.Phone?.message}
                            {ExistsUser && <span> Already taken  Use Different </span>}
                        </div>
                    </div>
                }
                {
                    ToggleforchaneInputVarient.Visibility === 1 &&
                    <div className="relative mb-3 ">
                        <input type="text" id="SingnUpstep1Email" aria-describedby="SingnUpstep1Email"
                            className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            {...register('Email')}
                            onBlur={(e) => FilterUsers(e.target.value, "Email")}
                        />
                        <label htmlFor="SingnUpstep1Email" className="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                            Email
                        </label>
                        <div className='text-sm tracking-wide text-red-500'>
                            {errors.Email?.message}
                            {ExistsUser && <span> Email has already been taken. </span>}
                        </div>
                    </div>
                }
                <div className='flex justify-end'>
                    <button className="text-blue-600 active:underline " onClick={e => { e.preventDefault(); ToggleInput(); }}> {ToggleforchaneInputVarient.innertext}</button>
                </div>
                <div className='my-3'>
                    <h1 className='font-medium'>Date of birth</h1>
                    <p className='text-sm text-gray-600'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                    </p>
                </div>
                <div className="relative mb-3 ">
                    <input type="text" id="SingnUpstep1Date" onFocus={e => e.target.type = 'date'}
                        aria-describedby="SingnUpstep1Date"
                        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        {...register('DOB')}
                        onBlur={e => e.target.type = "text"}
                    />
                    <label htmlFor="SingnUpstep1Date" className="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Date of birth
                    </label>
                    <div className='text-sm tracking-wide text-red-500'>
                        {errors.DOB?.message}
                    </div>
                </div>
                <div className='mt-10 px-4'>
                    <button
                        type="submit"
                        className={`w-full py-2.5 font-semibold  text-lg text-white rounded-full text-center subpixel-antialiased active:bg-gray-700
                        ${(!isValid || ExistsUser) ? 'bg-gray-600' : 'bg-black'}`}
                        disabled={!isValid || ExistsUser}
                    > Next</button>
                </div>
            </form>
        </>
    )
}