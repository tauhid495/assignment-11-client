import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems'
import Table from './table/Table';
import TableHead from './tableHead/TableHead';

const ManageInventories = () => {

    const [items, setItems] = useItems();
    const navigate= useNavigate();

    const handleDelete = id => {
        const proceed = window.confirm('Want to delete?')
        if (proceed) {
            const url = `https://pacific-reef-07454.herokuapp.com/item/${id}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }


    return (
        <div className='min-h-screen pb-12'>
            <div className='text-center text-xl md:text-4xl my-6'>Manage Inventory Items</div>

            <div className='md:flex justify-between w-1/2 mx-auto'>
                <p className='md:w-2/4  mb-5'>Total Items : {items.length}</p> 
                <button onClick={()=> navigate('/addproduct')}
                     className='mb-5 mr-6 bg-hotpink hover:bg-base-black text-white py-1 px-6'
                     >Add Items</button>
            </div>
            <TableHead/>

            {
                items.map(item => <Table
                    key={item._id}
                    handleDelete={handleDelete}
                    item={item} />)
            }
        </div>
    );
};

export default ManageInventories;