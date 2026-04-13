import React from 'react';

const Cart = ({cartiteam, removeCart}) => {
    
    return (
        <div className='flex justify-between p-5 bg-base-200 rounded-2xl items-center '>
            <div className="flex gap-5 items-center">
                <img src={cartiteam.image} className='w-10 h-10'  alt=""/>
                <div className="">
                    <h3 className='text-xl font-semibold'>{cartiteam.name}</h3>
                    <p className='text-gray-600'>${cartiteam.price}</p>
                </div>
            </div>
            <div className="">
                <button onClick={()=>removeCart(cartiteam.id)} className='max-sm:btn max-sm:btn-block text-xl text-red-400 hover:text-red-600 active:text-red-800'>Remove</button>
            </div>
        </div>
    );
};

export default Cart;