import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { BsCheckCircleFill, BsEyeSlash } from 'react-icons/bs';
import InboxIcon from '../../assets/inbox.png';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [changePassword, setChangePassowrd] = useState(false);
    const navigate = useNavigate();


    function handleInputEmail(ev) {
        const userEmail = ev.target.value;
        setEmail(userEmail);
    }

    function handleResize() {
        setWindowWidth(window.innerWidth)
    }

    function handleSubmit(ev) {
        ev.preventDefault();

        setModalOpen(true);
    }

    function handleCloseModal() {
        setModalOpen(false)
    }


    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [])

    return (
        <div className='relative min-h-screen'>
            <div className='py-5 px-[120px] w-full sm:px-[30px]' onClick={() => navigate('/login')}>
                <BiArrowBack size={24} color='#000000' />
            </div>
            {!changePassword && <div>
                {!modalOpen && <div className='max-w-[500px] mx-auto'>
                    <div className='mb-5 sm:px-[30px]'>
                        <h5 className='text-center font-ui-bold text-[32px] text-primary mb-2'>SwiftSettle</h5>
                        <p className='font-ui-regular text-[14px] text-body-text text-center'>Enter your email address and we will send you instructions on how to create a new password.</p>
                    </div>
                    <form className='px-[30px] py-[53px] border-border border-ui-border rounded-[20px] sm:border-none'>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='font-ui-semi text-body-text text-[14px]'>Email Address</label>
                            <input type="email" name="email" id="email" onChange={(e) => handleInputEmail(e)} placeholder='Email address' className='font-ui-semi text-body-text text-[14px] py-[22px] px-5 border-border border-ui-border rounded-[10px] bg-base mt-2' />
                        </div>

                        <button type="submit" className='bg-primary py-5 w-full rounded-[20000px] font-ui-semi text-[16px] text-white mt-5' onClick={(e) => handleSubmit(e)}>Submit</button>
                    </form>
                </div>}
                {modalOpen && <div>
                    {windowWidth > 425 && <div className='bg-[rgba(0,0,0,0.7)] w-full h-screen absolute top-0 flex justify-center items-center'>
                        <div className='max-w-[545px] relative z-50 text-body-text text-center text-[14px] font-ui-regular bg-white rounded-[20px] px-[104px] py-[73px]'>
                            <img src={InboxIcon} alt="an inbox icon" className='max-w-full mx-auto' />
                            <p className='mt-[30px]'>If the email address is valid, we'll send you a password reset link.  Check your inbox and spam folder, or try resending the request if needed</p>
                            <IoClose color='IoClose' size={24} className='absolute top-5 right-5' onClick={handleCloseModal} />
                        </div>
                    </div>}
                    {windowWidth <= 425 && <div className='px-[30px] flex flex-col min-h-[80vh] justify-between'>
                        <div>
                            <img src={InboxIcon} alt="inbox Icon" className='max-w-full mx-auto' />
                            <p className='text-body-text text-[14px] font-ui-regular text-center mt-[30px]'>If the email address is valid, we'll send you a password reset link. Check your inbox and spam folder, or try resending the request if needed</p>
                        </div>
                        <button type="button" className='bg-primary text-white font-ui-semi text-[16px] py-5 rounded-[20000px]'>Open Email app</button>
                    </div>}
                </div>}
            </div>}
            {changePassword && <div>
                <div>
                    <h5>SwiftSettle</h5>
                    <p>To prevent any further instances of forgetting your password, kindly generate a new one and re-enter it</p>
                </div>
                <form className='py-[34px] px-[30px]'>
                    <label htmlFor="password">Password</label>
                    <div>
                        {/* Password */}
                        <div>
                            <input type="password" />
                        </div>

                        <div>
                            <div className='flex gap-2 items-center'>
                                <BsCheckCircleFill />
                                <p>8 or more characters</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <BsCheckCircleFill />
                                <p>Has a symbol, number, or upper-case letter</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>}
        </div>
    )
}

export default ForgotPassword