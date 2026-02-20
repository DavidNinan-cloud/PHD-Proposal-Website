import Navbar from './components/Navbar'
import SampleStartEngine from './components/ProjectSample/SampleStartEngine'
import SampleMainPage from './components/ProjectSample/SampleMainPage'
import DataPortal from './components/ProjectSample/DataPortal'
import IntroPage from './components/ProjectSample/IntroPage'
import DataIngestion from './components/ProjectSample/DataIngestion'

function App() {
  return (
    <div 
      // className='bg-red-600 p-12'
      >
      <div>
        <Navbar/>
      </div>
      <SampleMainPage/>
      
      <SampleStartEngine/>

      <IntroPage details={'Data Portal'} />
      
      <DataPortal/>

      <IntroPage details={'Data Ingestion Layer'} />
      
      <DataIngestion/>

      <div id='maintenance-Mode' className='relative min-h-screen bg-cover bg-center px-12 w-full flex justify-center ' 
      style={{
        background: 'rgb(64,29,243)',
        background: 'linear-gradient(135deg, rgba(64,29,243,1) 0%, rgba(159,63,220,1) 85%)'
      }}>
        <div className='text-center h-fit w-fit my-auto text-white font-Playfair font-semibold leading-snug capitalize'>
            <p className='sm:text-xl lg:text-5xl '>Coming Soon</p>
            <p className='lg:text-2xl py-12'>Project is under construction</p>
            <p className='lg:text-xl '>Checkout the &nbsp;   
                  <a id='component-id' href="https://www.linkedin.com/company/biyn-enterprises/" target="_blank" className='underline hover:no-underline'> Project Proposal Page</a>
            </p>
            
        </div>
        
      </div>
    </div>
  )
}



export default App
