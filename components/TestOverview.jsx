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
        <div className='h-28 flex items-center justify-between p-3 border shadow-sm rounded'>
            <div className='flex items-center gap-5'>
                <Image src="/HTML5.png" alt="HTML5" width={55} height={55} />
                <div>
                    <p className='font-bold'>Hyper Text Markup Language</p>
                    <p className='text-gray-700'>Questions: {noOfQuestions} | Duration: {Duration} | Submitted on {dateSubmitted}</p>
                </div>
            </div>
            <button className='rounded-lg shadow-md bg-blue-800 text-white p-1 w-1/6 h-10 border-0 hover:bg-blue-900' onClick={handleClick}>Update</button>
        </div>
        

        {formVisible && (
            <div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50'  onClick={() => setFormVisible(false)}>
                <div className='bg-white w-1/3 h-1/2 p-5 shadow-lg rounded-lg' onClick={(e) => e.stopPropagation()}>
                    <div className='flex items-center justify-between mb-8'>
                        <span className='font-bold text-xl'>Update Scores</span>
                        <Image src="/HTML5.png" alt="HTML5" width={50} height={50} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-10'>
                            <div>
                                <div className='form-group'>
                                    <label className='text-sm font-medium'>Update your <span className='font-bold w-2/5'>Rank</span></label>
                                    <div className='flex flex-col w-2/5 gap-1'>
                                        <input type='number' name='rank' ref={rankRef} required className='border-2 border-gray-300 p-1 rounded-md' onChange={handleRankChange}/>
                                        { rankeError && <p className='text-red-800 text-xs font-bold'>required|should be a number</p> }
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label className='text-sm font-medium'>Update your <span className='font-bold w-2/5'>Percentile</span></label>
                                    <div className='flex flex-col w-2/5 gap-1'>
                                        <input type='number' name='score' ref={percentileRef} required className='border-2 border-gray-300 p-1 rounded-md' onChange={handlePercentileChange} />
                                        { percentileError && <p className='text-red-800 text-xs font-bold'>required|should be 0-100</p> }
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label className='text-sm font-medium'>Update your <span className='font-bold w-2/5'>Current score  (out of 15)</span></label>
                                    <div className='flex flex-col w-2/5 gap-1'>
                                        <input type='number' name='time' ref={scoreRef} required max="15" className='border-2 border-gray-300 p-1 rounded-md' onChange={handleScoreChange} />
                                        { scoreError && <p className='text-red-800 text-xs font-bold'>required|should be 0-15</p> }
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end gap-3'>
                                <button className='rounded-lg border-2 w-1/6  hover:bg-slate-200' onClick={() => {setFormVisible(false)}}>Cancel</button>
                                <button type='submit' className='bg-blue-800 text-white p-1 w-1/6 border-0 rounded-lg hover:bg-blue-900'>Update</button>
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