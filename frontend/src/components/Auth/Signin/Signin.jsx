import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Input from '../../shared/Input/Input';
import { login } from '../../../http';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../store/authSlice';

const Signin = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login(user);
            console.log(data);
            dispatch(setAuth(data));
        } catch (error) {
            console.log(error.response.data.message);
        } 
    }
    return (
        <form className='mt-10 space-y-5'>
            <Input label="Email" inputType="text" name="email" value={user.email} onChange={handleInputChange} />
            <Input label="Password" inputType="password" name="password" value={user.password} onChange={handleInputChange} />
            <NavLink className="block mt-5">Lost your password ?</NavLink>
            <button onClick={handleSubmit} className='block bg-red w-full text-white py-3 rounded mt-5 hover:bg-hoverRed'>Sign In</button>
        </form>
    );
}

export default Signin;