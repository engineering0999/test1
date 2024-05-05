import React, { Fragment, useContext, useState } from 'react'
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { RxCross2 } from 'react-icons/rx'
import { FaHouse, FaBook, FaGraduationCap, FaRavelry, FaUserLarge, FaBars  } from "react-icons/fa6";
import { useSelector } from 'react-redux';

function Navbar() {
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  const [open, setOpen] = useState(false)

  const user = JSON.parse(localStorage.getItem('user'));
  const currentUser = localStorage.getItem('user_name');

  const logoText = user ? `Hello ${currentUser}!` : 'iE';
  const linkTo = user ? '/' : '/'; // Adjust link destination as needed
  const additionalText = {
    '/allproducts': 'Project Kontava Mawa :)',
    '/jobs': 'Oka Job Ki Apply Cheyyochu gaa!!',
    '/results': 'Results Chuskuntava Mawa :(',
    '/order': 'Kontey Untay Mawa ;)',
    // '/colleges': 'Mana Siblings Bathuku Ayna Baguparudham!!',
    '/cart': 'Nka Okka Step A Mawa :)',
    '/contactus': 'Okkasari Contact ayy Chudu Mawa!',
    '/about': 'Maa Gurinchi Telusukuntava Mawa!'


  };

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login'
  }

  const cartItems = useSelector((state) => state.cart)

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className='bg-white sticky top-0 z-50'>
      <Transition.Root show={open} as={Fragment}>
        {/* Dropdown */}
        <Dialog as="div" className="relative z-0 lg:hidden" onClose={setOpen}>
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          {/* Dropdown Menu */}
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="-translate-x-[20%]"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-[50%] max-w-xs justify-end overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                {/* <div className="flex px-8 pb-2 pt-24">
               
                </div> */}
                <div className="space-y-6 border-t border-gray-200 px-10 mr-2 py-8 flex flex-col uppercase">
                <button
                    type="button"
                    className=" inline-flex items-center pt-16 font-bold text-2xl   text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                  {/* Orders link */}
                  {/* <Link to={'/allproducts'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Projects
                  </Link>
                  <Link to={'/jobs'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Jobs
                  </Link>
                  <Link to={'/results'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Results
                  </Link> */}
                   {user ? <Link to={'/order'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                  Orders
               </Link> : <Link to={'/signup'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Signup
                  </Link>} 

                  {/* <Link to={'/colleges'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                  Colleges
                </Link> */}
                 
                  <Link to={'/about'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    About us
                  </Link> 
                  <Link to={'/contactus'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Contact
                  </Link> 
                  
                  {/* Admin link */}
                  {user?.user?.email === "aravind@admin.com" &&
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Admin
                    </Link>
                  }

                  <div className="">
                  <button className='' onClick={toggleMode}>
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                  {/* Logout */}
                  {user ?
                    <div className="flow-root">
                      <a onClick={logout} className="  mt-20 block  font-medium text-red-700  " style={{ color: mode === 'dark' ? 'orange' : '', }}>
                        Logout
                      </a>
                    </div>:<div className="flow-root">
                    <Link to={'/login'} className="  mt-20 block  font-medium text-green-700  " style={{ color: mode === 'dark' ? 'orange' : '', }}>Login</Link>
                 </div> }
                  



                </div>
                
              </Dialog.Panel>
              
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      
     {/* bottom navbar */}
                  <div className=" bg-white  mb-0 fixed bottom-0 left-0 z-50 w-[100%] lg:hidden" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
                        <div className="flex ">
                        <div className={`flex-1 group ${location.pathname === '/' ? 'text-green-600' : 'text-gray-400'}`}>
                     <Link
                       to={'/'}
                       className='flex items-end justify-center text-center mx-auto px-4 pt-4 w-full  border-b-2 border-transparent ' >
                       <span className='block px-1 pt-1 pb-2'>
                         <i className='far fa-home text-xl pt-1 mb-1 block mx-1'>
                           <FaHouse />
                         </i>
                         <span className='block text-xs pb-1'>Home</span>
                       </span>
                     </Link>
                   </div>
                   <div className={`flex-1 group ${location.pathname === '/allproducts' ? 'text-green-600' : 'text-gray-400'}`}>
                    <Link to={'/allproducts'}  className='flex items-end justify-center text-center mx-auto px-4 pt-4 w-full  border-b-2 border-transparent '>
                        <span className="block px-1 pt-1 pb-2">
                            <i className="far fa-compass text-xl pt-1 mb-1 block mx-2"><FaBook /></i>
                            <span className="block text-xs pb-1">Projects</span>
                        </span>
                        </Link> 
                    </div>
                    <div className={`flex-1 group ${location.pathname === '/jobs' ? 'text-green-600' : 'text-gray-400'}`}>
                    <Link to={'/jobs'}  className='flex items-end justify-center text-center mx-auto px-4 pt-3 w-full  border-b-2 border-transparent '> 
                     <span className="block px-1 pt-1 pb-2">
                            <i className="far fa-search text-2xl pt-1 mb-1 block mx-0.5"><FaGraduationCap/></i>
                            <span className="block text-xs pb-1">Jobs</span>
                        </span>
                    </Link>
                </div>
                <div className={`flex-1 group ${location.pathname === '/results' ? 'text-green-600' : 'text-gray-400'}`}>
                    <Link to={'/results'}  className='flex items-end justify-center text-center mx-auto px-4 pt-3 w-full  border-b-2 border-transparent '>
                       <span className="block px-1 pt-1 pb-2">
                            <i className="far fa-cog text-2xl pt-1 mb-1 block mx-1.5"><FaRavelry/></i>
                            <span className="block text-xs pb-1">Results</span>
                        </span>
                    </Link>
                </div>
                <div className={`flex-1 group ${location.pathname === '/profile' ? 'text-green-600' : 'text-gray-400'} `}>
                   {user ? <Link to={'/profile'} className='flex items-end justify-center text-center mx-auto px-4 pt-3 w-full  border-b-2 border-transparent  ' >
                        <span className="block px-1 pt-1 pb-2">
                            <i className="far fa-cog text-xl pt-0 mb-1 block mx-1"><img
                    className="w-7 h-7 rounded-full "
                    src="https://pics.craiyon.com/2023-10-25/b65f72d6d11a48c1bc560059cc36e31f.webp"
                    alt="Dan_Abromov"
                  /></i>
                            <span className="block text-xs pb-1">Profile</span>
                        </span>
                    </Link>:<Link to={'/login'} className='flex items-end justify-center text-center mx-auto px-4 pt-3 w-full  border-b-2 border-transparent  ' >
                        <span className="block px-1 pt-1 pb-2">
                            <i className="far fa-cog text-xl pt-0 mb-1 block mx-1"><img
                    className="w-7 h-7 rounded-full "
                    src="https://pics.craiyon.com/2023-10-25/b65f72d6d11a48c1bc560059cc36e31f.webp"
                    alt="Dan_Abromov"
                  /></i>
                            <span className="block text-xs pb-1">Login</span>
                        </span>
                    </Link>}
                </div>
            </div>
        </div>
      
       {/* bottom navbar */}


      <header className="relative bg-white z-50">
        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">

            {/* <div className={`flex-1 group ${location.pathname === '/profile' ? 'block' : 'hidden'}`}>
                 
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
              </div> */}


              {/* Logo */}
              <div className="flex hidden lg:block">
              <Link to={linkTo} className='flex'>
               <div className="flex">
                 <h1 className='text-10 lg:text-xl font-bold text-black px-1 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '' }}>
                   {location.pathname === '/' ? logoText : additionalText[location.pathname] || logoText}
                 </h1>
               </div>
             </Link>
              </div>

              <div className="flex lg:hidden block mx-3">
              <div className={`flex-1 group ${location.pathname === '/' ? 'hidden' : 'block'}`}>
                {user &&
              <button className="flex items-center "  onClick={() => setOpen(true)} style={{  color: mode === 'dark' ? 'white' : '', }}><i className="far fa-cog text-xl pt-0 mb-1 block mx-1"><FaBars /></i>
                  
                </button>}</div>
              {user ? <div className={`flex-1 group ${location.pathname === '/' ? 'block' : 'hidden'}`}>
                   
              <Link to={'/'}> <h1 className='text-10 lg:text-xl font-bold text-black px-1 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '' }}>Hello {currentUser}!</h1>
              </Link></div>:<Link to={'/'}><h1 className='text-10 lg:text-2xl text-2xl font-bold text-black px-1 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '' }}>iE</h1></Link>
              }
           </div>

            {/* Mode Switch */}
            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link to={'/'} className="text-sm font-medium hover:underline hover:scale-125 text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                  Home
                </Link>
  
                <Link to={'/allproducts'} className="text-sm font-medium hover:underline hover:scale-125 text-gray-700  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                  Projects
                </Link>
                <Link to={'/jobs'} className="text-sm font-medium hover:underline hover:scale-125 text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                  Jobs
                </Link>
                <Link to={'/results'} className="text-sm font-medium hover:underline hover:scale-125 text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                  Results
                </Link>
                {/* <Link to={'/colleges'} className="text-sm font-medium hover:underline hover:scale-125 text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                  Colleges
                </Link> */}

              {/* Dropdown Trigger */}
              {user? <div className="lg:ml-8 lg:flex relative py-10 " onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                  <Link to={'/profile'} className="flex items-center text-gray-700 hover:text-gray-900">
                  <img
                    className="inline-block w-8 h-8 rounded-full hover:scale-125"
                    src="https://pics.craiyon.com/2023-10-25/b65f72d6d11a48c1bc560059cc36e31f.webp"
                    alt="Dan_Abromov"
                  />
                </Link>
              
                {/* Dropdown Content */}
                {dropdownOpen && (
                  <div className="absolute -left-12 mt-10 w-40 bg-slate-900 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-10">
                    {/* Orders link */}
                    {user ? <Link to={'/order'} className="block px-4 py-2 text-sm text-white hover:bg-slate-100 hover:text-slate-900 cursor-pointer" >
                  Orders
               </Link> : <Link to={'/signup'} className="block px-4 py-2 text-sm text-white hover:bg-slate-100 hover:text-slate-900 cursor-pointer" >
                    Signup
                  </Link>} 
              
                    {/* Admin link */}
                    {user?.user?.email === "aravind@admin.com" &&
                      <Link to={'/dashboard'} className="block px-4 py-2 text-sm text-white hover:bg-slate-100 hover:text-slate-900 cursor-pointer" >
                        Admin
                      </Link>
                    }
              
                    {/* Logout */}
                    {user &&
                      <a onClick={logout} className="block px-4 py-2 text-sm text-white hover:bg-slate-100 hover:text-slate-900 cursor-pointer" >
                        Logout
                      </a>
                    }
                      <div className="block px-4 py-1 text-sm text-white hover:bg-slate-100 hover:text-slate-900 cursor-pointer">
                  <button className='' onClick={toggleMode}>
                    {mode === 'light' ?
                      (<FiSun className='' size={26} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={26} />
                        ) : ''}
                  </button>
                </div>
                  </div>
                )}
              </div>: <Link to={'/signup'} className="text-sm font-medium hover:underline hover:scale-125 text-gray-700" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Signup
                  </Link>} 
              </div>
              {/* <div className="lg:hidden mt-2">
              <button className='' onClick={toggleMode}>
                    {mode === 'light' ?
                      (<FiSun className='' size={26} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={26} />
                        ) : ''}
                  </button>
                  </div> */}
 
              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
               {user? <Link to={'/cart'} className="group -m-2 mr-1 flex hover:scale-125 items-center p-2 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>

                  <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItems.length}</span>
                  <span className="sr-only  ">items in cart, view bag</span>
                </Link>: <Link to={'/signup'} className="text-sm font-bold lg:hidden text-gray-700" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Signup
                  </Link>} 
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
)
}

export default Navbar

