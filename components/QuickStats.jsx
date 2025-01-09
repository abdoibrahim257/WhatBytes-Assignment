"use client";
import React from 'react'

const QuickStats = ({rank, percentile, score}) => {
  return (
    <div className='p-2 md:p-3 border shadow-sm rounded flex flex-col gap-4 '>
        <h2 className='font-bold text-sm md:text-base'>Quick Statistics</h2>
        <div className='flex justify-evenly items-center mb-4'>
            <div className='flex items-center gap-3'>
                <div className='rounded-full bg-slate-100 shadow p-1 md:p-2'>
                    <img src="/trophy.svg" alt="Rank" className="min-w-6 md:w-10" />
                </div>
                <div className='felx flex-col'>
                    <p className='font-bold text-xs md:text-sm'>{rank}</p>
                    <p className='text-slate-400 text-xs md:text-sm'>YOUR RANK</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className='rounded-full bg-slate-100 shadow p-1 md:p-2'>
                    <img src="/percent.svg" alt="Percentile" className="min-w-6 md:w-10" />
                </div>
                <div className='felx flex-col'>
                    <p className='font-bold text-xs md:text-sm'>{percentile}%</p>
                    <p className='text-slate-400 text-xs md:text-sm'>PERCENTILE</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className='rounded-full bg-slate-100 shadow p-1 md:p-2'>
                    <img src="/score.svg" alt="Score" className="min-w-6 md:w-10" />
                </div>
                <div className='felx flex-col'>
                    <p className='font-bold text-xs md:text-sm'>{score}/15</p>
                    <p className='text-slate-400 text-xs md:text-sm'>YOUR SCORE</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuickStats