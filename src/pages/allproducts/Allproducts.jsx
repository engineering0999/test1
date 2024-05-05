import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../../components/filter/Filter';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Allproducts() {
  const context = useContext(myContext);
  const { mode, product, searchkey, filterType, filterPrice } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success('add to cart');
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "its Engineering - Projects";
  }, []);

  useEffect(() => {
    AOS.init({duration:1300})
 })

  return (
    <Layout>
      <div data-aos="fade-right">
      <Filter />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
            <div className="h-1 w-20 bg-pink-600 rounded"></div>
          </div>

          <div className="flex flex-wrap -m-4" data-aos="fade-down">
            {product
              .filter((obj) => obj.title.toLowerCase().includes(searchkey))
              .filter((obj) => obj.category.toLowerCase().includes(filterType))
              .filter((obj) => obj.price.includes(filterPrice))
              .map((item, index) => {
                const { title, price, description, imageUrl, id } = item;
                return (
                  <div key={index} className="lg:p-4 py-1 px-1 w-[50%] lg:w-1/4 drop-shadow-lg ">
                    <div className="lg:h-full h-70 lg:border-2 text-center lg:text-left hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 rounded-xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                      <Link to={`/productinfo/${id}`} className="flex justify-center cursor-pointer">
                        <img className=" rounded-2xl w-full lg:h-80 h-60 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={imageUrl} alt="blog" />
                      </Link>
                      <div className="px-5 py-1 lg:border-t-2 ">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 lg:block hidden" style={{ color: mode === 'dark' ? 'white' : '', }}>iE-Projects</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 lg:mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>{title}</h1>
                        {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                        {/* <div className="flex items-center justify-between">
                          <p className="text-2xl font-bold text-slate-900" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{price}</p>
                          <button type="button"
                            onClick={() => addCart(item)}
                            class="flex items-center rounded-md bg-slate-900 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300" >
                            <svg xmlns="http://www.w3.org/2000/svg" class=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" >
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </button>

                        </div> */}
                      </div>

                    </div>
                  </div>
                )
              })}
              {product.filter((obj)=> obj.title.toLowerCase().includes(searchkey))
                     .filter((obj) => obj.category.toLowerCase().includes(filterType))
                     .filter((obj) => obj.price.includes(filterPrice)).length === 0 && (
                        <div className="lg:w-1/1 mx-auto flex flex-wrap">
                        <img src="https://cdn.dribbble.com/users/1753953/screenshots/3818675/animasi-emptystate.gif" 
                        className="lg:w-1/2 w-full lg:h-full mx-auto object-cover object-center rounded" alt="No Items in Cart" />
                        </div>
            )}
          </div>

        </div>
      </section >
    </Layout>
  )
}

export default Allproducts;
