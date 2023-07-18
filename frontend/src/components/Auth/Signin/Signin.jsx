import { NavLink } from 'react-router-dom'
import Input from '../../shared/Input/Input';

const Signin = () => {
    return (
        <div className='mt-10 space-y-5'>
            <Input label="Email" inputType="text" />
            <Input label="Password" inputType="password" />
            <NavLink className="block mt-5">Lost your password ?</NavLink>
            <button className='block bg-red w-full text-white py-3 rounded mt-5 hover:bg-hoverRed'>Sign In</button>
        </div>
    );
}

export default Signin;