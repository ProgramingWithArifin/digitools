import React from 'react';

const Pricing = () => {
    return (
        <div className='w-11/12 mx-auto my-10 space-y-7'>
            <h2 className='text-3xl lg:text-4xl font-bold text-center mt-15'>
                Simple, Transparent Pricing            
            </h2>
            <p className='text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 space-y-5'>

                <div className="card bg-[#F9FAFC] border border-[#F2F2F2] p-8 shadow-sm space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Starter</h2>
                        <p className="text-[#627382] text-lg leading-relaxed">Perfect for getting started</p>
                    </div>

                    <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-[#101727]">$0</span>
                        <span className="text-slate-400 text-xl ml-1">/Month</span>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-slate-600 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Access to 10 free tools</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-600 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Basic templates</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-600 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Community support</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-600 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>1 project per month</span>
                        </li>
                    </ul>

                    {/* Action Button */}
                    <button className="btn btn-primary w-full rounded-3xl bg-[#7C3AED] hover:bg-[#6D28D9] border-none text-white h-16 text-xl mt-auto">
                        Buy Now
                    </button>
                </div>

                <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] border border-[#F2F2F2] p-8 shadow-sm space-y-6 text-white">
                    <div className="bg-[#FEF3C6] text-[#BB4D00] px-4 py-1.5 rounded-full text-sm font-medium w-fit mx-auto -mt-12.5">
                        Most Popular
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">Pro</h2>
                        <p className="text-base-300 text-lg leading-relaxed">Best for professionals</p>
                    </div>

                    <div className="flex items-baseline">
                        <span className="text-3xl font-bold">$29</span>
                        <span className="text-xl ml-1">/Month</span>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Access to all premium tools</span>
                        </li>
                        <li className="flex items-center gap-3 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Unlimited templates</span>
                        </li>
                        <li className="flex items-center gap-3 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Priority support</span>
                        </li>
                        <li className="flex items-center gap-3 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Unlimited projects</span>
                        </li>
                        <li className="flex items-center gap-3 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Cloud sync</span>
                        </li>
                        <li className="flex items-center gap-3 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Advanced analytics</span>
                        </li>
                    </ul>

                    {/* Action Button */}
                    <button className="btn btn-outline w-full h-16 text-xl mt-auto rounded-3xl bg-white text-primary">
                        Start Pro Trial
                    </button>
                </div>

                <div className="card bg-[#F9FAFC] border border-[#F2F2F2] p-8 shadow-sm space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h2>
                        <p className="text-[#627382] text-lg leading-relaxed">For teams and businesses</p>
                    </div>

                    <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-[#101727]">$99</span>
                        <span className="text-slate-400 text-xl ml-1">/Month</span>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-slate-600 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Everything in Pro</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-600 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Team collaboration</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-600 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Custom integrations</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-600 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Dedicated support</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-600 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>SLA guarantee</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-600 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Custom branding</span>
                        </li>
                    </ul>

                    {/* Action Button */}
                    <button className="btn btn-primary w-full rounded-3xl bg-[#7C3AED] hover:bg-[#6D28D9] border-none text-white normal-case text-xl h-16 mt-auto">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;