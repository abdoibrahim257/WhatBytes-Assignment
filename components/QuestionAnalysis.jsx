"use client";
import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis = ({score}) => {

    const data = {
      labels: ["Incorrect", "Correct"],
      datasets: [
        {
          data: [15-score,score], 
          backgroundColor: ["#E5E7EB", "#3B82F6"], 
          hoverBackgroundColor: ["#E5E7EB", "#3B82F6"],
          borderWidth: 0,
        },
      ],
    };

    const options = {
      cutout: "75%", 
      plugins: {
        tooltip: {
          enabled: false, 
        },
        legend: {
          display: false, 
        },
      },
    };

    

  return (
    <div className='p-3 border shadow-sm rounded'>
        <div className='flex justify-between items-center mb-4'>
            <p className='font-bold'>Question Analysis</p>
            <p className='text-blue-700 font-bold'>{score}/15</p>
        </div>
        <div  className='flex flex-col gap-2 items-center'>
            {score === "15" ? <p className='w-full text-left'>You scored {score} out of 15. Great Job</p> : <p className='w-full text-left'>you scored {score} out of 15. However, it still needs some improvements.</p>}
            <div  className='flex justify-center w-1/2'>
                <Doughnut data={data} options={options} />
            </div>
            <div className='relative -top-24'>
              <img src="/arrow.svg" alt="bullseye" className='w-10' />
            </div>
        </div>
    </div>
  )
}

export default QuestionAnalysis