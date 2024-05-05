import React, {useEffect, useContext } from 'react'
import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTab';

function Dashboard() {
    const context = useContext(myContext)
    const { mode, product, order, user, jobs} = context

    const totalProducts = product.length;
    const totalOrders = order.length;
    const totalUsers = user.length;
    const totalJobs = jobs.length;
    

    useEffect(() =>{
        document.title="its Engineering - Admin"
    },[]);

  return (
    <Layout>
        <section className="text-gray-600 body-font mt-10 mb-10">
            <div className="container px-5 mx-auto mb-10">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 w-2/4 w-full">
                        <div  style={{  color: mode === 'dark' ? 'white' : '', }} >
                            
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{totalProducts}</h2>
                            <p className=" text-purple-500  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Products</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 w-2/4 w-full">
                        <div style={{ color: mode === 'dark' ? 'white' : '', }}>
                            
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{totalOrders}</h2>
                            <p className=" text-purple-500  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Orders</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 w-2/4 w-full">
                        <div  style={{  color: mode === 'dark' ? 'white' : '', }} >
                           
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{totalUsers}</h2>
                            <p className=" text-purple-500  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Users</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 w-2/4 w-full">
                        <div      style={{  color: mode === 'dark' ? 'white' : '', }}>
                            
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{totalJobs}</h2>
                            <p className=" text-purple-500  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Jobs</p>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardTab/>
        </section>
    </Layout>
  )
}

export default Dashboard