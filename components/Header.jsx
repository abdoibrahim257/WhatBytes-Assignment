import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <div>
        <div className='flex justify-between items-center p-5'>
            <Image src="/Frame.svg" alt="Logo" width={150} height={150} />
            <div className='flex items-center gap-1 shadow-md rounded-lg p-2'>
                <Image src="/me.jpg" alt="Profile" width={50} height={60} className='h-14 rounded-full object-contain'/>
                <p className='font-bold'>Abdulrahman</p>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Header