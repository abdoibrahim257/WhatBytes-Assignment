import React from 'react'

const SyllabusAnalysis = () => {

    //dummy data
    const syllabus = [
        {
            topic: "HTML Tools Forms, History",
            percentage: 80,
            color: 'bg-blue-500'
        },
        {
            topic: "Tags & References in HTMl",
            percentage: 60, 
            color: 'bg-orange-500'
        },
        {
            topic: "Tables & References in HTML",
            percentage: 24,
            color: 'bg-red-500'
        },
        {
            topic: "Tables && CSS Basics",
            percentage: 99,
            color: 'bg-green-500'
        }
    ]

  return (
    <div className='p-3 border shadow-sm rounded'>
        <p className='font-bold mb-8'>Syllabus Wise Analysis</p>
        <div   className='flex flex-col gap-8'>
            {syllabus.map((item, index) => (
                <div key={index} className='flex flex-col gap-2'>
                    <div>{item.topic}</div>
                    <div className='flex items-center justify-between gap-3 mx-2'>
                        <div className='bg-gray-300 w-5/6 h-3 rounded-full'>
                            <div className={`h-full ${item.color} rounded-full`} style={{width: `${item.percentage}%`}}></div>
                        </div>
                        <p>{item.percentage}%</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SyllabusAnalysis