import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Jobs() {
    const context = useContext(myContext);
    const { jobs, mode } = context;

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(jobs);

    useEffect(() => {
        setFilteredJobs(jobs);
    }, [jobs]);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = jobs.filter(
            (job) =>
                job.title.toLowerCase().includes(query) ||
                job.company.toLowerCase().includes(query) ||
                job.location.toLowerCase().includes(query)
        );
        setFilteredJobs(filtered);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        document.title = "its Engineering - Jobs";
    }, []);

    //aos animation
    useEffect(() => {
        AOS.init({duration:1300})
    })
    
    return (
        <Layout>
            <section className="text-gray-600 body-font w-[100%] mb-5">
                <h1 className=' text-center text-3xl font-bold text-black my-4' style={{ color: mode === 'dark' ? 'white' : '' }}>Jobs for <span className='text-green-700'> You</span></h1>
                <div className="container px-5 py-3  ">
                    <div className="flex flex-wrap ">
                        
                        <div className="lg:w-[60%] w-[100%] lg:ml-[22%] mb-8">
                            <input
                                type="text"
                                placeholder="Search by role or company or location"
                                className="block w-full p-4 ps-5 font-bold text-sm text-gray-900 border-2 border-gray-500 rounded-lg"
                                value={searchQuery}
                                onChange={handleSearch}
                                style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}
                                data-aos="fade-right"
                            />
                        </div>

                        
                        
                        {filteredJobs.slice(0).reverse().map((item) => {
                            const {
                                company,
                                title,
                                location,
                                type,
                                salary,
                                link,
                                exp,
                            } = item;
                            return (
                                
                                <div
                                    key={link}
                                    className="lg:p-4 lg:ml-[22%] w-[100%]  lg:w-[60%] mb-5 " data-aos="fade-right"
                                >
                                    <div className="h-full  transition-shadow duration-300 ease-in-out py-2 rounded-md overflow-hidden bg-gray-800 ">
                                        <div className="p-5 ">
                                            <div className="flex items-center justify-between">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">
                                                    {location}
                                                </h2>
                                                <h1 className="tracking-widest text-xs title-font font-medium text-blue-300 mb-1">
                                                    {type}
                                                </h1>
                                            </div>
                                            <h1 className="title-font text-2xl font-medium text-gray-200  lg:mr-20">
                                                {company}
                                            </h1>
                                            <h1 className="title-font text-3xl font-medium text-gray-100 mb-2 lg:mr-20">
                                                {title}
                                            </h1>
                                            <div className="flex items-center justify-between">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1">
                                                    {salary}
                                                </h2>
                                                <a
                                                    href={link}
                                                    target="_blank"
                                                    className="flex items-center rounded-md bg-slate-200 px-3 py-2.5 text-center text-sm font-medium text-black hover:bg-gray-500 hover:text-white "
                                                >
                                                    Apply
                                                    <svg
                                                        className="ml-2"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                        <polyline points="15 3 21 3 21 9"></polyline>
                                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                                    </svg>
                                                </a>
                                            </div>
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1">
                                                {exp}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Jobs;
