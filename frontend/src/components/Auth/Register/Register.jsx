import Input from '../../shared/Input/Input'
import Checkbox from '../../shared/Checkbox/Checkbox';

const Register = () => {
  return (
    <div className='mt-10 space-y-5'>
      <Input label="First Name" inputType="text" />
      <Input label="Last Name" inputType="text" />
      <Input label="Email Address" inputType="email" />
      <Input label="Password" inputType="password" />
      <div className='flex items-center'>
        <Checkbox color="black" />
        <small className='text-sm'>I agree to the privacy policy</small>
      </div>
      <button className='block bg-red w-full text-white py-3 rounded mt-5 hover:bg-hoverRed'>Register</button>
    </div>
  )
}

export default Register