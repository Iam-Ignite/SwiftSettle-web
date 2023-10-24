import './CreateAccount.css';
import { useState } from 'react'

import { useNavigate } from 'react-router-dom';
// ICONS
import { BiArrowBack } from 'react-icons/bi'


// COMPONENTS
import { EnterPhoneNumber, EnterOtp, EnterEmail, EnterPassword, EnterUserName, EnterDOB, EnterGender, AllowLocation } from './components';

const displayRegisterStep = (step = 1, nextHandler) => {
    if (step === 1) {
        return <EnterPhoneNumber handleNext={nextHandler} />
    }
    if (step === 2) {
        return <EnterOtp handleNext={nextHandler} />
    }
    if (step === 3) {
        return <EnterEmail handleNext={nextHandler} />
    }
    if (step === 4) {
        return <EnterPassword handleNext={nextHandler} />
    }
    if (step === 5) {
        return <EnterUserName handleNext={nextHandler} />
    }
    if (step === 6) {
        return <EnterDOB handleNext={nextHandler} />
    }
    if (step === 7) {
        return <EnterGender handleNext={nextHandler} />
    }
    if (step === 8) {
        return <AllowLocation handleNext={nextHandler} />
    }
    return null
}

const CreateAccount = () => {
    const navigate = useNavigate();

    const [step, setStep] = useState(1);

    const handleGoBack = () => {
        if (step > 1) {
            setStep((prev) => prev - 1);
            return
        }
        navigate("/");
    }
    return (
        <div className='w-screen h-screen relative sm:px-5'>
            <div className='py-5 px-[120px] w-full flex border-b-ui-border border-border mb-[50px] sm:px-0 sm:border-none sm:mb-0'>
                <div className='w-full flex items-center justify-between sm:flex-col sm:w-full sm:gap-5'>
                    <div className='py-2 px-2 border-border border-ui-border rounded-lg w-fit sm:self-start' onClick={handleGoBack}>
                        <BiArrowBack size={24} color='#000000' />
                    </div>
                    <h2 className='text-primary text-[24px] font-ui-bold text-center '>SwiftSettle</h2>
                    <div className='py-2 px-2 rounded-lg w-fit sm:self-start sm:hidden'>
                    </div>
                </div>
            </div>
            {displayRegisterStep(step, setStep)}
        </div>
    )
}


export default CreateAccount