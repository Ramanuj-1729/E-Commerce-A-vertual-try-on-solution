import React, { useState } from 'react'
import Signin from '../../components/Auth/Signin/Signin';
import Register from '../../components/Auth/Register/Register';

const Login = () => {
    const [type, setType] = useState('signin');
    return (
        <div className='flex flex-col items-center justify-center w-fit mx-auto my-28'>
            <div className='font-medium text-lg text-fadeFont flex items-center justify-center'>
                <button className='px-20 border-b-2 border-gray hover:text-black hover:border-red pb-2' style={type === 'signin' ? {borderColor: "#d9121f"} : null} onClick={()=>setType('signin')} >SIGN IN</button>
                <button className='px-20 border-b-2 border-gray hover:text-black hover:border-red pb-2' style={type === 'register' ? {borderColor: "#d9121f"} : null} onClick={()=>setType('register')} >REGISTER</button>
            </div>
            <div className='w-full'>
                {
                    type === 'signin' ? <Signin /> : <Register />
                }
            </div>
        </div>
    );
}

export default Login;