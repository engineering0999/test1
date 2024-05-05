import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';

function ProductCard() {
    const context = useContext(myContext);
    const { mode, product, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart');
    };

    const [renderedProducts, setRenderedProducts] = useState(4);
    const [firstCardId, setFirstCardId] = useState(null);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        if (product.length > 0) {
            const updatedProduct = [...product]; // Create a copy of product array
            updatedProduct.shift(); // Remove the first item from the array
            setFirstCardId(updatedProduct[updatedProduct.length - 1].id); // Set first card id to last card's id
        }
    }, [product]);
    const reversedProducts = [...product].reverse();

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Projects</h1>
                    <div className="h-1 w-20 bg-pink-600 rounded"></div>
                </div>
                

                <div className="flex flex-wrap -m-4">
                    {reversedProducts
                        .filter((obj) => obj.title.toLowerCase().includes(searchkey))
                        .filter((obj) => obj.category.toLowerCase().includes(filterType))
                        .filter((obj) => obj.price.includes(filterPrice))
                        .slice(0, renderedProducts)
                        .map((item, index) => {
                            const { title,  imageUrl, id } = item;
                            return (
                                <div key={index} className="lg:p-4 py-1 px-1 w-[50%] lg:w-1/4 drop-shadow-lg">
                                    <div className="lg:h-full h-70 lg:border-2 text-center lg:text-left hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 rounded-xl overflow-hidden " style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                        {firstCardId === id && <span className="absolute lg:top-8 lg:right-4 top-5 right-3 bg-red-500 text-white font-bold px-2 py-1 rounded-10 text-xs z-10 drop-shadow-lg">New</span>}
                                        <Link to={`/productinfo/${id}`} className="flex justify-center cursor-pointer">
                                            <img className="rounded-2xl lg:w-full w-40 h-40 lg:h-80  p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={imageUrl} alt="blog" />
                                        </Link>
                                        <div className="px-5 py-1 lg:border-t-2 ">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 lg:block hidden" style={{ color: mode === 'dark' ? 'white' : '' }}>iE-Projects</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 lg:mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h1>
                                            {/* <div className="flex items-center justify-between"> */}
                                                {/* <p className="text-2xl font-bold text-slate-900" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{price}</p> */}
                                                {/* <button type="button"
                                                    onClick={() => addCart(item)}
                                                    className="flex items-center rounded-md bg-slate-900 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                </button> */}
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                            );
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
                {product.length > 4 && (
                    <div className="text-right mt-6 mr-2">
                        <Link to="/allproducts" className="text-sm font-bold text-blue-600 hover:text-blue-800 hover:underline ">See all Projects</Link>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProductCard;
