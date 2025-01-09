"use client";
import React from 'react'
import Image from 'next/image'

const QuickStats = ({rank, percentile, score}) => {
  return (
    <div className='w-3/5 p-3 border shadow-sm rounded flex flex-col gap-3 '>
        <h2 className='font-bold'>Quick Statistics</h2>
        <div className='flex justify-evenly items-center mb-4'>
            <div className='flex items-center gap-3'>
                <div className='rounded-full bg-slate-100 shadow p-2'>
                    <Image src="/trophy.svg" alt="Rank" width={40} height={40} />
                </div>
                <div className='felx flex-col'>
                    <p className='font-bold'>{rank}</p>
                    <p className='text-slate-400'>Your Rank</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className='rounded-full bg-slate-100 shadow p-2'>
                    <Image src="/percent.svg" alt="Percentile" width={40} height={40} />
                </div>
                <div className='felx flex-col'>
                    <p className='font-bold'>{percentile}%</p>
                    <p className='text-slate-400'>Percentile</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className='rounded-full bg-slate-100 shadow p-2'>
                    <Image src="/score.svg" alt="Score" width={40} height={40} />
                </div>
                <div className='felx flex-col'>
                    <p className='font-bold'>{score}/15</p>
                    <p className='text-slate-400'>Your Score</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuickStats