import React from 'react'

export default function Header() {
  return (
    <header className='bg-gray-600 py-3'>
        <nav className='flex justify-between max-w-[1200px] m-auto'>
            <h3 className='text-white text-[1.1rem]'>xyz</h3>
            <ul className='flex'>
                <li>
                    <a href='/' className='hover:underline-offset-1 hover:underline text-white px-2 text-[1.1rem]'>Form</a>
                </li>
                <li>
                    <a href='/view-data' className='text-white hover:underline-offset-1 hover:underline px-2 text-[1.1rem]'>Data</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
