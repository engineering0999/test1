import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';

function Singlejobcard() {
  const context = useContext(myContext);
  const { jobs, mode } = context;
  const job = jobs[0];
console.log(jobs);
  return (
    <div className="container lg:px-5 py-10 md:py-2 mx-auto w-[100%]">
      <div className="lg:w-1/2 w-full ml-5 mb-5">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Trending Jobs</h1>
        <div className="h-1 w-20 bg-pink-600 rounded"></div>
      </div>
      <div className="w-[100%]">
        <section className="relative py-5 xl:pb-0 w-[100%]">
          <div className="relative mx-auto max-w-7xl px-2 sm:px-2 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="container px-5 py-3 md:py-2">
                <div className="flex flex-wrap">
                  <div className="lg:p-4 w-[100%] mb-5">
                    <div className="h-full transition-shadow duration-300 ease-in-out py-2 rounded-md overflow-hidden bg-gray-800">
                    {jobs.map((item) => {
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
                      <div className="p-5">
                        <div className="flex items-center justify-between">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">{location}</h2>
                          <h1 className="tracking-widest text-xs title-font font-medium text-blue-300 mb-1">{type}</h1>
                        </div>
                        <h1 className="title-font text-2xl font-medium text-gray-200">{company}</h1>
                        <h1 className="title-font text-3xl font-medium text-gray-100 mb-2">{title}</h1>
                        <div className="flex items-center justify-between">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1">{salary}</h2>
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center rounded-md bg-slate-200 px-3 py-2.5 text-center text-sm font-medium text-black hover:bg-gray-500 hover:text-white"
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
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1">{exp}</h2>
                      </div>
                            )})}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right mt-4 mr-10">
            <Link to="/jobs" className="text-sm font-bold text-blue-800 hover:text-blue-500 hover:underline">Click for Full Details</Link>
          </div>
          <div className="flex flex-col items-center justify-center divide-y bg-gray-700 shadow-lg sm:flex-row sm:divide-x sm:divide-y-0 md:mt-5"></div>
        </section>
      </div>
    </div>
  );
}

export default Singlejobcard;
