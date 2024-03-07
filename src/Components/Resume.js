import resumeimg from '../Assert/resume.png'
import resume from '../Assert/VEDHAJOTHIKA_MCA.pdf'

export default function Resume(){
    return (
        <section id='resume' className='flex flex-col md:flex-row bg-primary p-6 py-20'>
            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <img src={resumeimg} alt="About" className="object-fixed" />
            </div>
            <div className='md:w-1/2  flex justify-center'>
               <div className='flex flex-col justify-center'>
                   <h1 className='mt-3 text-4xl text-white  font-bold text-center color'>Resume</h1>
                   <p className='m-3  italic text-gray-400 '>
                       You can view and Download my Resume Here.<br></br><br></br>
                       <a className="btn text-white font-bold text-center inline-block bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded mx-24" href={resume}>Download</a>
                 </p>
                </div> 
            </div>
        </section>
    );


}