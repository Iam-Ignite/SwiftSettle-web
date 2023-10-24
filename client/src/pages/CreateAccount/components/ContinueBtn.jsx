

const ContinueBtn = ({ nextHandler }) => {

    const handleContinue = () => {
        nextHandler((prev) => prev + 1)
    }
    return (
        <div className='sm:absolute sm:bottom-[8vh] sm:w-full left-0 px-5 self-center my-5'>
            <button className='bg-primary px-[64px] sm:px-[0px] py-[21px] w-fit sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]' onClick={handleContinue}>Continue</button>
        </div>
    )
}

export default ContinueBtn