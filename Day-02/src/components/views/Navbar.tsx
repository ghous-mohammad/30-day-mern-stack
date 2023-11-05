import React from 'react'

const Navbar = () => {
  return (
    <header>

        <nav className=' '>
            <ul className='flex justify-center space-x-9 py-8'>
               <a href='/' ><li className='border rounded-3xl px-6 py-2  hover:text-slate-200 border-slate-500 hover:border-slate-300'>Home </li></a> 
               <a href='#pas' ><li className='border rounded-3xl px-6 py-2  hover:text-slate-200  border-slate-500 hover:border-slate-300'>Learn About Props & State</li></a> 
               <a href='#about' ><li className='border rounded-3xl px-6 py-2  hover:text-slate-200  border-slate-500 hover:border-slate-300' >About</li></a> 
             
                    
          </ul>


        </nav>

        

      
    </header>

  )
}

export default Navbar