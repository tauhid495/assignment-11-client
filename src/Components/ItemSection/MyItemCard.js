import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyItemCard = ({myItem, handleDelete}) => {
    const navigate= useNavigate();
    const {image, name, supplier, description, price, _id}=myItem;

    const navigateItemDetail = id => {
        navigate(`/item/${_id}`);
    }

    return (
        <div>
            <div className="flex justify-center mb-7">
                <div className="w-[350px] shadow hover:shadow-2xl bg-gray-50 hover:bg-white max-w-sm transition duration-300 ease-in-out p-4 border border-gray-50 hover:border-gray-200 relative">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                        <img className="w-[350px] h-[230px]  hover:scale-110 transition duration-300 ease-in-out" src={myItem.image} alt="" />
                    </div>


                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-1">{myItem.name}</h5>
                        <p className="text-gray-700 text-base mb-1">
                            {myItem.description}
                        </p>
                        <p className="text-gray-700 text-base mb-1">
                            Supplier : {myItem.supplier}
                        </p>
                        <div className='md:flex md:justify-between'>
                            <p className="text-gray-700 text-base md:mb-4">
                                Price: {myItem.price}
                            </p>
                            <p className='md:ml-7 mb-5'> Stock : {myItem.inventory} pcs</p>
                        </div>
                        <div>
                        <button onClick={() => navigateItemDetail(_id)}
                            type="button" className="bottom-4 absolute inline-block px-6 py-2.5 hover: bg-hotpink text-white font-medium text-xs leading-tight uppercase shadow-md bg-base-black hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Update stock</button>

                        <button onClick={() => handleDelete(_id)}
                            type="button" className="bottom-4 right-10 absolute inline-block px-6 py-2.5 bg-hotpink text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-base-black hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Delete Item</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItemCard;