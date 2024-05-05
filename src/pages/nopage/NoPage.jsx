import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
  
 
<div className="h-screen w-screen bg-white flex items-center">
	<div className="container flex flex-col md:flex-row items-center justify-around px-5 text-gray-700 ">
   		<div className="max-w-md ml-[10%]">
      		<div className="text-5xl font-dark font-bold">404</div>
            <p
              className="text-2xl md:text-3xl font-light leading-normal"
            >Sorry we couldn't find this page. </p>
          <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
          
          <Link to={'/'}>
              <button className="mt-4 inline-block rounded bg-[#39ac31] px-4 py-2 font-semibold text-white hover:bg-yellow-600 hover:text-gray-800"> Go back to Home</button>
          </Link>
    </div>
      <div className="lg:w-2/3 xs:max-w-lg">
      <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"  alt="404" />
     </div>
    
  </div>
</div>

  )
}

export default NoPage