import { useState } from 'react'

import Container from './Container'
import ContinueBtn from './ContinueBtn'

const EnterUserName = ({ handleNext }) => {
    const [username, setUserName] = useState('');

    const handleUsername = (ev) => {
        setUserName(ev.target.value)
    }

    function handleClickContinue() {
        handleNext((prev) => prev + 1)
    }

    return (
        <Container>
            <h3 className='font-ui-semi text-[20px] text-center text-[#0D0033] mb-5'>What will you like to be called?</h3>
            <input type="text" placeholder='Your name' name='username' onChange={(e) => handleUsername(e)} className='px-[24px] py-[21px] bg-base border-ui-border border-border font-ui-semi text-[14px] rounded-[200000px] outline-primary' />
            <p className='font-ui-regular text-[14px] text-body-text text-center px-[70px] mt-[15px] sm:px-5 modal:px-[10px]'>This is how you will appear on Swiftsettle and you will not be able to change it</p>
            <ContinueBtn onClickHandler={handleClickContinue} />
        </Container>
    )
}

export default EnterUserName