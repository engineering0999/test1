import React from "react";

function Skeleton () {
    return(
        <>
        
<div role="status" className="w-[100%] animate-pulse mt-7 pl-2 pr-2">
    <div className="h-6 bg-gray-200  dark:bg-gray-700 "></div>
    <div className="h-6 bg-gray-200  dark:bg-gray-500  mb-6"></div>
    <div className="h-6 bg-gray-200  dark:bg-gray-700 mb-2"></div>
    <div className="h-6 bg-gray-200  dark:bg-gray-700  "></div>
    <div className="h-40 bg-gray-200  dark:bg-gray-500  "></div>
    <div className="h-40 bg-gray-200  dark:bg-gray-500  mb-1"></div>
    <div className="h-6 bg-gray-200 dark:bg-gray-700 mb-10 "></div>
    <div className="h-6 bg-gray-200  dark:bg-gray-700 mb-2"></div>
    <div className="h-6 bg-gray-200  dark:bg-gray-700  "></div>
    <div className="h-40 bg-gray-200  dark:bg-gray-500  "></div>
    <div className="h-40 bg-gray-200  dark:bg-gray-500  mb-1"></div>
    <div className="h-6 bg-gray-200 dark:bg-gray-700 "></div>
    <span className="sr-only">Loading...</span>
</div>


        </>
    )
}

export default Skeleton