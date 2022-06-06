import React from 'react';

const Exparts = () => {
    return (
        <div className='my-10 md:mx-20'>
            <h1 className='text-5xl text-center mb-7 drop-shadow'>Meet Our <span className='text-hotpink'> Exparts</span></h1>
            <div className='md:grid grid-cols-3'>
                <div className='p-4 w-[250px] border shadow-xl bg-white'>
                    <img className='w-[220px] h-[250px]'  src="https://i.ibb.co/RQzfrWY/R.jpg" alt="" />
                    <h3 className='text-center'>Manager</h3>
                    <p>Mr John is an experienced manager. He is managing whole work with expert hand. You cna trust on him and can depend on him.</p>
                </div>
                <div className='p-4 w-[250px] border shadow-xl bg-white'>
                    <img className='w-[220px] h-[250px]'  src="https://i.ibb.co/WBt6F6Y/OIP.jpg" alt="" />
                    <h3 className='text-center'>Designer</h3>
                    <p>Mr Khaleq is an experienced manager. He is managing whole work with expert hand. You cna trust on him and can depend on him.</p>
                </div>
                <div className='p-4 w-[250px] border shadow-xl bg-white'>
                    <img className='w-[220px] h-[250px]'  src="https://i.ibb.co/wJQDnsB/th.jpg" alt="" />
                    <h3 className='text-center'>Carpenter</h3>
                    <p>Mr Mohit is an experienced manager. He is managing whole work with expert hand. You cna trust on him and can depend on him.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Exparts;