import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';

const AddProduct = () => {
    const [user]=useAuthState(auth);

    const handleSubmit = e => {
        e.preventDefault();
        const name =e.target.name.value;
        const image =e.target.image.value;
        const price =e.target.price.value;
        const supplier =e.target.supplier.value;
        const description =e.target.description.value;
        const inventory =parseFloat(e.target.inventory.value);
        const userEmail=user.email;

        const item={name, image, price, supplier, description, inventory, userEmail };

        // sending data to server
        fetch('https://pacific-reef-07454.herokuapp.com/item', {
            method:'POST',
            headers:{
                'authorization':`${user.email} ${localStorage.getItem("accessToken")}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(item)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('Product added by user')
            }
            e.target.reset();
        })

    }

    return (
        <div className='md:flex md:flex-row items-center min-h-screen'>
            {/* image sec */}
            <div className='basis-1/2 p-4'>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
            </div>

            {/* form section */}
            <div className="basis-1/2 mx-auto block p-4 rounded-lg shadow-lg bg-white max-w-sm">
                <form onSubmit={handleSubmit} className=''>
                    <div className='text-xl text-center'> Add Product</div>
                    <div className="form-group mb-6">
                        <label htmlFor="name" className="form-label inline-block mb-2 text-gray-700">Product Name</label>
                        <input required type="text" name = 'name'className="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Name" />
                    </div>

                    <div className="form-group mb-6">
                        <label htmlFor="picture" className="form-label inline-block mb-2 text-gray-700">Product Image</label>
                        <input required type="text" name = 'image' className="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Img URL" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="supplier" className="form-label inline-block mb-2 text-gray-700">Supplier Name</label>
                        <input required type="text" name = 'supplier' className="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Supplier" />
                    </div>

                    <div className="form-group mb-6">
                        <label htmlFor="price" className="form-label inline-block mb-2 text-gray-700">Product Price</label>
                        <input required type="number" name = 'price' className="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Price" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="price" className="form-label inline-block mb-2 text-gray-700">Product Quantity</label>
                        <input required type="number" name = 'inventory' className="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Item quantity" />
                    </div>

                    <div className="form-group mb-6">
                        <label htmlFor="description" className="form-label inline-block mb-2 text-gray-700">Product Description</label>
                        <textarea type="textarea" name = 'description' className="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Short Description" />
                    </div>



                    <button type="submit" className=" block mx-auto
                        px-6 py-2.5 bg-hotpink text-white font-medium text-xs
                        leading-tight uppercase rounded shadow-md hover:bg-base-black hover:shadow-lg   transition duration-150 ease-in-out">Click to Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;