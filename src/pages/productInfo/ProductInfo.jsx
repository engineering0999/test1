import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { fireDB } from '../../fireabase/FirebaseConfig';

function ProductInfo() {
    const context = useContext(myContext);
    const {  setLoading, mode } = context;

    const [products, setProducts] = useState('')
    const params = useParams()
    // console.log(products.title)
    
    const user = JSON.parse(localStorage.getItem('user'));


    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id))
            // console.log(productTemp)
            setProducts(productTemp.data());
            // console.log(productTemp.data())
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        getProductData()

    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    // console.log(cartItems)

    // add to cart
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
    }, [cartItems])




    return (
        <Layout>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    {products && 
                    <div className="lg:w-[100%] mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-full  object-cover object-center rounded"
                            src={products.imageUrl}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                iE-Projects
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-bold font-medium mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                {products.title}
                            </h1>
                           <p className='text-xl font-bold text-gray-600 my-2' style={{ color: mode === 'dark' ? '#B2BEB5' : '' }}>What you will Get in this Project</p>
                            <p
                                 className="leading-relaxed border-b-2 mb-5 pb-5"
                                 style={{ color: mode === 'dark' ? 'white' : '' }}
                                 dangerouslySetInnerHTML={{ __html: products.description }}
                             ></p>
                             
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                ₹{products.price}
                                </span>
                                {user ?<button  onClick={()=>addCart(products)} className="flex ml-auto text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded">
                                    Add To Cart 
                                </button>:<Link to={'/login'} className="flex ml-auto text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                    Login
                                  </Link>}
                          
                            </div>
                        </div>
                    </div>}
                </div>
            </section>

        </Layout>
    )
}

export default ProductInfo