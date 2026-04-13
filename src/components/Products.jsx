import { use } from 'react';
import ProductCard from './ProductCard'
import Cart from './Cart'
import { toast } from 'react-toastify';
const Products = ({ dataPromise, cart, updateCart, tab, updateTab,setCart,total, removeCart }) => {
    const data = use(dataPromise);
    const clearCart=()=>{
        setCart([])
        toast.success("Checkout Successfull")
    }
    return (
        <div className='sm:w-11/12 mx-auto my-10 space-y-5'>
            <h2 className='text-3xl lg:text-4xl font-bold text-center mt-15'>Premium Digital Tools</h2>
            <p className='text-center text-gray-600'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            <div className="button-section flex justify-center gap-3">
                <button onClick={() => updateTab(true)} className={`btn btn-lg rounded-3xl ${tab ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-amber-50 text-gray-600'} `}>Products</button>
                <button onClick={() => updateTab(false)} className={`btn btn-lg rounded-3xl ${tab ? 'bg-amber-50 text-gray-600' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} `}>Cart({cart.length})</button>
            </div>
            {
                tab ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2  sm:p-15 ">
                        {
                            data.map(product => <ProductCard key={product.id} product={product} cart={cart} updateCart={updateCart}></ProductCard>)
                        }
                    </div> : <div >
                        {cart.length == 0 ?
                            <div className='py-30  text-center space-y-6'>
                                <h2 className='text-3xl font-bold'>No Product Available On Cart</h2>
                                <p className='text-gray-600'>Buy some products now</p>
                            </div> :
                            <div className='py-6 space-y-4'>
                                <h2 className='text-2xl font-semibold'>Your Cart</h2>
                                {
                                    cart.map(
                                        cartiteam => <Cart removeCart={removeCart} key={cartiteam.id} cartiteam={cartiteam}></Cart>
                                    )
                                }
                                <div className="flex justify-between">
                                    <p>Total:</p>
                                    <h3 className='text-2xl font-bold'>${total}</h3>
                                </div>
                                <div className="mt-6">
                                    <button onClick={clearCart} className={`btn btn-primary btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl btn-lg`}>Proceed to Checkout</button>
                                </div>
                            </div>
                        }</div>
            }
        </div>
    );
};

export default Products;