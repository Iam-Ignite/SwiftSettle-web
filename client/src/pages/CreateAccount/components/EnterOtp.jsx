import { useState } from 'react';

import OTPInput from 'otp-input-react';

import Container from './Container';
import ContinueBtn from './ContinueBtn';

const EnterOtp = ({ handleNext }) => {
    const [OTP, setOTP] = useState('');

    function handleClickContinue() {
        handleNext(prev => prev + 1)
    }

    return (
        <Container>
            <h3 className='font-ui-semi text-[20px] text-center text-[#0D0033] mb-5'>Enter the six-digit code that was sent to you</h3>
            <div className=''>
                <div className='flex justify-center'>
                    <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} inputStyles={{ backgroundColor: '#F7F7F7', height: '50px', width: '50px', marginRight: '0px' }} style={{ justifyContent: 'center', alignItems: 'center', width: 'fit-content', gap: '20px' }} className='otp' inputClassName='otp-input' />
                </div>
                <h4 className='font-ui-semi text-[14px] text-center mt-[10px] text-[#0D0033] underline'>Change Number</h4>
            </div>
            <ContinueBtn onClickHandler={handleClickContinue} />
            <h4 className='text-primary text-center underline text-[14px] font-ui-semi sm:mt-5'>Resend</h4>
        </Container>
    )
}

export default EnterOtp;