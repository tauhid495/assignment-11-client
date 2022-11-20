import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const ItemDetail = () => {

    const { itemId } = useParams();

    const [itemData, setItemData] = useState({});

    useEffect(() => {
        const url = `https://assignment-11-server-production.up.railway.app/item/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItemData(data));
    }, [useState({})])

    const handleAddStock = (e) => {
        e.preventDefault();

        const stockInput = e.target.addStock.value;
        const stockInputInt = parseInt(stockInput)
        if (stockInputInt <= 0 || isNaN(stockInputInt)) {
            alert('Input a positive quantity')
            return;
        } else {
            const newInventory = (itemData.inventory) + (stockInputInt);

            fetch(`https://assignment-11-server-production.up.railway.app/item/${itemId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ newInventory }),
            })
                .then((res) => res.json())
                .then(data => (data))

            e.target.reset();
        }
    }

    const handleItemDelivery = () => {
        if (itemData.inventory <= 0) {
            alert('Stock is Empty')
            return;
        } else {
            const newInventory = (itemData.inventory - 1);

            fetch(`https://assignment-11-server-production.up.railway.app/item/${itemId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ newInventory }),
            })
                .then((res) => res.json())
                .then(data => console.log(data))
        }
    }

    return (
        <div className='min-h-screen'>
            <div className="my-7 flex justify-center">
                <div className=" shadow hover:shadow-2xl bg-gray-50 hover:bg-white max-w-sm transition duration-300 ease-in-out p-4 border border-gray-50 hover:border-gray-200">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-sm">
                        <img className=" hover:scale-110 transition duration-300 ease-in-out" src={itemData.image} alt="" />
                    </div>


                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Product Name : {itemData.name}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Product ID : {itemData._id}
                        </p>
                        <p className="text-gray-700 text-base mb-4">
                            Description : {itemData.description}
                        </p>
                        <p className="text-gray-700 text-base mb-4">
                            Supplier : {itemData.supplier}
                        </p>
                        <p className="text-gray-700 text-base mb-4">
                            Price: {itemData.price}
                        </p>
                        <div className='md:flex justify-between mb-3'>
                            <p>Available Item : {itemData.inventory} pcs</p>
                            <button onClick={handleItemDelivery}
                                type="submit" className="ml-7 inline-block px-6 py-2.5 bg-hotpink text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-base-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Delivered</button>
                        </div>


                        {/* stock add form */}
                        <form onSubmit={handleAddStock} className='flex '>
                            <input className='w-8/12 border border-gray-300 px-2' type="text" name='addStock' />

                            <button
                                type="submit" className=" inline-block px-6 py-2.5 hover:bg-hotpink text-white font-medium text-xs leading-tight uppercase shadow-md bg-base-black hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Add stock</button>
                        </form>
                    </div>
                </div>

            </div>

            <div className='text-center'>
                <Link className='drop-shadow-sm text-xl text-hotpink hover:text-base-black'
                    to='/manageinventories'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default ItemDetail;