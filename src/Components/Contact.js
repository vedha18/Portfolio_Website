import { FaTwitter,FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
export default function Contact(){
    return (
        <section id="contact" className='flex flex-col px-5 py-35 mb-5 md:flex-row md:justify-center'>
            
            <div className='flex flex-col items-center'>
               
                   <h1 className='mt-3 text-4xl  font-bold text-center color'>Contact</h1>
                   <p className='m-3  italic text-white '>
                       <span className="font-bold">Email :</span> vedhajothika78@gmail.com
                 </p>
                 <p className='m-3  italic text-white '>
                       <span className="font-bold">Phone :</span> 9843843895
                 </p> 
                 
                <div className="flex gap-2">
                    <a href="#" className="hover:text-pink-700"><FaTwitter size={30} /></a>
                    <a href="#" className="hover:text-pink-700"><FaInstagram size={30} /></a>
                    <a href="#" className="hover:text-pink-700"><FaLinkedin size={30} /></a>
                    <a href="#" className="hover:text-pink-700"><FaGithub size={30} /></a>
                </div>   
            </div>
        </section>
    );


}