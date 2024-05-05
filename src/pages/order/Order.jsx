import React, { useEffect, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';
import { Link } from 'react-router-dom';

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid;

  const context = useContext(myContext);
  const { mode, loading, order } = context;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success('Copied to clipboard');
      })
      .catch(err => {
        console.error('Unable to copy text: ', err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "its Engineering - Orders";
  }, []);

  const filteredOrders = order.filter(obj => obj.userid === userid);

  return (
    <Layout>
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : filteredOrders.length === 0 ? (
        <div className="lg:w-1/1 mx-auto  flex flex-grow items-center justify-center mt-10 mx-5">
          <div className="rounded-lg bg-white p-8 text-center ">
            <img src="https://cdn.dribbble.com/users/1814433/screenshots/14029949/media/d8a06326f43fe29f112315d0eca63ab6.gif"
              className="lg:w-1/2 w-full lg:h-full mx-auto object-cover object-center rounded" alt="No Items in Cart" />
            <p className="text-gray-600">Oops! There are no projects in the cart</p>
            <Link to={'/allproducts'}>
              <button className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Add some projects</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="h-full pt-10">
          {filteredOrders.map((order) => (
            <div key={order.id} className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              {order.cartItems.map((item, index) => (
                <div key={index} className="rounded-lg md:w-2/3 ">
                  <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
                    <img src={item.imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <div className="flex align-center gap-2 flex-col mx-5">
                          {/* Download Button */}
                          <a href={`https://drive.google.com/uc?export=download&id=${item.did}`} target='_blank' download className="inline-flex lg:w-1/4 w-1/2  items-center px-4 lg:p-2 py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600" style={{ color: mode === 'dark' ? 'white' : '' }}>Download   <svg class="w-4 h-4 text-gray-900 dark:text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                     <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                  </svg></a>
                          <p className="text-1xl font-bold text-gray-400">If the download button does not work, please use the link below to access and clone the repository:</p>
                           <div className='flex items-center justify-between '>
                          <a href={item.link} target='_blank' className="text-1xl font-bold text-decoration-line: underline text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Click Here</a>
                          {/* Copy Button */}
                          {/* <button onClick={() => handleCopy(item.link)} className="flex items-center ml-8 rounded-md bg-slate-900 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                              strokeWidth="3" stroke="currentColor" aria-hidden="true" className="w-4 h-4 text-red">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75">
                              </path>
                            </svg>
                          </button> */}
                          </div>
                        </div>
                      
                     </div>
                    </div>
                  </div>
                  {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5">
                    <iframe className="h-350 w-full object-cover md:h-350 md:w-560" height="350" src="https://www.youtube-nocookie.com/embed/Ny0T2R-UGxo?si=a2T7juRAgk99r9_I" title="YouTube video player" frameBorder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div> */}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Order;
