import React from 'react';

const ProductCard = ({ product, cart, updateCart }) => {
    const tagBg = product.tagType;
    const isInCart = cart.some(item => item.id === product.id);
    return (
        <div className="card w-full max-w-94 bg-base-100 shadow-xl mx-auto">
            <div className="card-body space-y-2">
                <div className='flex justify-between h-12'>
                    <img src={product.image} alt="" />
                    <span className={`badge ${tagBg} font-bold rounded-xl`}>{product.tag}</span>
                </div>
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p className='text-lg text-gray-600'>{product.description}</p>
                    <span className="text-xl font-semibold">
                        ${product.price} <span className='text-sm text-gray-600'>/{product.period}</span>
                    </span>
                </div>
                <ul className="mt-3 flex flex-col gap-2 text-xs text-gray-600">
                    {
                        product.features.map((feature , index) =>
                            <li key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[16px]'>{feature}</span>
                            </li>
                        )
                    }


                </ul>
                <div className="mt-6">
                    <button onClick={()=>updateCart(product)} className={`btn btn-primary btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl`}>{isInCart ? 'Added to Cart' : 'Buy Now'}</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;