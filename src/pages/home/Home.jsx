import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
// import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import ProductCard from '../../components/productCard/ProductCard'
// import HeroComponent from '../../components/academicResult/HeroComponent';
import Singleproduct from '../../components/singleproduct/Singleproduct';
import ProjectIdeas from '../../components/projectIdeas/ProjectIdeas';
// import Singlejobcard from '../../components/singleproduct/Singlejobcard';
// import Track from '../../components/track/Track'



function Home() {
useEffect(() =>{
    document.title="its Engineering"
},[]);

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <Layout>
      <HeroSection />
      <ProductCard />
      <Singleproduct />
      {/* <HeroComponent /> */}
      {/* <Singlejobcard /> */}
     <ProjectIdeas />
      {/* <Track /> */}
          <marquee behavior="smooth" direction="" ><h1 className="mt-1 mb-2 text-3xl font-light leading-snug text-gray-500   sm:text-2xl sm:leading-snug lg:text-6xl " >
          <span className="relative inline-flex justify-center whitespace-nowrap font-bold leading-relaxed bg-gradient-to-b from-green-900 via-green-500 to-white-900 text-transparent bg-clip-text " >At our platform, you have the opportunity to procure projects at competitive prices. Additionally, you can explore job listings and submit applications, access JNTUH results, and avail yourself of various other functionalities. We strive to provide a comprehensive and user-friendly experience for all our users.</span>
        </h1></marquee>
    </Layout>
  )
}

export default Home