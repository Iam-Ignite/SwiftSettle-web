import Container from './Container'
import ContinueBtn from './ContinueBtn';

import { BsRecordCircleFill } from 'react-icons/bs';
import { BiCircle } from 'react-icons/bi'
import { useState } from 'react';

const EnterGender = ({ handleNext }) => {
    const [userGender, setUserGender] = useState('female');

    return (
        <Container>
            <h3 className='font-ui-semi text-[20px] text-center text-[#0D0033] mb-5'>What is your Gender?</h3>
            <div onClick={() => setUserGender('female')} className='flex items-center border-border border-ui-border bg-base gap-2 text-body-text font-ui-semi text-[14px] px-5 py-[22px] rounded-[10px]'>
                {userGender === 'female' ? <BsRecordCircleFill color='#6E3EFF' size={24} /> : <BiCircle color='#808080' size={24} />}
                <p>Woman</p>
            </div>
            <div onClick={() => setUserGender('male')} className='flex mt-5 items-center border-border border-ui-border bg-base gap-2 text-body-text font-ui-semi text-[14px] px-5 py-[22px] rounded-[10px]'>
                {userGender === 'male' ? <BsRecordCircleFill color='#6E3EFF' size={24} /> : <BiCircle color='#808080' size={24} />}
                <p>Man</p>
            </div>
            <ContinueBtn nextHandler={handleNext} />
        </Container>
    )
}

export default EnterGender