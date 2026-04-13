import React from 'react';
import User from '../assets/user.png'
import Package from '../assets/package.png'
import Rocket from '../assets/rocket.png'
const Steps = () => {
    return (
        <div className='w-11/12 mx-auto my-10 space-y-5'>
            <h2 className='text-3xl lg:text-4xl font-bold text-center mt-15'>
                Get Started In 3 Steps
            </h2>
            <p className='text-center text-gray-600'>Start using premium digital tools in minutes, not hours. </p>

            <div className='card-section grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 p-15'>


                <div className=" relative flex flex-col gap-6 p-9 text-center">
                    <div className="w-8 h-8 flex justify-center font-semibold absolute top-1 right-3 text-white items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-xl text-center rounded-full">01</div>
                    <img className='w-20  mx-auto' src={User} alt="" />
                    <h2 className='text-xl font-bold'>Create Account</h2>
                    <p className='text-gray-600'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className=" relative flex flex-col gap-6 p-9 text-center">
                    <div className="w-8 h-8 flex justify-center font-semibold absolute top-1 right-3 text-white items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-xl text-center rounded-full">02</div>
                    <img className='w-20  mx-auto' src={Package} alt="" />
                    <h2 className='text-xl font-bold'>Choose Products</h2>
                    <p className='text-gray-600'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className=" relative flex flex-col gap-6 p-9 text-center">
                    <div className="w-8 h-8 flex justify-center font-semibold absolute top-1 right-3 text-white items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-xl text-center rounded-full">03</div>
                    <img className='w-20  mx-auto' src={Rocket} alt="" />
                    <h2 className='text-xl font-bold'>Start Creating</h2>
                    <p className='text-gray-600'>Download and start using your premium tools immediately.</p>
                </div>
        </div>
        </div>
    );
};

export default Steps;