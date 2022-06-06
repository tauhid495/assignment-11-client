import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import MyItemCard from '../ItemSection/MyItemCard';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);


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
                    const remaining = myItems.filter(item => item._id !== id);
                    setMyItems(remaining);
                })
        }
    }


    useEffect(() => {
        const email = user.email;
        const url = `https://pacific-reef-07454.herokuapp.com/myitems?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [])

    return (
        <div className='min-h-screen'>
            <h1 className='text-center text-2xl text-hotpink my-10 '>
                My Added Items : <span className='text-base-black'>{myItems.length}</span>
            </h1>

            {/* cards */}
            
            <div className='md:grid grid-cols-3 gap-7 mb-10'>
            {
                myItems.map(myItem=>
                <MyItemCard
                key={myItem._id} myItem={myItem} 
                handleDelete={handleDelete}
                />)
            }
            </div>
        </div>
    );
};

export default MyItems;