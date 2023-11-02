import Container from './Container'
import ContinueBtn from './ContinueBtn'

const EnterEmail = ({ handleNext }) => {

    function handleClickContinue() {
        handleNext((prev) => prev + 1)
    }
    return (
        <Container>
            <h3 className='font-ui-semi text-[20px] text-center text-[#0D0033] mb-5'>What is your email?</h3>
            <input type="email" placeholder='Email Address' name='email' className='px-[25px] py-[21px] bg-base border-border border-ui-border rounded-[200000px] font-ui-semi text-[14px] outline-primary' />
            <div className='mb-5 mt-[10px]'>
                <p className='text-center text-body-text font-ui-regular text-[16px] px-[70px] sm:px-[30px]'>We will use this email to contact you if the need arise</p>
            </div>
            <ContinueBtn onClickHandler={handleClickContinue} disabled={false} />
        </Container>
    )
}

export default EnterEmail