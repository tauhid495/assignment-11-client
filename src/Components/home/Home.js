import React from 'react';
import { Link } from 'react-router-dom';
import CustomarService from '../../extarSection/CustomarService';
import Exparts from '../../extarSection/Exparts';
import useItems from '../../hooks/useItems';
import Carousel from '../header/Carousel';
import Items from '../ItemSection/Items';

const Home = () => {
    const [items, setItems] = useItems();
    const newItems = items.slice(1, 7)
    return (
        <div>
            <Carousel />
            <div className='container w-full mx-auto my-7'>
                <div className='text-center text-xl md:text-5xl py-4 text-hotpink drop-shadow'>
                    <h1>Inventory Items</h1>
                </div>
                <div className='p-4 grid sm:grid-cols-1 md:grid-cols-3 gap-y-7'>
                    {
                        newItems.map(item => <Items
                            key={item._id}
                            item={item} />)
                    }

                </div>
                <div className='text-center'>
                    <Link className='drop-shadow-sm text-xl text-hotpink hover:text-base-black'
                        to='/manageinventories'>Manage Inventories</Link>
                </div>
                <div>
                    <CustomarService/>
                </div>
                <div>
                    <Exparts/>
                </div>
            </div>
        </div>
    );
};

export default Home;