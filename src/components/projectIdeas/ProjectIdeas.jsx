import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import ContactForm from '../../components/contactform/ContactForm'; 
function ProjectIdeas() {
    const context = useContext(myContext);
    const { mode } = context;

    const fields = [
        { name: 'name', label: 'Name of the Project' },
        { name: 'email', label: 'Email Address', type: 'email' },
        { name: 'message', label: 'Description about Project', type: 'textarea', customClass: 'h-40' },
      ];

    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-5">
                    <h1 className=' text-center lg:text-3xl text-xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Transform <span className=' text-pink-500'>Your Ideas</span> into Reality</h1>
                    <h2 className=' text-center lg:text-2xl  font-semibold mb-5' style={{ color: mode === 'dark' ? 'white' : '' }}>Your Project, Our Expertise: Let's Build Together</h2>

                    <div className='flex justify-center  mb-8'>
                   <ContactForm formId="yourFormId" templateId="yourTemplateId" fields={fields} />
                   </div>

                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-full lg:mb-0 mb-2 p-4 lg:mx-5">
                            <div className="h-full text-center ">
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Welcome to our Project Creation Hub, where your ideas meet expertise and innovation! Have a brilliant project idea but need help bringing it to fruition? Look no further! Our platform empowers you to submit your project idea along with your email and a brief description, and our team of skilled professionals will work with you to turn your vision into a tangible reality. Whether it's app development, website design, or any other project, we're here to collaborate, innovate, and create something exceptional together. Let's embark on this journey of transformation and make your project dreams a successful reality!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6" />
                             </div>
                        </div>

                       
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectIdeas