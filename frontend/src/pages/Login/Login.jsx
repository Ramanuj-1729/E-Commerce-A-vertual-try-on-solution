import React, { useState } from 'react'
import Signin from '../../components/Auth/Signin/Signin';
import Register from '../../components/Auth/Register/Register';
import Breadcrumb from '../../components/shared/Breadcrumb/Breadcrumb';

const Login = () => {
    const [type, setType] = useState('signin');
    return (
        <>
            <div className='flex items-center justify-center flex-col border-2 h-80 w-full bg-lightBlack text-white'>
                <h1 className='font-semibold text-5xl mt-5'>ACCOUNT</h1>
                <div className='my-5'>
                    <Breadcrumb currPage="Account" />
                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-fit mx-auto my-28'>
                <div className='font-medium text-lg text-fadeFont flex items-center justify-center'>
                    <button className='px-20 border-b-2 border-gray hover:text-black hover:border-red pb-2' style={type === 'signin' ? { borderColor: "#d9121f" } : null} onClick={() => setType('signin')} >SIGN IN</button>
                    <button className='px-20 border-b-2 border-gray hover:text-black hover:border-red pb-2' style={type === 'register' ? { borderColor: "#d9121f" } : null} onClick={() => setType('register')} >REGISTER</button>
                </div>
                <div className='w-full'>
                    {
                        type === 'signin' ? <Signin /> : <Register type={setType} />
                    }
                </div>
            </div>

        </>
    );
}

export default Login;