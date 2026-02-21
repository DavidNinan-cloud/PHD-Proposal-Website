import Navbar from './components/Navbar'

import Proposal from './components/Proposal/Proposal'
import CausalEngine from './components/Causal Engine/CausalEngine'
import DataPortalRoute from './components/Data Portal/DataPortalRoute'
import DevAlert from './components/DevAlert'
function App() {
  const newLocal = <p className='lg:text-xl '>Checkout the &nbsp;
    <a id='component-id' href="https://www.linkedin.com/company/biyn-enterprises/" target="_blank" className='underline hover:no-underline'> Project Proposal Page</a>
  </p>
  return (
    <div>
      
        {/* Proposal /> */}
          <Proposal/>

        {/* Causal Engine */}
          <CausalEngine/>

        {/* Data Portal */}
          <DataPortalRoute/>

          <DevAlert/>
      {/* <div id='maintenance-Mode' className='relative min-h-screen bg-cover bg-center px-12 w-full flex justify-center ' 
      style={{
        background: 'rgb(64,29,243)',
        background: 'linear-gradient(135deg, rgba(64,29,243,1) 0%, rgba(159,63,220,1) 85%)'
      }}>
        <div className='text-center h-fit w-fit my-auto text-white font-Playfair font-semibold leading-snug capitalize'>
            <p className='sm:text-xl lg:text-5xl '>Coming Soon</p>
            <p className='lg:text-2xl py-12'>The Project is under construction</p>            
        </div>
        
      </div> */}

    </div>
  )
}



export default App
