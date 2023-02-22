import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import axios from 'axios';
export default function Loginstep1(props) {
    const [TogglePasswordVisibility, setTogglePasswordVisibility] = useState(0);
    const [Password, setPassword] = useState('');

    const navigate = useNavigate();

    const { setDissmissModalOfLogin } = useOutletContext();

    function HandlePasswordVisibilityToggle() {
        if (TogglePasswordVisibility === 0) {
            setTogglePasswordVisibility(1)
        } else {
            setTogglePasswordVisibility(0)
        }
        console.log(Object.keys(props.LoginData)[0])
    }
    async function handleUserLogin() {
        try {
            const Access = await axios.post('http://localhost:3002/login', { ...(props.LoginData), Password: Password });
            if (Access.data.Token.length > 0) {
                navigate('/home');
            }
        } catch (e) {
            alert("Wrong Password");
        }
    }
    return (
        <>
            <div>
                <div className="relative mb-3 ">
                    <input type="text" id="displyUserEnteredVarient" aria-describedby="displyUserEnteredVarient"
                        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-300 bg-gray-50   focus:outline-none" placeholder=" "
                        value={props.LoginData?.UserName ? props.LoginData?.UserName : props.LoginData?.Phone === undefined ? props.LoginData?.UserName : props.LoginData.Phone}
                        readOnly
                    />
                    <label htmlFor="displyUserEnteredVarient" className="absolute text-gray-300  text-sm top-1 z-10  left-2.5"><span className='truncate'>
                        {props.LoginData?.UserName ? 'UserName' : <span>{props.LoginData?.Phone ? 'Phone' : 'UserName'}</span>}
                    </span></label>
                </div>
            </div>
            <div className="relative my-5 ">
                <input
                    type={TogglePasswordVisibility === 1 ? 'text' : 'password'}
                    id="PasswordForLogin"
                    aria-describedby="PasswordForLogin"
                    className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={e => { setPassword(e.target.value) }}
                />
                <label
                    htmlFor="PasswordForLogin"
                    className="absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                    Password
                </label>
                <label
                    htmlFor="PasswordForLogin"
                    className="absolute text-lg right-1 z-30 bottom-7"
                    onClick={e => { e.preventDefault(); HandlePasswordVisibilityToggle() }}
                >
                    {TogglePasswordVisibility === 0 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </label>
                <span className='text-cyan-500'>
                    forget password?
                </span>
            </div>
            <div>
                <button
                    type="submit"
                    className={`w-full py-2.5 font-semibold  text-lg bg-black text-white rounded-full text-center subpixel-antialiased active:bg-gray-700 `}
                    onClick={e => {
                        e.preventDefault();
                        handleUserLogin();
                        setDissmissModalOfLogin(1);
                    }}
                    disabled={Password.length < 1}> Log in</button>
            </div>
            <div className='mt-4'>
                <span className="text-gray-600 ">Don't have an account? <span className="text-blue-600"><Link to='/i/flow/signup'>Sign up</Link></span> </span>
            </div>
        </>
    )
}