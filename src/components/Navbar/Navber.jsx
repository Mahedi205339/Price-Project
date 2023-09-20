import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navber = () => {
    const [open , setOpen] =useState(true)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/service', name: 'Service' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/', name: 'FedBack' },
    ]
    return (
        <nav className="mt-10">
            <div className="text-xl md:hidden" onClick={()=>setOpen(!open)}>
                {
                    open === true? <AiOutlineMenu ></AiOutlineMenu> : <AiOutlineClose></AiOutlineClose>
                }
            
            </div>
            <ul className={`md:flex lg:justify-center text-xl font-semibold absolute bg-yellow-200 px-6 ${ !open?'top-14':'-top-60'} duration-1000 md:static `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navber;