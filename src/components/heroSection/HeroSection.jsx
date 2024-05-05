import React  from 'react'
import Search from '../search/Search'



function HeroSection() {



  return (
    <div className=" bg-gray-800">
 
  <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
    
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div className="mx-auto max-w-3xl text-center">
        
        <h1 className="mt-5 text-3xl font-light leading-snug text-white sm:text-2xl sm:leading-snug lg:text-6xl lg:leading-snug" >
          
          <span className="relative inline-flex justify-center whitespace-nowrap font-bold"  >It's Engineering</span>
        </h1>
        <h3 className='mt-2 text-1xl font-light leading-snug text-white sm:text-1xl sm:leading-snug lg:text-4xl lg:leading-snug' >Discover the best engineering things here</h3>
       <div >
        <Search />
        </div>
      </div>
    </div>

    <div className=" flex flex-col items-center justify-center divide-y  bg-gray-700 shadow-lg sm:flex-row sm:divide-x sm:divide-y-0 md:mt-20">
     
    </div>
  </section>
</div>

  )
}

export default HeroSection