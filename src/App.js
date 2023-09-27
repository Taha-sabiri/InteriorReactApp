
import './App.css';
import { Bars3Icon, MagnifyingGlassIcon ,  AtSymbolIcon ,EllipsisHorizontalIcon} from '@heroicons/react/24/outline'
import imgone from './assets/img/black-and-grey-living-room.jpg'
import imgt1 from './assets/img/Black-and-blue-painted-room-ideas-Nathalie-I.jpg'
import imgt2 from './assets/img/download.jpeg'
import imgt3 from './assets/img/modern-dark-interiors-1.jpg'



function App() {
  return (
    <>

    <section id='header' className=' min-h-screen '>
      <div className=' flex justify-between px-3 py-4 m-3 rounded-md header-sec  '>
      <div className='bg-white rounded-md w-80 p-3   '>
          <h1 className='text-4xl font-normal'>Wooden <br/> Set in <span className='text-amber-900'>Paradise</span></h1>
          <hr className='my-3 h-0.5 border-t-0 bg-gray-300 '/>
          <div className='flex justify-between mb-1'>
            <h1>Detail</h1>
            <div className='flex'>
              <h1 className='mr-2'> 10 photos </h1>
              <EllipsisHorizontalIcon className='w-5'/>
            </div>
            
          </div>

          <img src={imgt1} className='w-full h-28 hover:scale-105 hover:shadow-2xl transition-all  rounded-md duration-300'/> 
          <div className='flex mt-1'>
          <img src={imgt2} className='w-1/2 h-28 rounded-md pr-1 hover:scale-105 hover:shadow-2xl duration-300 '/> 
          <img src={imgt3} className='w-1/2 h-28 rounded-md pl-1 hover:scale-105 hover:shadow-2xl duration-300'/> 
          </div>
          <div className='flex mt-2 flex-wrap'>
              <div className='bg-gray-400 rounded-full h-9 px-6 flex items-center mr-1 mt-1 hover:bg-amber-900 hover:text-white duration-300 '>
                  <h1>BED</h1>
              </div>
              <div className='bg-gray-400 rounded-full h-9 px-6 flex items-center mr-1 mt-1  hover:bg-amber-900 hover:text-white duration-300 '>
                  <h1>CHAIR</h1>
              </div>
              <div className='bg-gray-400 rounded-full h-9 px-6 flex items-center mr-1 mt-1   hover:bg-amber-900 hover:text-white duration-300  '>
                  <h1>DESK</h1>
              </div>
              <div className='bg-gray-400 rounded-full h-9 px-6 flex items-center mr-1 mt-1  hover:bg-amber-900 hover:text-white duration-300  '>
                  <h1>BIN BAG</h1>
              </div>
          </div>

      </div>
     
      <div className='d-flex inline-flex nav-item '>
        <div className='bg-white w-8 h-8 rounded-full p-2 shadow-lg hover:-translate-y-2 duration-300 ml-2'>
            <Bars3Icon/>
        </div>
        <div className='bg-white w-8 h-8 rounded-full p-2 shadow-lg hover:-translate-y-2 duration-300 ml-2'>
            <MagnifyingGlassIcon />
        </div>
        <div className='bg-white w-8 h-8 rounded-full p-2 shadow-lg hover:-translate-y-2 duration-300 ml-2'>
            <AtSymbolIcon />
        </div>

       
        
      </div>
    </div>

    <div className='flex '>
      <h1 className='text-header   '>
        INTERION.
      </h1>
      <div className='flex-col mt-4'>
        <div className='border-solid border-2 border-black rounded-full py-1 px-3 w-5/6 text-center hover:bg-black hover:text-white duration-300'>
          <h1>WHERE HOME , MEETS HEAR</h1>
        </div>
        <div className=' pr-1 mt-4'>
        <h1>Irure molli nisi velit sunt id minim. Irure anim ad culpa est laborum. Laborum est officia officia minim enim ut laboris velit exercitation aliquip non aliqua. Dolore labore cillum velit non.</h1>
        </div>
        
      </div>
    </div>
    </section>

    <section className='bg-black min-h-screen flex '>
      <div className=''>
      
      </div>

    </section>
  
    </>
   

    
    
  );
}

export default App;
