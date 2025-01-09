import React from 'react'
import Image from 'next/image'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const ComparisonGraph = ({percentile}) => {

    const mean = 72; // Mean (average score)
    const stdDev = 8; // Standard deviation
    const userValu  =+percentile;
    const  lowerOrHigher = ()  =>{
        if (userValu > mean) {
            return "higher";
        } else {
            return "lower";
        }
    }

    const xValues = Array.from({ length: 100 }, (_, i) => i + 1);

    const yValues = xValues.map((x) =>
        (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
        Math.exp(-Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2))) * 100
    );

    // console.log("Percentile:", userValu);
    const userScoreIndex = xValues.indexOf(userValu);
    // console.log("User Score Index:", userScoreIndex);
    const userScoreY = yValues[userScoreIndex];
    // console.log("User Score Y:", userScoreY);

    const data = {
        labels: xValues,
        datasets: [
        {
            label: 'Normal Distribution',
            data: yValues,
            borderColor: 'rgba(0,0,0,1)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            fill: false,
            pointRadius:0,

        },
        {
            label: 'User Score',
            data: xValues.map((x, i) => (i === userScoreIndex ? userScoreY : null)),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            pointRadius: 5,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            showLine: false,
        },
        {
            label: 'User Score Line',
            data: [
              { x: userValu, y: 0 },
              { x: userValu, y: Math.max(...yValues) },
            ],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 3,
            pointRadius: 0,
            fill: false,
          },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
        legend: {
            display: true,
            position: 'top',
        },
        },
        scales: {
        x: {
            grid: {
            display: false,
            },
            title: {
            display: true,
            text: 'Scores',
            },
        },
        y: {
            grid: {
            display: false,
            },
            title: {
            display: true,
            text: 'Density',
            },
        },
        },
    };

  return (
    <div className='p-3 border shadow-sm rounded'>
        <p className='font-bold'>Comparison Graph</p>
        <div className='flex items-center gap-10 mt-2'>
            <p className='text-slate-600'>You scored {percentile}% which is {lowerOrHigher()} than the average percentile {mean}% of all engineers who took this assginment</p>
            <Image  src  = "/stat.svg" alt="stats" width={40} height={30} />
        </div>
        <div className='mt-5 flex justify-center'>
            <Line data={data} options={options} />
        </div>

    </div>
  )
}

export default ComparisonGraph