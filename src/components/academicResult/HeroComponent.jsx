import React, {useContext}from 'react'
import AcademicReportResult from './AcademicReportResult'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext';

function HeroComponent() {

  const context = useContext(myContext);
  const { mode  } = context;

  return (
    <>
    <div className="container lg:px-5 py-10 md:py-2 mx-auto w-[100%]">
                <div className="lg:w-1/2 w-full ml-5 mb-10 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Fetch your Results </h1>
                    <div className="h-1 w-20 bg-pink-600 rounded"></div>
                </div>
    <div className=" bg-gray-800 w-[100%] lg:w-[80%] lg:rounded-md lg:ml-[10%] -mt-5">
 
  <section className="relative py-5 sm:py-5 lg:pt-10 xl:pb-0 w-">
    
    <div className="relative mx-auto max-w-7xl px-2 sm:px-2 lg:px-8">
      
      <div className="mx-auto max-w-3xl text-center">
        
        <h1 className="mt-5 text-1xl font-light leading-snug text-gray-100 sm:text-2xl sm:leading-snug lg:text-6xl lg:leading-snug" >
          
          <span className="relative inline-flex justify-center whitespace-nowrap font-bold " >Jntuh Results</span>
        </h1>
       <div className='w-[100%]'>
        <AcademicReportResult />
        </div>
      </div>
    </div>
    <div className="text-right mt-4 mr-10">
        <Link to="/results" className="text-sm font-bold text-blue-200 hover:text-blue-500 hover:underline">Click for Full Details</Link>
    </div>
    <div className=" flex flex-col items-center justify-center divide-y  bg-gray-700 shadow-lg sm:flex-row sm:divide-x sm:divide-y-0 md:mt-5">
     
    </div>
  </section>
</div>
</div>
</>
  )
}

export default HeroComponent