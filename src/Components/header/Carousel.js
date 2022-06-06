import React from 'react';
import { Link } from 'react-router-dom';
import caro1 from './caroImage/caro1.png'
import caro2 from './caroImage/caro2.png'
import caro3 from './caroImage/caro3.png'

const Carousel = () => {
    return (
        <div>
            <div
                id="carouselDarkVariant"
                className="carousel slide carousel-fade carousel-dark relative"
                data-bs-ride="carousel"
            >
                {/* <!-- Indicators --> */}
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="2"
                        aria-label="Slide 1"
                    ></button>
                </div>

                {/* <!-- Inner --> */}
                <div className="carousel-inner relative w-full overflow-hidden">
                    {/* <!-- Single item --> */}
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src={caro1}
                            className="block w-full"
                            alt="Motorbike Smoke"
                        />
                        <div>
                            <div className="carousel-caption hidden md:block absolute top-44 left-28">
                                <p className='text-lg'>- A UNIQUE COLLECTION OF - </p>
                                <h5 className="text-6xl">
                                    <div className='text-hotpink mb-3 '>Luxury Furnitures</div>  For Home & Business</h5>

                                <Link to='/underconstruction'><button className='bg-hotpink text-white py-2 px-6 hover:bg-base-black mr-7 my-5'> Get A Quate</button></Link>

                                <Link to='/underconstruction'><button className='bg-base-black text-white py-2 px-6 hover:bg-hotpink'> Learn More</button></Link>
                            </div>
                            <p className="carousel-caption md:hidden absolute text-start top-4 text-xs">A unique collection of <br />
                                <span className='text-hotpink'>Luxury Furnitures</span> <br />
                                <span>For Home & Business</span></p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={caro2}
                            className="block w-full"
                            alt="Mountaintop"
                        />
                        <div>
                            <div className="carousel-caption hidden md:block absolute top-44 left-28">
                                <p className='text-lg'>- A UNIQUE COLLECTION OF - </p>
                                <h5 className="text-6xl">
                                    <div className='text-hotpink mb-3 '>Luxury Furnitures</div>  For Home & Business</h5>

                                <Link to='/underconstruction'><button className='bg-hotpink text-white py-2 px-6 hover:bg-base-black mr-7 my-5'> Get A Quate</button></Link>

                                <Link to='/underconstruction'><button className='bg-base-black text-white py-2 px-6 hover:bg-hotpink'> Learn More</button></Link>

                            </div>
                            <p className="carousel-caption md:hidden absolute text-start top-4 text-xs">A unique collection of <br />
                                <span className='text-hotpink'>Luxury Furnitures</span> <br />
                                <span>For Home & Business</span></p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={caro3}
                            className="block w-full"
                            alt="Woman Reading a Book"
                        />
                        <div>
                            <div className="carousel-caption hidden md:block absolute top-44 left-28">
                                <p className='text-lg'>- A UNIQUE COLLECTION OF - </p>
                                <h5 className="text-6xl">
                                    <div className='text-hotpink mb-3 '>Luxury Furnitures</div>  For Home & Business</h5>
                                <Link to='/underconstruction'><button className='bg-hotpink text-white py-2 px-6 hover:bg-base-black mr-7 my-5'> Get A Quate</button></Link>

                                <Link to='/underconstruction'><button className='bg-base-black text-white py-2 px-6 hover:bg-hotpink'> Learn More</button></Link>
                            </div>
                            <p className="carousel-caption md:hidden absolute text-start top-4 text-xs">A unique collection of <br />
                                <span className='text-hotpink'>Luxury Furnitures</span> <br />
                                <span>For Home & Business</span></p>
                        </div>
                    </div>
                </div>
                {/* <!-- Inner --> */}

                {/* <!-- Controls --> */}
                <button
                    className="opacity-0 carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="opacity-0 carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    );
};

export default Carousel;