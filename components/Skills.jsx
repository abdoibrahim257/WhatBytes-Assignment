"use client";
import React , {useState} from 'react'
import TestOverview from './TestOverview'
import QuickStats from './QuickStats';

const Skills = () => {
    const [rank, setRank] = useState('');
    const [percentile, setPercentile] = useState('');
    const [score, setScore] = useState('');

  return (
    <div className='w-3/4 mt-4 flex flex-col gap-4'> 
        <span className='text-gray-500 mt-6'>Skill Test</span>
        <TestOverview setRank={setRank} setPercentile={setPercentile} setScore={setScore}/>
        <QuickStats rank={rank} percentile={percentile} score={score}/>
    </div>
  )
}

export default Skills