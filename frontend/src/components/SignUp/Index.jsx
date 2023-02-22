import { useState } from "react";



import SignUp from "./SignUp"
import SignUpStep1 from "./Step1"
import SignUpStep2 from "./Step2"
import SignUpStep3 from "./Step3"
import SignUpStep4 from "./Step4"
import SignUpStep5 from "./Step5"
import SignUpStep6 from "./Step6"
import SignUpStep7 from "./Step7"



export default function SignupIndex() {
    const [signupStep, setsignupStep] = useState(0);
    const [userDataforSignup, setUserDataForSignup] = useState({});
    const signupCallback = (data) => {
        setsignupStep(data);
    }
    const SignupDataCallback = (data) => {
        setUserDataForSignup({ ...userDataforSignup, ...data });
        console.log(userDataforSignup);
        console.log(data, "hasghfdhc");
    }
    const SignupPassWordCallback = (data) => {
        console.log(userDataforSignup);
        setUserDataForSignup({ ...userDataforSignup, ...data });
    }

    return (
        <>

            <div className='w-[300px] sm:w-[400px] sm:h-[600px] mx-auto bg-white'>
                {
                    signupStep === 0 ?
                        <SignUp handleSignupCallback={signupCallback}></SignUp>
                        :
                        <>
                            {
                                signupStep === 1 ?
                                    <SignUpStep1 handleSignupCallback={signupCallback} handleSignupCallbackForData={SignupDataCallback}></SignUpStep1>
                                    :
                                    <>
                                        {
                                            signupStep === 2 ?
                                                <SignUpStep2 handleSignupCallback={signupCallback}></SignUpStep2>
                                                :
                                                <>
                                                    {
                                                        signupStep === 3 ?
                                                            <SignUpStep3 handleSignupCallback={signupCallback} UserdataConformation={userDataforSignup}></SignUpStep3>
                                                            :
                                                            <>
                                                                {
                                                                    signupStep === 4 ?
                                                                        <SignUpStep4 handleSignupCallback={signupCallback}></SignUpStep4>
                                                                        :
                                                                        <>
                                                                            {
                                                                                signupStep === 5 ?
                                                                                    <SignUpStep5 handleSignupCallback={signupCallback}></SignUpStep5>
                                                                                    :
                                                                                    <>
                                                                                        {
                                                                                            signupStep === 6 ?
                                                                                                <SignUpStep6 handleSignupCallback={signupCallback} handleSignupCallbackForPassword={SignupPassWordCallback}></SignUpStep6>
                                                                                                :
                                                                                                <SignUpStep7 FinalDataForSignup={userDataforSignup}></SignUpStep7>
                                                                                        }
                                                                                    </>
                                                                            }
                                                                        </>
                                                                }
                                                            </>
                                                    }
                                                </>
                                        }
                                    </>
                            }
                        </>
                }
            </div>
        </>
    )
}