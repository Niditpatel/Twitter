import { Link, Outlet } from "react-router-dom";
import { FiSearch } from 'react-icons/fi'

export default function Explore() {
    return (
        <>
            <div>
                <label className="bg-gray-100 border border-transparent rounded-full flex flex-row-reverse   items-center px-4 py-2   w-full focus-within:bg-white focus-within:border-blue-400">
                    <input type="search" className="text-lg bg-gray-100 px-2 w-full focus:outline-none rounded-full focus:bg-white peer" placeholder="Search Twitter" />
                    <FiSearch className="text-xl text-gray-300 peer-focus:text-blue-400  mr-3" />
                </label>
                <div className="flex text-center mt-1">
                    <Link to={'tabs/foryou'} className='hover:bg-gray-100 p-4 w-full'>For you</Link>
                    <Link to={'tabs/tranding'} className='hover:bg-gray-100 p-4 w-full'>Tranding</Link>
                    <Link to={'tabs/news'} className='hover:bg-gray-100 p-4 w-full'>News</Link>
                    <Link to={'tabs/sports'} className='hover:bg-gray-100 p-4 w-full'>Sports</Link>
                    <Link to={'tabs/entertainment'} className='hover:bg-gray-100 p-4 w-full'>Entertainment</Link>
                </div>
                <Outlet />
            </div>
        </>
    )
}