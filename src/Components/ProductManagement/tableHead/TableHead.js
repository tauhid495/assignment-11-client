import React from 'react';

const TableHead = () => {
    return (
        <div className='overflow-auto md:w-3/4 block mx-auto'>
           <table className="min-w-full border ">
                <tbody >
                  <tr className="hover:bg-white border-b transition duration-300 ease-in-out bg-gray-100 hover:shadow-lg hover:font-bold">

                    <td className="w-3/12 text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                      Product Name
                    </td>
                    <td className="w-2/12 text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                      Price
                    </td>
                    <td className="w-3/12 text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                      Product Supplier
                    </td>
                    <td className="w-2/12 text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                      Stock
                    </td>
                    <td className="w-2/12 text-sm text-gray-900 px-6 py-4 whitespace-nowrap">

                     <button 
                     className='mr-2 text-black py-1 px-6'
                     >Update</button>
                     <button 
                     className='text-black py-1 px-6'
                     >Delete</button>
                     
                    </td>
                  </tr>

                </tbody>
              </table> 
        </div>
    );
};

export default TableHead;