import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-10 py-15 space-y-7 text-center'>
            <h2 className='text-3xl lg:text-4xl text-white font-bold'> Ready to Transform Your Workflow?</h2>
            <p className='max-w-150 text-white mx-auto'>Join thousands of professionals who are already using Digitools to work smarter.
                Start your free trial today.</p>
            <div className="btn-area flex justify-center gap-2 flex-col sm:flex-row">
                <button className='p-5 text-primary btn rounded-3xl text-lg'>Explore Products</button>
                <button className='p-5 btn text-white border-2 outline-white bg-[#7C3AED] border-white rounded-3xl text-lg'>View Pricing</button>
            </div>
            <p className='max-w-150 text-white mx-auto'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Workflow;