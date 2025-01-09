"use client";
import React, { useState } from 'react';
import TestOverview from './TestOverview';
import QuickStats from './QuickStats';
import SyllabusAnalysis from './SyllabusAnalysis';

const Skills = () => {
  const [rank, setRank] = useState('');
  const [percentile, setPercentile] = useState('');
  const [score, setScore] = useState('');

  return (
    <div className='w-4/5 mt-5 flex flex-col lg:flex-row gap-5'>
      <div className='flex flex-col gap-4 lg:w-3/5'>
        <span className='text-gray-500'>Skill Test</span>
        <TestOverview setRank={setRank} setPercentile={setPercentile} setScore={setScore} />
        <QuickStats rank={rank} percentile={percentile} score={score} />
      </div>
      <div className='lg:w-2/5'>
        <SyllabusAnalysis />
      </div>
    </div>
  );
};

export default Skills;