

import { AiOutlineCaretDown } from 'react-icons/ai';


import Container from './Container'
import ContinueBtn from './ContinueBtn';

import { MIN_BIRTHYEAR, MAX_BIRTHYEAR, MONTHS_OF_THE_YEAR } from '../constants';
import { useState } from 'react';

const EnterDOB = ({ handleNext }) => {
    const [birthYearDrop, setBirthYearDrop] = useState(true);
    const [birthDayDrop, setBirthDayDrop] = useState(true);
    const [birthMonthDrop, setBirthMonthDrop] = useState(true);
    const [userBirthYear, setUserBirthYear] = useState('');
    const [userBirthDay, setUserBirthDay] = useState('');
    const [userBirthMonth, setUserBirthMonth] = useState('');
    const ALLOWED_BIRTHYEAR = [];
    const BIRTH_DAYS = [];


    for (let birthYear = MIN_BIRTHYEAR; birthYear >= MAX_BIRTHYEAR; birthYear--) {
        ALLOWED_BIRTHYEAR.push(birthYear)
    }

    for (let day = 1; day <= 31; day++) {
        BIRTH_DAYS.push(day)
    }

    return (
        <Container>
            <h3 className='font-ui-semi text-[20px] text-center text-[#0D0033] mb-5'>Hey Dollipop, Tell us when you were born</h3>
            <div className='flex gap-2 justify-center font-ui-semi text-[14px] text-body-text'>
                <div onClick={() => setBirthMonthDrop(!birthMonthDrop)} className='flex items-center relative bg-base border-border border-ui-border gap-2 justify-between py-5 px-5 sm:px-[10px] w-[149px] sm:w-[143px] rounded-[200000px] sm:rounded-[200px]'>
                    <span className='bg-inherit outline-none w-full flex-1'>{userBirthMonth || 'Month'}</span>
                    <AiOutlineCaretDown />
                    {!birthMonthDrop && <div className='max-w-[300px] overflow-y-scroll h-[200px] z-50 top-0 left-0 rounded-lg border-border border-ui-border bg-base absolute'>
                        {MONTHS_OF_THE_YEAR.map((month) => <p key={month} onClick={(e) => {
                            setUserBirthMonth(e.target.innerText)
                            setBirthMonthDrop(!birthMonthDrop);
                        }} className='font-ui-semi text-[14px] text-body-text py-2 px-5'>{month}</p>)}
                    </div>}
                </div>
                <div onClick={() => setBirthDayDrop(!birthDayDrop)} className='flex items-center relative bg-base border-border border-ui-border gap-2 justify-between py-5 px-5 sm:px-[10px] w-[149px] sm:w-[102px] rounded-[200000px] sm:rounded-[200px]'>
                    <span className='bg-inherit outline-none w-full flex-1'>{userBirthDay || 'Day'}</span>
                    <AiOutlineCaretDown />
                    {!birthDayDrop && <div className='max-w-[300px] overflow-y-scroll h-[200px] z-50 top-0 left-0 rounded-lg border-border border-ui-border bg-base absolute'>
                        {BIRTH_DAYS.map((day) => <p key={day} onClick={(e) => {
                            setUserBirthDay(e.target.innerText)
                            setBirthDayDrop(!birthDayDrop);
                        }} className='font-ui-semi text-[14px] text-body-text py-2 px-5'>{day}</p>)}
                    </div>}
                </div>
                <div onClick={() => setBirthYearDrop(!birthYearDrop)} className='flex items-center relative bg-base border-border border-ui-border gap-2 justify-between py-5 px-5 sm:px-[10px] w-[149px] sm:w-[102px] rounded-[200000px] sm:rounded-[200px]'>
                    <span className='bg-inherit outline-none w-full flex-1'>{userBirthYear || 'Year'}</span>
                    <AiOutlineCaretDown />
                    {!birthYearDrop && <div className='max-w-[300px] overflow-y-scroll h-[200px] z-50 top-0 left-0 rounded-lg border-border border-ui-border bg-base absolute'>
                        {ALLOWED_BIRTHYEAR.map((year) => <p key={year} onClick={(e) => {
                            setUserBirthYear(e.target.innerText)
                            setBirthYearDrop(!birthYearDrop);
                        }} className='font-ui-semi text-[14px] text-body-text py-2 px-5'>{year}</p>)}
                    </div>}
                </div>
            </div>
            <p className='font-ui-regular text-[14px] text-body-text text-center mt-5'>You must be atleast 18years to use Swiftsettle</p>
            <ContinueBtn nextHandler={handleNext} />
        </Container>
    )
};

export default EnterDOB