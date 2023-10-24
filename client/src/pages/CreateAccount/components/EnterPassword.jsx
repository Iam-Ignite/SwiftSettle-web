import { useState } from 'react';


import { BsEyeFill, BsEyeSlashFill, BsCheckCircleFill } from 'react-icons/bs';


import Container from './Container'
import ContinueBtn from './ContinueBtn';

const EnterPassword = ({ handleNext }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPwd, setHideConfirmPwd] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleHidePassword = () => {
        setHidePassword(!hidePassword);
    }

    const handleHideConfirmPwd = () => {
        setHideConfirmPwd(!hideConfirmPwd)
    }

    const handlePassword = (ev) => {
        setPassword(ev.target.value);
    }

    const handleConfirmPassword = (ev) => {
        setConfirmPassword(ev.target.value);
    }

    return (
        <Container>
            <h3 className='font-ui-semi text-[20px] text-center text-[#0D0033] mb-5'>Create Password</h3>
            <div className='flex bg-base py-[16px] px-[24px] gap-5 rounded-[200000px] border-ui-border border-border'>
                <input type={hidePassword ? "password" : "text"} name="password" placeholder='Enter password' className='bg-inherit inline-block w-full flex-1 outline-none font-ui-semi text-[14px]' onChange={(e) => handlePassword(e)} />
                <div onClick={handleHidePassword}>
                    {hidePassword ? <BsEyeSlashFill color='#808080' size={20} /> : <BsEyeFill size={20} color='#808080' />}
                </div>
            </div>
            <h3 className='mt-[16px] mb-[8px] font-ui-semi text-[14px]'>Confirm Password</h3>
            <div className='flex bg-base py-[16px] px-[24px] gap-5 rounded-[200000px] border-ui-border border-border'>
                <input type={hideConfirmPwd ? "password" : "text"} name="password" placeholder='Enter password' className='bg-inherit inline-block w-full flex-1 outline-none font-ui-semi text-[14px]' onChange={(e) => handleConfirmPassword(e)} />
                <div onClick={handleHideConfirmPwd}>
                    {hideConfirmPwd ? <BsEyeSlashFill color='#808080' size={20} /> : <BsEyeFill size={20} color='#808080' />}
                </div>
            </div>
            <div className='mt-2 sm:mb-5'>
                <div className='flex items-start gap-2 mb-2'>
                    <BsCheckCircleFill color='#808080' />
                    <p className='text-[14px] text-body-text'>8 or more characters</p>
                </div>
                <div className='flex items-start gap-2'>
                    <BsCheckCircleFill color='#808080' />
                    <p className='text-[14px] text-body-text'>Has a symbol, number, or upper-case letter</p>
                </div>
            </div>
            <ContinueBtn nextHandler={handleNext} />
        </Container>
    )
}

export default EnterPassword