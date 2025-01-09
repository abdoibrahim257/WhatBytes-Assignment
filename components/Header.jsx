import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='flex justify-between items-center p-5'>
            <img src="/Frame.svg" alt="Logo" className="w-32 lg:w-40"/>
            <div className='flex items-center gap-1 shadow rounded-md p-2 hover:shadow-sm'>
                <img src="/me.jpg" alt="Profile" className='w-10 lg:w-14 h-10 lg:h-14 rounded-full object-contain'/>
                <p className='font-bold text-sm lg:text-base'>Abdulrahman</p>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Header