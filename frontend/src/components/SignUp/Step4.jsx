import verifyHuman from '../../Images/VerifyHuman.png';
import verifyHuman1 from '../../Images/VerifyHuman1.png';
import verifyHuman2 from '../../Images/VerifyHuman2.png';
import verifyHuman3 from '../../Images/VerifyHuman3.png';
import verifyHuman4 from '../../Images/VerifyHuman4.png';
import verifyHuman5 from '../../Images/VerifyHuman5.png';
import verifyHuman6 from '../../Images/VerifyHuman6.png';
import authimage from '../../Images/authimgforsignup.svg'
import { useState } from 'react';
export default function SignUpStep4(props) {
    const [isHuman, setisHuman] = useState(0);
    const [Authenticate, setAuthenticate] = useState(0);
    const [lastphase, setlastphase] = useState(0)
    function CheckForAuthenticate() {
        setAuthenticate(1);
    }
    function CheckForFinalAuthenticate() {
        if (isHuman === 1) {
            console.log('sucess');
            props.handleSignupCallback(5);
        }
        else {
            setlastphase(1);
        }
    }
    return (
        <>
            {Authenticate === 0 ?
                <div className='w-fit mx-auto h-fit m-0'>
                    <div className='w-fit mx-auto mt-5 mb-5'>
                        <img src={authimage} alt="" />
                    </div>
                    <div>
                        <h1 className='text-4xl font-semibold text-center first-letter:uppercase'>Authenticate your account</h1>
                        <p className='text-center text-sm text-gray-600'>We need to make sure that you’re a real person.</p>
                    </div>
                    <div >
                        <div className='mt-16 px-4'>
                            <button className="w-full py-2.5 font-semibold bg-black text-lg text-white rounded-full text-center subpixel-antialiased active:bg-gray-700"
                                onClick={e => { e.preventDefault(); CheckForAuthenticate() }}
                            >Authenticate</button>
                        </div>
                    </div>
                </div>
                :
                <>
                    {
                        lastphase === 0 ?
                            <div className='w-fit mx-auto flex h-full flex-col '>
                                <div className='w-fit mx-auto'>
                                    <img
                                        src={verifyHuman}
                                        className="block w-[100px] h-[150px]"
                                        alt=''
                                    />
                                    <small className='text-gray-600'>Find matched angle</small>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <button className='border border-black focus:border-red-400' onClick={e => { e.preventDefault(); setisHuman(0) }}>
                                        <img src={verifyHuman1} height='100px' width='100px' alt="" />
                                    </button>
                                    <button className='border border-black focus:border-red-400' onClick={e => { e.preventDefault(); setisHuman(0) }}>
                                        <img src={verifyHuman2} height='100px' width='100px' alt="" />
                                    </button>
                                    <button className='border border-black focus:border-red-400' onClick={e => { e.preventDefault(); setisHuman(1) }}>
                                        <img src={verifyHuman3} height='100px' width='100px' alt="" />
                                    </button>
                                    <button className='border border-black focus:border-red-400' onClick={e => { e.preventDefault(); setisHuman(0) }}>
                                        <img src={verifyHuman4} height='100px' width='100px' alt="" />
                                    </button>
                                    <button className='border border-black focus:border-red-400' onClick={e => { e.preventDefault(); setisHuman(0) }}>
                                        <img src={verifyHuman5} height='100px' width='100px' alt="" />
                                    </button>
                                    <button className='border border-black focus:border-red-400' onClick={e => { e.preventDefault(); setisHuman(0) }}>
                                        <img src={verifyHuman6} height='100px' width='100px' alt="" />
                                    </button>
                                </div>
                                <div className='mt-24 '>
                                    <button className="w-full py-2.5 font-semibold bg-black text-lg text-white rounded-full text-center subpixel-antialiased active:bg-gray-700"
                                        onClick={e => { e.preventDefault(); CheckForFinalAuthenticate() }}
                                    >submit</button>
                                </div>
                            </div>
                            :
                            <div className='w-fit mx-auto'>
                                <div><p>sorry we find you fail for human varification !</p></div>
                                <div className='mt-24'>
                                    <button className="w-full py-2.5 font-semibold bg-black text-lg text-white rounded-full text-center subpixel-antialiased active:bg-gray-700"
                                        onClick={e => { e.preventDefault(); setAuthenticate(0); setlastphase(0) }}>Try again </button>
                                </div>
                            </div>
                    }
                </>
            }
        </>
    );
}
