import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';

const Navbar = ({ cart, updateTab }) => {
    return (
        <nav className="navbar bg-base-100 shadow-sm px-4 mx-auto sticky top-0 z-1000">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a className="hover:text-primary">Products</a></li>
                        <li><a className="hover:text-primary">Features</a></li>
                        <li><a className="hover:text-primary">Pricing</a></li>
                        <li><a className="hover:text-primary">Testimonials</a></li>
                        <li><a className="hover:text-primary">FAQ</a></li>
                    </ul>
                </div>
                <a className="text-2xl font-extrabold text-primary cursor-pointer ">DigiTools</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <button onClick={() =>
                    updateTab(false)

                } className="relative">
                    <FaCartShopping className='text-xl' />
                    {cart.length > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 text-white bg-red-600 px-1 rounded-sm font-bold text-[10px]">
                            {cart?.length}
                        </span>
                    )}
                </button>
                <button className='btn btn-ghost font-bold text-gray-700'>Login</button>
                <button className='btn btn-primary rounded-3xl'>Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;