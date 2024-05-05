import React, { useContext, useEffect } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import { Link } from 'react-router-dom';

function Profile() {
    const context = useContext(myContext);
    const { user } = context;

    // Logout function
    const logout = () => {
        localStorage.clear('user');
        window.location.href = '/login';
    };

    const user1 = JSON.parse(localStorage.getItem('user'));

    // Check if a user is logged in
    if (!user) {
        return <div>Loading...</div>; // or redirect to login page
    }

    // Extract name and email from the logged-in user
    const { name, email } = user;
    
    useEffect(() =>{
        document.title="its Engineering - Profile"
    },[]);
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const currentUserName = localStorage.getItem('user_name');
    const currentUserEmail = localStorage.getItem('user_email');

    return (
        <Layout>
            <div className="max-w-2xl mx-4 my-8 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                {/* Profile picture */}
                <div className="rounded-t-lg h-32 overflow-hidden">
                    <img className="object-cover object-top w-full" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="Mountain" />
                </div>
                {/* User picture */}
                <div className="mx-auto w-32 h-32 relative -mt-16  bg-gray-300  rounded-full overflow-hidden  ">
                    {/* <img className="object-cover object-center h-32" src="https://pics.craiyon.com/2023-10-25/b65f72d6d11a48c1bc560059cc36e31f.webp" alt="Woman looking front" /> */}
                    <h1 className='object-cover text-black object-center font-serif h-32 text-6xl lg:mt-7 mt-8 font-bold text-center'>{currentUserName[0]}</h1>
                </div>
                {/* User name and email */}
                <div className="text-center mt-2">
                    
                    <h2 className="font-bold text-2xl">{currentUserName}</h2>
                    <p className="text-gray-500">{currentUserEmail}</p>
                </div>
                {/* User statistics */}
                <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                    {/* Replace with your user statistics */}
                    <li className="flex flex-col items-center justify-around font-bold">
                       <Link to={'/order'}>My Orders</Link>
                    </li>
                    
                     {/* Admin link */}
                    {user1?.user?.email === "aravind@admin.com" &&
                      <Link to={'/dashboard'} className="flex flex-col font-bold items-center justify-around lg:hidden" >
                        Admin
                      </Link>
                    }
                    {/* <Link to={'/colleges'} className="flex flex-col font-bold items-center justify-around lg:hidden" >
                        Colleges List
                      </Link>
                      {user1?.user?.email !== "aravind@admin.com" &&
                      <Link to={'/contactus'} className="flex flex-col font-bold items-center justify-around " >
                        Contact Us
                      </Link>} */}

                      
                </ul>
                {/* Logout button */}

                <div className="p-4 border-t mx-8 mt-2 text-center">
                    {user &&
                        <button onClick={logout} className="block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 cursor-pointer" >
                            Logout
                        </button>
                    }
                </div>
            </div>
        </Layout>
    );
}

export default Profile;
