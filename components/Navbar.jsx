"use client";
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [selected, setSelected] = useState('Skill Test');

    const navItems = [
        {name: 'Dashboard', icon: '/dashboard.svg'},
        {name: 'Skill Test', icon: '/skill.svg'},
        {name: 'Internship', icon: '/internship.svg'},
    ];

  return (
    <div className='w-1/6 h-screen p-4 flex flex-col gap-7 border-r'>
        {navItems.map((item, index) => (
            <a key={index} className={`nav-items ${selected === item.name ? 'bg-gray-200 rounded-xl text-blue-500' : ''}`} onClick={() => setSelected(item.name)}>
                <Image src={item.icon} alt={item.name} width={30} height={30} />
                <p className='font-medium'>{item.name}</p>
            </a>
        ))}
    </div>
  )
}

export default Navbar