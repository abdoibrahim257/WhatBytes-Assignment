"use client";
import React, { useState } from 'react';
import TestOverview from './TestOverview';
import QuickStats from './QuickStats';
import SyllabusAnalysis from './SyllabusAnalysis';
import QuestionAnalysis from './QuestionAnalysis';
import ComparisonGraph from './ComparisonGraph';

const Skills = () => {
  const [rank, setRank] = useState('0');
  const [percentile, setPercentile] = useState('0');
  const [score, setScore] = useState('0');

  return (
    <div  className='w-4/5 mt-5'>
        <span className='text-gray-500 font-bold'>Skill Test</span>
        <div className='flex flex-col lg:flex-row gap-5  mt-4'>
          <div className='flex flex-col gap-4 lg:w-3/5'>
            <TestOverview setRank={setRank} setPercentile={setPercentile} setScore={setScore} />
            <QuickStats rank={rank} percentile={percentile} score={score} />
            <ComparisonGraph percentile={percentile}/>
          </div>
          <div className='lg:w-2/5 flex flex-col gap-4'>
            <SyllabusAnalysis />
            <QuestionAnalysis score={score} />
          </div>
        </div>
    </div>
  );
};

export default Skills;