import { useState, useEffect } from 'react';

import { BsEyeFill, BsEyeSlashFill, BsCheckCircleFill } from 'react-icons/bs';

// COMPONENTS
import Container from './Container'
import ContinueBtn from './ContinueBtn';


const EnterPassword = ({ handleNext }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPwd, setHideConfirmPwd] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(false);

    function handlePassword(ev) {
        const userPassword = ev.target.value
        setPassword(userPassword);
    }

    function handleConfirmPassword(ev) {
        const reEnteredPassword = ev.target.value;

        if (reEnteredPassword !== password) {
            setConfirmPassword(false);
            return;
        }
        setConfirmPassword(true)
    }

    function handleContinueClick() {

        // move to the next
        handleNext((prev) => prev + 1);
    }

    return (
        <Container>
            <h3 className='font-ui-semi text-[20px] text-center text-[#0D0033] mb-5'>Create Password</h3>
            <div className='flex bg-base py-[16px] px-[24px] gap-5 rounded-[200000px] border-ui-border border-border'>
                <input type={hidePassword ? "password" : "text"} name="password" placeholder='Enter password' className='bg-inherit inline-block w-full flex-1 outline-none font-ui-semi text-[14px]' onChange={(e) => handlePassword(e)} />
                <div onClick={() => setHidePassword(!hidePassword)}>
                    {hidePassword ? <BsEyeSlashFill color='#808080' size={20} /> : <BsEyeFill size={20} color='#808080' />}
                </div>
            </div>
            <h3 className='mt-[16px] mb-[8px] font-ui-semi text-[14px]'>Confirm Password</h3>
            <div className='flex bg-base py-[16px] px-[24px] gap-5 rounded-[200000px] border-ui-border border-border'>
                <input type={hideConfirmPwd ? "password" : "text"} name="password" placeholder='Re-Enter password' className='bg-inherit inline-block w-full flex-1 outline-none font-ui-semi text-[14px]' onChange={(e) => handleConfirmPassword(e)} />
                <div onClick={() => setHideConfirmPwd(!hideConfirmPwd)}>
                    {hideConfirmPwd ? <BsEyeSlashFill color='#808080' size={20} /> : <BsEyeFill size={20} color='#808080' />}
                </div>
            </div>

            <div className='mt-2 sm:mb-5 text-[14px] font-ui-regular text-body-text'>
                <div className='flex items-start gap-2 mb-2'>
                    <BsCheckCircleFill color='#808080' />
                    <p>8 or more characters</p>
                </div>
                <div className='flex items-start gap-2'>
                    <BsCheckCircleFill color='#808080' />
                    <p>Has a symbol, number, or upper-case letter</p>
                </div>
            </div>
            <ContinueBtn onClickHandler={handleContinueClick} />
        </Container>
    )
}

export default EnterPassword