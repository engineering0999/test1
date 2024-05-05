// ContactUs.js
import React, { useContext, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import ContactForm from '../../components/contactform/ContactForm'; 
import myContext from '../../context/data/myContext';

const ContactUs = () => {
    const fields = [
    { name: 'name', label: 'Name' ,},
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'message', label: 'Message', type: 'textarea', customClass: 'h-40' },
  ];

  useEffect(() =>{
    document.title="its Engineering - Contact Us"
},[]);

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const context = useContext(myContext);
  const { mode } = context;
  return (
    <Layout>
      <h2 className=' text-center text-3xl  font-semibold my-6 ' style={{ color: mode === 'dark' ? 'white' : '' }} >Contact Us</h2>
      <div className='flex justify-center  mb-8'>
      <ContactForm formId="yourFormId" templateId="yourTemplateId" fields={fields} />
      </div>
    </Layout>
   
  );
};

export default ContactUs;
