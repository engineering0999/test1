import { useEffect } from 'react';
import React from 'react';
import AcademicReportResult from '../../components/academicResult/AcademicReportResult';
import Layout from '../../components/layout/Layout';
import Testimonial from '../../components/testimonial/Testimonial';

const Result = () => {
 
    useEffect(() =>{
        document.title="its Engineering - Results"
    },[]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <Layout>
            {/* <div className='w-[100%] container mx-auto p-5'>
                <h2 className='text-center text-3xl font-bold text-black'>JNTUH RESULTS</h2>
            </div> */}
          <AcademicReportResult />
            <Testimonial/>
            <h2 className='font-bold text-gray-500 p-10 leading-relaxed text-center'>Currently, our system exclusively provides results from JNTU-Hyderabad. However, we are planning to expand our coverage to include results from additional universities in the future.</h2>

        </Layout>
    );
}

export default Result;
