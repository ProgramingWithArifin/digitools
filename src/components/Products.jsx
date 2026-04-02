import React, { use } from 'react';
import ProductCard from './ProductCard'

const Products = ({dataPromise}) => {
    const data = use(dataPromise);
    return (
        <div className='w-11/12 mx-auto my-10 space-y-5'>
            <h2 className='text-3xl font-bold text-center mt-15'>Premium Digital Tools</h2>
            <p className='text-center'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            <div className="button-section flex justify-center gap-3">
                <button className='btn btn-lg rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Products</button>
                <button className='btn btn-lg rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Cart(Number)</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-15 ">
                {
                    data.map(product=> <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;