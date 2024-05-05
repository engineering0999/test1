import React, { useContext, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';

function About() {
useEffect(()=>{
    window.scrollTo(0, 0);
},[])

useEffect(() =>{
    document.title="its Engineering - About"
},[]);

const context = useContext(myContext);
const { mode } = context;

    return(
        <Layout>
        {/* <div >
            <img className="w-20" src="https://tse2.mm.bing.net/th/id/OIG1.jAfgZmCnwfSyBg7Cs_Ti?pid=ImgGn" alt="" />
        </div> */}
        <div className="sm:flex items-center max-w-screen-xl" style={{ color: mode === 'dark' ? 'white' : '' }}>
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600" >Our Company</span>
            </h2>
            <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
            Welcome to itsEngineering, the ultimate destination for engineering enthusiasts and professionals alike. At itsEngineering, we are dedicated to providing a comprehensive platform where users can access a plethora of engineering resources, services, and opportunities.

          Our Mission
        Our mission at itsEngineering is to empower engineers and aspiring engineers by offering a wide range of valuable services and resources. We aim to foster a vibrant community where individuals can learn, collaborate, and thrive in their engineering endeavors.
            </p>
            
        </div>
    </div>
</div>
<div className='m-10' style={{ color: mode === 'dark' ? 'white' : '' }}>
<h1 className='font-bold text-xl'>What We Offer</h1>
<ul >
    <li className='py-2' >
<span className='font-bold'> Engineering Projects:</span> Explore a diverse collection of engineering projects covering various disciplines, from Artificial Engineering to Machine Learning. Our projects are carefully curated to inspire creativity and innovation.
</li>
<li className='py-2'>
<span className='font-bold'>Job Opportunities:</span> Take the next step in your engineering career by browsing through our extensive job listings. Whether you're seeking internships, entry-level positions, or advanced roles, itsEngineering connects you with exciting opportunities in the field.
</li>
<li className='py-2'>
<span className='font-bold'>Academic Results:</span> Stay updated with your academic progress by accessing your JNTUH (Jawaharlal Nehru Technological University Hyderabad) results conveniently through our platform. We provide a seamless experience for students to track their academic performance effortlessly.
</li>
<li className='py-2'>
<span className='font-bold'>Educational Resources:</span> Expand your knowledge and skills with our vast collection of educational resources, including tutorials, articles, and study materials. Whether you're preparing for exams or seeking to broaden your understanding of engineering concepts, we've got you covered.
</li>
<li className='py-2'>
<span className='font-bold'>Community Forums:</span> Engage with like-minded individuals, seek advice, and share your insights on our community forums. Connect with fellow engineers, students, and professionals from around the world to collaborate and exchange ideas.
</li>
</ul>
<p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
If you have any queries, please do <span>
 <Link to={'/contactus'} className='font-bold underline text-indigo-600 '>contact us</Link></span> 
      </p>
</div>

        </Layout>
    )

}

export default About