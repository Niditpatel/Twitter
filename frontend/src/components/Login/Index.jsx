import { useState } from "react"
import Login from "./Login"
import Loginstep1 from "./step1"
export default function LoginIndex() {
    const [loginStep, setloginStep] = useState(0);
    const [LoginData, setLoginData] = useState()
    function HandleLoginStepCallback(step) {
        setloginStep(step);
    }
    function HandleLoginDataCallback(data) {
        console.log(data);
        setLoginData(data);
    }
    return (
        <>
            <div className='w-[300px] sm:w-[400px] sm:h-[600px] mx-auto bg-white'>
                {loginStep === 0 ?
                    <Login HandleLoginStep={HandleLoginStepCallback} HandleLoginData={HandleLoginDataCallback} />
                    :
                    <Loginstep1 LoginData={LoginData} />
                }

            </div>
        </>
    )
}