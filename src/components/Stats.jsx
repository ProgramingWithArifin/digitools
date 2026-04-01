import React from 'react';


const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full p-6 text-white flex justify-center gap-10 flex-wrap'>
            <div className="md:border-r-2 px-15 my-10 space-y-2">
                <h2 className='text-center text-5xl font-bold '>50K+</h2>
                <p className='text-center'>Active Users</p>
            </div>
            <div className="md:border-r-2 px-15 my-10 space-y-2">
                <h2 className='text-center text-5xl font-bold'>200+</h2>
                <p className='text-center'>Premium Tools</p>
            </div>
            <div className="px-15 my-10 space-y-2">
                <h2 className='text-center text-5xl font-bold'>4.9</h2>
                <p className='text-center'>Rating</p>
            </div>
        </div>
    );
};

export default Stats;