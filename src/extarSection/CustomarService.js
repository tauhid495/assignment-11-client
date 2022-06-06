import React from 'react';

const CustomarService = () => {
    return (
        <div className='md:mx-20 md:flex my-14'>
        
            <div>
                <img className='w-[500px]' src="https://i.ibb.co/fCL4R1B/job-customer-service.jpg" alt="" />
            </div>
            <div className='md:ml-12'>
                <h1 className='text-6xl mb-7'>
                    Our Customar <span className='text-hotpink'>Support</span>
                </h1>
                <div className='mb-7 border bg-white p-2 text-center shadow-lg'>
                    <h1 className='text-4xl'>24 hour customer support</h1>
                    <p className='text-2xl'>We are available 24 hours for you.</p>
                </div>
                <div className='mb-7 border bg-white p-2 text-center shadow-lg'>
                    <h1 className='text-4xl'>24 hour Home Delivary</h1>
                    <p className='text-2xl'>We are available 24 hours for you.</p>
                </div>
                <div className='mb-7 border bg-white p-2 text-center shadow-lg'>
                    <h1 className='text-4xl'>24 hour Expart support</h1>
                    <p className='text-2xl'>We are available 24 hours for you.</p>
                </div>
            </div>
        </div>
    );
};

export default CustomarService;