import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'


function Navebar(){
    const [toggleMenu,settoggleMenu] = useState(false);
    return(<header className='flex justify-between py-2 px-3 bg-gray-800'>
        <a className='text-yellow-400 font-bold text-xl italic py-2' href='#'>Portfolio</a>
        <nav className="hidden md:block"> 
        <ul className="flex">
            <li className="text-white hover:bg-blue-700 font-bold py-2 px-4 rounded cursor-pointer"><a href='/'>Home</a></li>
            <li className="text-white hover:bg-blue-700 font-bold py-2 px-4 rounded cursor-pointer"><a href='#about'>About</a></li>
            <li className="text-white hover:bg-blue-700 font-bold py-2 px-4 rounded cursor-pointer"><a href='#projects'>My Works</a></li>
            <li className="text-white hover:bg-blue-700 font-bold py-2 px-4 rounded cursor-pointer"><a href='#resume'>Resume</a></li>
            <li className="text-white hover:bg-blue-700 font-bold py-2 px-4 rounded cursor-pointer"><a href='#contact'>Contact</a></li>
        </ul>
        </nav> 
        { toggleMenu && <nav className="block md:hidden"> 
        <ul onClick={() => settoggleMenu(!toggleMenu)} className="flex flex-col mobile-nav">
            <li className="text-white hover:bg-blue-700 font-bold py-2 px-4 rounded"><a href='/'>Home</a></li>
            <li className="text-white hover:bg-blue-700 font-bold py-2 px-4 rounded"><a href='#about'>About</a></li>
            <li className="text-white hover:bg-blue-700 font-bold py-2 px-4 rounded"><a href='#projects'>My Works</a></li>
            <li className="text-white hover:bg-blue-700 font-bold py-2 px-4 rounded"><a href='#resume'>Resume</a></li>
            <li className="text-white hover:bg-blue-700 font-bold py-2 px-4 rounded"><a href='#contact'>Contact</a></li>
        </ul>
        </nav> } 
        <button  onClick={() => settoggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-6'/></button>    
    </header>)
}
    
        

export default Navebar 