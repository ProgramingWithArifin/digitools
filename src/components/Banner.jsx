import bannerpng from '../assets/banner.png'
import playpng from '../assets/Play.png'
const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12 flex flex-col md:flex-row justify-between items-center gap-17 py-10 pt-2'>
            <div className="left space-y-7 flex-1 mt-5">
                <div className=" text-violet-500 flex items-center gap-2 w-fit px-3 font-semibold bg-sky-100 p-2 rounded-3xl">
                    <div aria-label="status" className="status status-primary"></div>
                    <p>
                        New: AI-Powered Tools Available
                    </p>
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
                    Supercharge Your <br /> Digital Workflow
                </h1>
                <p className='text-gray-600'>
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
                </p>
                <div className="btn-area flex gap-2">
                    <button className='btn btn-primary rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>
                    <button className='btn btn-primary  btn-outline rounded-3xl'><img src={playpng} alt="" />Watch Demo</button>
                </div>
            </div>
            <div className="right">
                <img src={bannerpng} alt="" className='shadow-2xl'/>
            </div>
        </div>
    );
};

export default Banner;