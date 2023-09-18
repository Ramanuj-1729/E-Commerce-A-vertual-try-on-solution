import React, { useState } from 'react'
import Input from '../../shared/Input/Input'
import Checkbox from '../../shared/Checkbox/Checkbox';
import { register } from '../../../http';

const Register = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register(user);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form className='mt-10 space-y-5'>
      <Input label="First Name" inputType="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
      <Input label="Last Name" inputType="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
      <Input label="Email Address" inputType="email" name="email" value={user.email} onChange={handleInputChange} />
      <Input label="Password" inputType="password" name="password" value={user.password} onChange={handleInputChange} />
      <div className='flex items-center'>
        <Checkbox color="black" />
        <small className='text-sm'>I agree to the privacy policy</small>
      </div>
      <button onClick={handleSubmit} className='block bg-red w-full text-white py-3 rounded mt-5 hover:bg-hoverRed'>Register</button>
    </form>
  )
}

export default Register