import React, { useContext, useEffect, useState } from 'react';
import collegesData from './colleges.json';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { GoArrowLeft } from "react-icons/go";

function CollegeList() {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [showBackButton, setShowBackButton] = useState(false);

  const context = useContext(myContext);
  const { mode } = context;

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
    setShowBackButton(true);
  };

  const handleBackButtonClick = () => {
    setSelectedCollege(null);
    setShowBackButton(false);
  };

  useEffect(() => {
    document.title = "its Engineering - Colleges";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div>
        {!selectedCollege && (
          <>
            <h1 className='text-center text-2xl font-bold text-black mt-4' style={{ color: mode === 'dark' ? 'gray' : '' }}>List of Colleges in Hyderabad</h1>
            <div>
              {collegesData.map((college, index) => (
                <div className='' key={index}>
                  <button
                    onClick={() => handleCollegeClick(college)}
                    className=' font-bold text-left w-full  text-blue-900 cursor-pointer lg:px-[20%] px-5 '
                  >
                    <br />
                    <div onClick={(e) => e.preventDefault()} className='flex flex-col'>
                      <div className='text-xs text-gray-600 ml-5'>{college.url}</div>
                      <div className='hover:underline' style={{ color: mode === 'dark' ? '#8ab4f8' : '' }}> {`${index + 1}. ${college.collegeName}`} </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {showBackButton && (
          <button className=' text-center lg:text-2xl flex font-semibold my-2 lg:mx-10 mx-5 my-5' onClick={handleBackButtonClick} style={{ color: mode === 'dark' ? 'white' : '' }}> <div className='lg:mt-1.5 mt-1'><GoArrowLeft /></div>Back</button>
        )}

        {selectedCollege && (
          <div>
            <p className=' text-center text-3xl font-bold text-black mb-2 text-blue-800' style={{ color: mode === 'dark' ? '#8ab4f8' : '' }}>{selectedCollege.collegeName}</p>
            <p className=' text-center text-2xl font-semibold mb-2 ' style={{ color: mode === 'dark' ? 'gray' : '' }}> {selectedCollege.city}</p>
            <p className=' text-center text-2xl font-semibold mb-2 text-gray-600' >Approved By: {selectedCollege.approvedBy}</p>
            <p className=' text-center text-2xl font-semibold mb-2 text-gray-600' >Ownership Type: {selectedCollege.ownershipType}</p>
            <div className='flex justify-around lg:mx-[30%]  my-5'>
              <p>
                <a href={selectedCollege.url} target='_blank' rel='noopener noreferrer' className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded pointer">
                  Website
                </a>
              </p>
              <p>
                <a href={selectedCollege.maps} target='_blank' rel='noopener noreferrer' className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded pointer">
                  Google Maps
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default CollegeList;
