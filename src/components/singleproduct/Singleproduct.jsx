import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { fireDB } from '../../fireabase/FirebaseConfig';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Singleproduct() {
    const context = useContext(myContext);
    const { setLoading, mode } = context;

    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const user = JSON.parse(localStorage.getItem('user'));


    useEffect(() => {
        const productId = "/OWEeU0bvDxliaoAZ8C4t"; // Change to the desired product ID
        const getProductData = async () => {
            setLoading(true);
            try {
                const productTemp = await getDoc(doc(fireDB, "products", productId));
                setProduct(productTemp.data());
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        getProductData();
    }, []);

     
     
    // Add to cart
    const addCart = (products) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === products.id);
        if (existingItemIndex === -1) {
            dispatch(addToCart(products));
            toast.success('Item added to cart');
        } else {
            toast.info('Item already in cart');
        }
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);
  
    //aos animation
    useEffect(() => {
        AOS.init({duration:1500})
     })

    return (
       
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-1 lg:mb-1">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Grap this Deal</h1>
                    <div className="h-1 w-20 bg-pink-600 rounded"></div>
                </div>
                <div className="container px-1 py-5 mx-auto">
                    {product && 
                    <div className="lg:w-[100%] mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-full mt-5  object-cover object-center rounded"
                            src={product.imageUrl}
                            data-aos="fade-right"
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" data-aos="fade-left">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                iE-Projects
                            </h2>
                            <h1 className="text-gray-900 text-2xl title-font font-medium mb-1 font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                {product.title}
                            </h1>
                            <p className='text-xl font-bold text-gray-600 my-2' style={{ color: mode === 'dark' ? '#B2BEB5' : '' }}>What you will Get in this Project</p>
                            <p
                                 className="leading-relaxed border-b-2 mb-5 pb-5"
                                 style={{ color: mode === 'dark' ? 'white' : '' }}
                                 dangerouslySetInnerHTML={{ __html: product.description }}
                             ></p>

                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                ₹{product.price}
                                </span>
                                {user ? <button onClick={() => addCart(product)} className="flex ml-auto text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                    Add To Cart
                                </button>:<Link to={'/login'} className="flex ml-auto text-white bg-slate-600 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                    Login
                                  </Link>}
                            </div>
                        </div>
                    </div>}
                </div>
                </div>
            </section>
        
    );
}

export default Singleproduct;
