import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

function App() {
  return (
    <div 
      // className='bg-red-600 p-12'
      >
      <div>
        <Navbar/>
      </div>
      {/* <div className="w-full pt-36 text-3xl font-bold underline min-h-screen bg-amber-500">
          <h1>
            Hello world!
          </h1>
      </div> */}
      {/* <div className="text-3xl font-bold underline min-h-screen bg-slate-500">
      </div> */}
      
      {/* About Me */}
      {/* <AboutMe/> */}
      {/* Contact */}
      {/* <Contact/> */}

      <div id='maintenance-Mode' className='relative min-h-screen bg-cover bg-center px-12 w-full flex justify-center ' 
      style={{
        background: 'rgb(64,29,243)',
        background: 'linear-gradient(135deg, rgba(64,29,243,1) 0%, rgba(159,63,220,1) 85%)'
      }}>
        <div className='text-center h-fit w-fit my-auto text-white font-Playfair font-semibold leading-snug capitalize'>
            <p className='sm:text-xl lg:text-5xl '>Coming Soon</p>
            <p className='lg:text-2xl py-12'>Our Website is under construction</p>
            <p className='lg:text-xl '>Checkout Our &nbsp;   
                  <a id='component-id' href="https://www.linkedin.com/company/biyn-enterprises/" target="_blank" className='underline hover:no-underline'> Linkedin Page</a>
            </p>
            
        </div>
        
      </div>
    </div>
  )
}

export default App
