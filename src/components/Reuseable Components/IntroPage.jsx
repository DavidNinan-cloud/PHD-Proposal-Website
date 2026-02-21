import React from 'react'

export default function IntroPage({details}) {
  return (
    <div>     
         <div id='maintenance-Mode' className='relative py-12 bg-cover bg-center px-12 w-full flex justify-center ' 
      style={{
        background: 'rgb(64,29,243)',
        background: 'linear-gradient(135deg, rgba(64,29,243,1) 0%, rgba(159,63,220,1) 85%)'
      }}>
        <div className='text-center h-fit w-fit my-auto text-white font-Nunito   capitalize'>
            <p className='sm:text-xl lg:text-3xl '> <span className='lg:text-5xl py-12 italic font-semibold'>{details} </span> </p>
            

        </div>
        
      </div>
      </div>
  )
}
