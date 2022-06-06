import React from 'react';
import NotFound from '../images/404.gif';

const PageNotFound = () => {
    return (
        <div>
            <img className='w-screen h-screen' src={NotFound} alt="" />
        </div>
    );
};

export default PageNotFound;