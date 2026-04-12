import React, { use, useState } from 'react';
import ProductCard from './ProductCard'

const Products = ({dataPromise, cart, updateCart}) => {
    const data = use(dataPromise);
    const [tab, updateTab]=useState(true);
    return (
        <div className='w-11/12 mx-auto my-10 space-y-5'>
            <h2 className='text-3xl font-bold text-center mt-15'>Premium Digital Tools</h2>
            <p className='text-center'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            <div className="button-section flex justify-center gap-3">
                <button onClick={()=>updateTab(true)} className={`btn btn-lg rounded-3xl ${tab?'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white':'bg-amber-50 text-gray-600'} `}>Products</button>
                <button onClick={()=>updateTab(false)} className={`btn btn-lg rounded-3xl ${tab?'bg-amber-50 text-gray-600':'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} `}>Cart({cart.length})</button>
            </div>{
                tab?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-15 ">
                {
                    data.map(product=> <ProductCard key={product.id} product={product} cart={cart} updateCart={updateCart}></ProductCard>)
                }
            </div>:<div >
                {cart.length==0?
                <div>cart is empty</div>:
                <div>there is iteams</div>}
            </div>}
        </div>
    );
};

export default Products;