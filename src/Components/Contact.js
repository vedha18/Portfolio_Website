import { AiOutlineTwitter,AiOutlineInstagram,AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";

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
                    <a href="#" className="hover:text-pink-700"><AiOutlineTwitter size={40} /></a>
                    <a href="#" className="hover:text-pink-700"><AiOutlineInstagram size={40} /></a>
                    <a href="#" className="hover:text-pink-700"><AiOutlineLinkedin size={40} /></a>
                    <a href="#" className="hover:text-pink-700"><AiOutlineGithub size={40} /></a>
                </div>   
            </div>
        </section>
    );


}