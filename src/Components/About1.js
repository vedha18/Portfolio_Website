import React, { useState } from 'react';
import Aboutimg from '../Assert/download1.jpg' // Replace 'path_to_your_image' with the actual path

export default function About() {
    const [activeTab, setActiveTab] = useState('skills');

    const toggleTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section id='about' className='flex flex-col md:flex-row bg-primary p-5'>
            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <img src={Aboutimg} alt="About" className="object-fixed" />
            </div>
            <div className='w-full md:w-1/2 justify-center'>
                <h1 className='mt-3 text-3xl text-white color'>About Me</h1>
                <p className='m-3 ml-0 italic text-gray-400'>
                    As I am the fresher in this field, I will know about the nature of my work. Moreover, I will attempt to know about the various processes which form my job. By doing so, I will be able to do my job more proficiently. On the other hand, I shall implement my knowledge into the practical world.
                </p>
                <div className='text-white text-xl not-italic flex flex-wrap md:flex-nowrap justify-around items-center'>
                    <button className={`focus:outline-none ${activeTab === 'skills' ? 'text-blue-500 font-bold underline-custom' : 'text-white '}`} onClick={() => toggleTab('skills')}>Skills</button>
                    <button className={`focus:outline-none ${activeTab === 'experience' ? 'text-blue-500 font-bold underline-custom' : 'text-white'}`} onClick={() => toggleTab('experience')}>Experience</button>
                    <button className={`focus:outline-none ${activeTab === 'education' ? 'text-blue-500 font-bold underline-custom' : 'text-white'}`} onClick={() => toggleTab('education')}>Education</button>
                </div>
                {activeTab === 'skills' && (
                    <div className="text-white m-2 ">
                        <ul>
                            <li><span className='bg-color'>Front-End</span><br />HTML, CSS, JavaScript,React</li>
                            <li><span className='bg-color'>Back-End</span><br />C, C++, Python</li>
                            <li><span className='bg-color'>Database</span><br />MYSQL</li>
                        </ul>
                    </div>
                )}
                {activeTab === 'experience' && (
                    <div className="text-white m-2">
                        <ul>
                            <li><span className='bg-color'>Fresher</span><br />Looking for Job</li>
                        </ul>
                    </div>
                )}
                {activeTab === 'education' && (
                    <div className="text-white m-2">
                        <ul>
                            <li><span className='bg-color' >2023</span><br />MCA from Anna University</li>
                            <li><span className='bg-color'>2021</span><br />B.SC Mathematics from Mother Teresa Women's University</li>
                            <li><span className='bg-color'>2018</span><br />HSC from S.D.A School </li>
                            <li><span className='bg-color'>2016</span><br />SSLC from S.D.A School</li>
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}
