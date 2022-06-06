import React from 'react';
import { useNavigate } from 'react-router-dom';

const Table = ({item, handleDelete}) => {
  const { _id, name, image, supplier, inventory } = item;
  const navigate=useNavigate();

  const navigateItemDetail = id => {
    navigate(`/item/${id}`);
}

  
  return (
    <div className='overflow-auto md:w-3/4 block mx-auto'>
      <table className="min-w-full border ">
                <tbody >
                  <tr className="hover:bg-white border-b transition duration-300 ease-in-out bg-gray-100 hover:shadow-lg hover:font-bold">

                    <td className="w-3/12 text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="w-2/12 text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                      {item.price}
                    </td>
                    <td className="w-3/12 text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                      {item.supplier}
                    </td>
                    <td className="w-2/12 text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                      {item.inventory}
                    </td>
                    <td className="w-2/12 text-sm text-gray-900 px-6 py-4 whitespace-nowrap">

                     <button onClick={() => navigateItemDetail(_id)}
                     className='mr-2 hover:bg-hotpink bg-base-black text-white py-1 px-6'
                     >Update</button>
                     <button onClick={()=>handleDelete(item._id)}
                     className='bg-hotpink hover:bg-base-black text-white py-1 px-6'
                     >Delete</button>
                     
                    </td>
                  </tr>

                </tbody>
              </table>
    </div>
  );
};

export default Table;