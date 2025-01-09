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
    <div  className='w-full lg:w-4/5 mt-5'>
        <span className='text-gray-500 font-bold'>Skill Test</span>
        <div className='flex flex-col lg:flex-row gap-5 mt-4'>
          <div className='flex flex-col gap-1 md:gap-4 w-full md:w-11/12 lg:w-3/5'>
            <TestOverview setRank={setRank} setPercentile={setPercentile} setScore={setScore} />
            <QuickStats rank={rank} percentile={percentile} score={score} />
            <ComparisonGraph percentile={percentile}/>
          </div>
          <div className='w-full md:w-11/12 lg:w-2/5 flex flex-col gap-4'>
            <SyllabusAnalysis />
            <QuestionAnalysis score={score} />
          </div>
        </div>
    </div>
  );
};

export default Skills;