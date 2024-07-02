import React from 'react'

function Bg() {
  return (
    <div className='fixed w-full h-screen z-[2]'>
    <nav className='w-full py-10 flex justify-center text-zinc-200 text-xl absolute top-[5%]' > Document</nav>
     <h1 className='text-[14vw] leading-none tracking-tighter 
     absolute top-1/2 left-1/2 -translate-x-[50%]
      -translate-y-[50%] font-semibold text-zinc-900'>Docs.</h1>
      </div>
  )
}

export default Bg