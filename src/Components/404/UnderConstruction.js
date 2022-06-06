import React from 'react';
import warning from '../images/underconstruction.gif';


const UnderConstruction = () => {
    return (
        <div>
            <img className='w-screen h-screen' src={warning} alt="" />
        </div>
    );
};

export default UnderConstruction;