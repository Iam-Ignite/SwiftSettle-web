

const ContinueBtn = ({ onClickHandler, disabled = false }) => {


    return (
        <div className='sm:absolute sm:bottom-[8vh] sm:w-full left-0 px-5 self-center my-5'>
            <button disabled={disabled} className='bg-primary px-[64px] sm:px-[0px] py-[21px] w-fit sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]' onClick={onClickHandler}>Continue</button>
        </div>
    )
}

export default ContinueBtn