// ReusableForm.js
import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import myContext from '../../context/data/myContext';

const ContactForm = ({ formId, templateId, fields }) => {
    const formRef = useRef();
    const [formData, setFormData] = useState({});
    const context = useContext(myContext);
    const { mode } = context;
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      // Check if all fields are filled
      const areAllFieldsFilled = Object.values(formData).every((value) => value.trim() !== '');
      if (!areAllFieldsFilled) {
        toast.error('Please fill in all fields');
        return;
      }
  
      emailjs
        .sendForm('service_6cncbb5', 'template_pom8orh', formRef.current, {
          publicKey: import.meta.env.VITE_CONTACTKEY,
        })
        .then(
          () => {
            toast.success('Message sent successfully!');
            console.log('SUCCESS!');
            // Reset form fields after successful submission
            setFormData({});
          },
          (error) => {
            toast.error('Failed to send message. Please try again later.');
            console.log('FAILED...', error.text);
          }
        );
    };
  
    return (
      <form ref={formRef} onSubmit={sendEmail}>
        {fields.map((field) => (
          <div key={field.name} className="p-2 w-full lg:w-[100%]">
            <div className="relative">
              <label htmlFor={field.name} className="leading-7 py-4 text-lg text-gray-900"  style={{ color: mode === 'dark' ? 'white' : '' }}>
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  required
                  className={`w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ${field.customClass}`}
                ></textarea>
              ) : (
                <input
                  type={field.type || 'text'}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  required
                  className={`w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out ${field.customClass}`}
                />
              )}
            </div>
          </div>
        ))}
        <div className="p-2 w-full">
          <div>
            <button
              type="submit"
              className="flex text-white bg-gray-900 border-0 py-3 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center"
              style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
              Send
            </button>
          </div>
        </div>
      </form>
    );
  };
  export default ContactForm;