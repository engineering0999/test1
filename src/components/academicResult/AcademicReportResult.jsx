import React, { useEffect, useRef, useState,useContext } from 'react';
import jsPDF from 'jspdf';
import Skeleton from '../skeleton/Skeleton';
import myContext from '../../context/data/myContext';

const AcademicReportResult = () => {
    const context = useContext(myContext);
    const { jobs, mode } = context;

    const [academicData, setAcademicData] = useState(null);
    const [backlog, setBacklog] = useState(false);
    const [backlogCount, setBacklogCount] = useState(0);
    const [htno, setHtno] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const reportTemplateRef = useRef(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://resultsbackendapi.vercel.app/api/get?htno=${htno}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setAcademicData(data);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('JNTUH server is down. Please try again later.');
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        fetchData();
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            fetchData();
        }
    };

    const exportPdf = async () => {
        const content = reportTemplateRef.current;

        const doc = new jsPDF({
            format: [content.offsetWidth, content.offsetHeight + 20],
            orientation: 'portrait',
            unit: 'px',
            marginLeft: 10,
            marginTop: 10,
            marginRight: 10,
            marginBottom: 10,
        });

        doc.html(reportTemplateRef.current, {
            async callback(doc) {
                await doc.save(`${academicData.Details.Roll_No}_academic_results.pdf`);
            },
        });
    }

    useEffect(() => {
        if (academicData) {
            let backlogs = 0;
            Object.keys(academicData.Results).forEach((semester) => {
                const semesterData = academicData.Results[semester];
                if (!semesterData.CGPA) {
                    Object.keys(semesterData).forEach((subjectKey) => {
                        const subjectGrade = semesterData[subjectKey].subject_grade;
                        if (["F", "Ab", "-"].includes(subjectGrade)) {
                            backlogs++;
                        }
                    });
                }
            });
            setBacklogCount(backlogs);
            setBacklog(backlogs > 0);
        }
    }, [academicData]);

    return (
        <div className="w-[100%]">
            <div className="relative w-[50%] ml-[25%] mt-5 mb-5">
                <input
                    type="text"
                    placeholder="Enter your Roll No"
                    className="block w-full p-4 ps-5 font-bold text-sm text-gray-900 border-2 border-gray-500 rounded-lg"
                    value={htno}
                    onChange={(e) => setHtno(e.target.value.toUpperCase())}
                    onKeyPress={handleKeyPress}
                    required
                    style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}
                />
                <button onClick={handleSearch} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-2">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </button>
            </div>
            {loading ? (
         
            <>
            <Skeleton/>
            </>
            ) : (
                <>
                    {errorMessage ? (
                        <div className="text-center mt-4 text-red-500">
                            <p>{errorMessage}</p>
                        </div>
                    ) : (
                        academicData && (
                           <div ref={reportTemplateRef} className="m-2 text-[45%] sm:text-[60%] md:text-[80%] lg:text-[100%]">

                        <table className="w-[100%] mb-5">
                            <tbody>
                                <tr className="w-max bg-sky-100 md:bg-sky-100 ">
                                    {Object.keys(academicData.Details).map((key, index) => (
                                        <th className="border-2 border-gray-900" key={index}>{key}</th>
                                    ))}
                                </tr>
                                <tr className="font-bold text-center bg-gray-100">
                                    {Object.keys(academicData.Details).map((key, index) => (
                                        <td className="border-2 border-gray-900" key={index}>{academicData.Details[key]}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>

                        {Object.keys(academicData.Results).slice(0, -1).map((semester, index) => {
                            const semesterData = academicData.Results[semester];
                            return (
                                <div key={index}>
                                    <table className="w-[100%] mb-2">
                                        <tbody>
                                            <tr className="w-max bg-sky-100 md:bg-sky-100 ">
                                                <th className="border-2 border-gray-900">{semester} Results</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div>
                                        <table className="w-[100%] mb-1">
                                            <tbody>
                                                <tr className="w-max bg-sky-100 md:bg-sky-100 ">
                                                    <th className="border-2 border-gray-900">SUBJECT_CODE</th>
                                                    <th className="border-2 border-gray-900">SUBJECT_NAME</th>
                                                    <th className="border-2 border-gray-900">INTERNAL</th>
                                                    <th className="border-2 border-gray-900">EXTERNAL</th>
                                                    <th className="border-2 border-gray-900">TOTAL</th>
                                                    <th className="border-2 border-gray-900">GRADE</th>
                                                    <th className="border-2 border-gray-900">CREDITS</th>
                                                </tr>
                                                {Object.keys(semesterData).map((subjectKey, index) => {
                                                    const subject = semesterData[subjectKey];
                                                    if (subjectKey !== 'CGPA' && subjectKey !== 'total' && subjectKey !== 'credits') {
                                                        return (
                                                            <tr key={index} className="font-bold text-center bg-gray-100">
                                                                <td className="border-2 border-gray-900 ">{subject.subject_code}</td>
                                                                <td className="border-2 border-gray-900 ">{subject.subject_name}</td>
                                                                <td className="border-2 border-gray-900 ">{subject.subject_internal}</td>
                                                                <td className="border-2 border-gray-900 ">{subject.subject_external}</td>
                                                                <td className="border-2 border-gray-900 ">{subject.subject_total}</td>
                                                                <td className="border-2 border-gray-900 ">{subject.subject_grade}</td>
                                                                <td className="border-2 border-gray-900 ">{subject.subject_credits}</td>
                                                            </tr>
                                                        );
                                                    }
                                                    return null;
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    {!backlog &&
                                        <table className='w-[100%] mb-5'>
                                            <tbody>
                                                <tr className='font-bold text-center bg-gray-100'>
                                                    <th className=" border-2 border-gray-900 ">SGPA</th>
                                                    <td className="border-2 border-gray-900 bg-sky-100">{semesterData.CGPA}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    }
                                    <br />
                                </div>
                            );
                        })}
                        
                            <div className='Total'>
                                <table className='w-[100%] mb-2'>
                                    <tbody>
                                        <tr className='font-bold text-center  '>
                                            <th className="border-2 border-gray-900 bg-sky-100">Total CGPA</th>
                                            <th className=" border-2 border-gray-900 bg-sky-100 ">Total Percentage</th>
                                        </tr>
                             
                                 <tr className='font-bold text-center bg-gray-100'> 
                                     <td className="border-2 border-gray-900 ">{academicData.Results.Total}</td>   
                                     <td className="border-2 border-gray-900 ">{((academicData.Results.Total - 0.5) * 10).toFixed(2)}%</td>
                                 </tr>
                             </tbody>
                         </table>
                     </div>
                        
                     <div className=" flex justify-center align center my-5">
                    <button
                        className="bg-blue-500 text-white rounded p-3 hover:bg-blue-600 font-bold"
                        onClick={exportPdf}
                    >
                        Download Results
                    </button>
                </div>

                    </div>
                        )
                    )}
                    {backlog && (
                        <div className='flex justify-center align center'>
                        <p className='font-bold text-center bg-red-600 text-white rounded  px-4 py-2 text-xs lg:text-xl mx-5 w-max '>Backlog Count = {backlogCount}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default AcademicReportResult;
