import React from 'react';

const ProductCard = ({ product }) => {
    const tagBg = product.tagType;
    return (
        <div className="card w-full max-w-94 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <div className='flex justify-between h-12'>
                    <img src={product.image} alt="" />
                    <span className={`badge ${tagBg} font-bold rounded-xl`}>{product.tag}</span>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p>{product.description}</p>
                    <span className="text-xl font-semibold">
                        ${product.price} /{product.period}
                    </span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
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
                    <button className="btn btn-primary btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;