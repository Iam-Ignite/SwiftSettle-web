
import { useState } from 'react';

import { Link } from 'react-router-dom';

import { BsEyeSlash, BsEyeFill } from 'react-icons/bs';
const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleInputEmail = (ev) => {
        const userEmail = ev.target.value;
        setEmail(userEmail)
    }

    const handleInputPassword = (ev) => {
        const userPassword = ev.target.value;
        setPassword(userPassword);
    }


    return (
        <div className='mt-[20px]'>
            <h3 className='font-ui-bold text-center text-[32px] text-primary mb-5'>SwiftSettle</h3>
            <div className='border-border border-ui-border max-w-[500px] mx-auto rounded-[20px] py-[25px] px-[30px] sm:border-none'>
                <div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='font-ui-semi text-body-text text-[14px]'>Email Address</label>
                        <input type="email" name="email" id="email" onChange={(e) => handleInputEmail(e)} placeholder='Email address' className='font-ui-semi text-body-text text-[14px] py-[22px] px-5 border-border border-ui-border rounded-[10px] bg-base mt-2' />
                    </div>

                    <div className='flex flex-col mt-5'>
                        <label htmlFor="password" className='font-ui-semi text-body-text text-[14px] mb-2'>Password</label>
                        <div className='flex items-center gap-2 bg-base pr-5 rounded-[10px] border-border border-ui-border'>
                            <input type={hidePassword ? 'password' : 'text'} onChange={(e) => handleInputPassword(e)} name='password' id='password' placeholder='Password' className='font-ui-semi py-[22px] px-5 text-body-text text-[14px] flex-1 bg-transparent outline-none' />
                            <div role='button' onClick={() => setHidePassword(!hidePassword)}>
                                {hidePassword ? <BsEyeSlash fill='#808080' size={22} /> : <BsEyeFill fill='#808080' size={22} />}
                            </div>
                        </div>
                        <Link to={'/forgotPassword'}>
                            <h6 className='text-left self-end mt-2 font-ui-semi text-[14px] text-primary'>Forgot Password</h6>
                        </Link>
                    </div>
                    <button type='submit' className='bg-primary mt-5 w-full rounded-[20000px] py-5 font-ui-semi text-[16px] text-white'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login