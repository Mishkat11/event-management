

import Aos from 'aos';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Services = ({ services }) => {
    const { name, short_description, price, image_url, id } = services
    return (
        <div>
            <div className="border border-black relative flex w-full h-[270px]  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div  className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img  data-aos="zoom-in"
                        src={image_url}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-500  antialiased">
                        {name}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {short_description}
                    </h4>
                    <p className='font-bold'>Price: {price}</p>

                    <Link to={`/service/${id}`}>
                        <button
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-blue-500/10 active:bg-blue-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Show More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};
Aos.init()
Services.propTypes = {
    services: PropTypes.object
};

export default Services;