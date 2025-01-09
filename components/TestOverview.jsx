"use client";
import React, {useRef, useState} from 'react'
import Image from 'next/image'

const TestOverview = ({setRank, setPercentile, setScore}) => {
    const [formVisible, setFormVisible] = useState(false);
    const [percentileError, setPercentileError] = useState(false);
    const [rankeError, setRankError] = useState(false);
    const [scoreError, setScoreError] = useState(false);
    

    const rankRef = useRef(null);
    const percentileRef = useRef(null);
    const scoreRef = useRef(null);
    
    // dummy data about Test info
    const noOfQuestions = 8;
    const Duration = 15;
    const dateSubmitted = new Date().toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
    });


    const handleClick = () => {
        setFormVisible(true);
    }

    const handleRankChange = (e) => {
        // console.log(e.target.value);
        const value = e.target.value;
        console.log(value);
        if (value === '' || isNaN(value)) {
            setRankError(true);
        }
        else
            setRankError(false);
    }

    const handlePercentileChange = (e) => {
        const value = e.target.value;
        if (value === '' || isNaN(value) || value < 0 || value > 100) {
            setPercentileError(true);
        }
        else
            setPercentileError(false);
    }

    const handleScoreChange = (e) => {
        const value = e.target.value;
        if (value === '' || isNaN(value) || value < 0 || value > 15) {
            setScoreError(true);
        }
        else
            setScoreError(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const rank = rankRef.current.value;
        const percentile = percentileRef.current.value;
        const score = scoreRef.current.value;

        if (!rankeError && !percentileError && !scoreError) {
            console.log('Rank:', rank);
            console.log('Percentile:', percentile);
            console.log('Score:', score);
            setRank(rank);
            setPercentile(percentile);
            setScore(score);
            setFormVisible(false);
        }
    }



  return (
    <div>
        <div className='h-20 lg:h-auto flex items-center justify-between p-2 lg:p-3 border shadow-sm rounded'>
            <div className='flex items-center gap-2 lg:gap-5'>
                <img src="/HTML5.png" alt="HTML5" className='w-10 lg:w-12' />
                <div className='flex flex-col gap-1'>
                    <p className='font-bold text-xs md:text-sm lg:text-base'>Hyper Text Markup Language</p>
                    <p className='text-gray-700  text-xs md:text-sm lg:text-base'>Questions: {noOfQuestions} | Duration: {Duration} | Submitted on {dateSubmitted}</p>
                </div>
            </div>
            <button className='rounded-lg shadow-md bg-blue-800 text-white p-1 w-20 lg:w-1/6 h-7 md:h-10 border-0 hover:bg-blue-900 text-sm md:text-base' onClick={handleClick}>Update</button>
        </div>
        

        {formVisible && (
            <div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50'  onClick={() => setFormVisible(false)}>
                <div className='bg-white w-3/4 md:w-1/2 h-1/2 p-5 shadow-lg rounded-lg' onClick={(e) => e.stopPropagation()}>
                    <div className='flex items-center justify-between mb-2 md:mb-4'>
                        <span className='font-bold text-sm md:text-lg lg:text-xl'>Update Scores</span>
                        <img src="/HTML5.png" alt="HTML5" className='w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12'/>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-8 lg:gap-5'>
                            <div  className='flex flex-col gap-6 md:gap-5 lg:gap-3'>
                                <div className='form-group'>
                                    <label className='text-xs md:text-sm font-medium'>Update your <span className='font-bold'>Rank</span></label>
                                    <div className='flex flex-col w-2/5 gap-1'>
                                        <input type='number' name='rank' ref={rankRef} required className='border-2 border-gray-300 p-0.5 lg:p-1 rounded-md text-sm lg:text-base' onChange={handleRankChange}/>
                                        { rankeError && <p className='text-red-800 text-xs font-bold'>required|should be a number</p> }
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label className='text-xs md:text-sm font-medium'>Update your <span className='font-bold'>Percentile</span></label>
                                    <div className='flex flex-col w-2/5 gap-1'>
                                        <input type='number' name='score' ref={percentileRef} required className='border-2 border-gray-300 p-0.5 lg:p-1 rounded-md text-sm lg:text-base' onChange={handlePercentileChange} />
                                        { percentileError && <p className='text-red-800 text-xs font-bold'>required|should be 0-100</p> }
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label className='text-xs md:text-sm font-medium'>Update your <span className='font-bold'>Current score  (out of 15)</span></label>
                                    <div className='flex flex-col w-2/5 gap-1'>
                                        <input type='number' name='time' ref={scoreRef} required max="15" className='border-2 border-gray-300 p-0.5 lg:p-1 rounded-md text-sm lg:text-base' onChange={handleScoreChange} />
                                        { scoreError && <p className='text-red-800 text-xs font-bold'>required|should be 0-15</p> }
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end gap-3'>
                                <button className='rounded-lg border-2 w-14 md:w-16 lg:w-1/6 text-xs md:text-sm lg:text-base hover:bg-slate-200' onClick={() => {setFormVisible(false)}}>Cancel</button>
                                <button type='submit' className='bg-blue-800 text-white p-1 w-14 md:w-16 lg:w-1/6 text-xs md:text-sm lg:text-base border-0 rounded-lg hover:bg-blue-900'>Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>

  )
}

export default TestOverview