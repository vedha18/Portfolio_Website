import imagegallery from '../Assert/IMAGEGALLERY.jpeg'
import calculator from '../Assert/CALCULATOR.jpeg'
import todolist from '../Assert/TODOLIST.jpeg'
import weatherapp from '../Assert/WEATHERAPP.jpeg'
import phishing from '../Assert/work3.jpg'


export default function Project(){
    return <section id='projects' className="flex flex-col h-[70] py-10 px-5 mb-5 justify-center text-white items-center ">
        <div className="w-1/2">
          <div className="flex justify-center"> 
          <h1 className="text-2xl mb-5 font-bold m-4 color flex flex-wrap items-center sm:text-3xl">My Works</h1>
 
          </div>
        </div>
        <div className=" w-full">
    <div className=" flex flex-col md:flex-row px-10 gap-5">

        <div className='w-full md:w-1/3 relative'>
            <img className="h-[250px] w-[500px]" src={imagegallery} alt="" />
            <div className='project-desc'>
                <p className='text-center  px-5 py-10'>Image Gallery. Build using HTML,CSS Flex Box.</p>
            </div>
        </div>
 
        

        <div className='w-full md:w-1/3 relative'>
            <img className="h-[250px] w-[500px]" src={phishing} alt="" />
            <div className='project-desc'>
                <p className='text-center  px-5  py-10'>Phishing Detection(Final Year Project). Build using Python and Machine Learning.</p>
            </div>
        </div>

        <div className='md:w-1/3 relative'>
            <img className="h-[250px] w-[500px]" src={calculator} alt="" />
            <div className='project-desc'>
                <p className='text-center  px-5 py-10'>Calculator Website. Build using HTML,CSS and Javascript.</p>
            </div>
        </div>

        <div className='w-full md:w-1/3 relative'>
            <img className="h-[250px] w-[500px]" src={todolist} alt="" />
            <div className='project-desc'>
                <p className='text-center  px-5 py-10'>TODOLIST Website. Build using HTML,CSS and Javascript.</p>
            </div>
        </div>

        <div className='w-full md:w-1/3 relative'>
            <img className="h-[250px] w-[500px]" src={weatherapp} alt="" />
            <div className='project-desc'>
                <p className='text-center px-5 py-10'>Weather finding Website. Build using ReactJs and Tailwind CSS.</p>
            </div>
        </div>

    </div>


        </div>

    </section>
}