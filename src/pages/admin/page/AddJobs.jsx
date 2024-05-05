import React, { useContext } from 'react'
import myContext from '../../../context/data/myContext'

function AddJobs() {
    const context = useContext(myContext);
    const { jobs, setJobs, addJobs } = context;
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add jobs</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={jobs.company}
                            onChange={(e) => setJobs({ ...jobs, company: e.target.value })}
                            name='company'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='company'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={jobs.title}
                            onChange={(e) => setJobs({ ...jobs, title: e.target.value })}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={jobs.location}
                            onChange={(e) => setJobs({ ...jobs, location: e.target.value })}
                            name='location'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='location'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={jobs.type}
                            onChange={(e) => setJobs({ ...jobs, type: e.target.value })}
                            name='type'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='type'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={jobs.salary}
                            onChange={(e) => setJobs({ ...jobs, salary: e.target.value })}
                            name='salary'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='salary'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={jobs.exp}
                            onChange={(e) => setJobs({ ...jobs, exp: e.target.value })}
                            name='exp'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='expire'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={jobs.link}
                            onChange={(e) => setJobs({ ...jobs, link: e.target.value })}
                            name='link'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='apply link'
                        />
                    </div>
                    
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={addJobs}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Jobs
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddJobs