import girl from '../Assert/images.jpg'

export const Home = () => {
  return (
    <section>
    <div  className=" bg-gray-900 max-w-[1200px] h-[80vh] mx-auto flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
      <div className="text-white sm:max-w-[50%] px-4">
        <h1 className="text-4xl sm:text-5xl font-bold">I'm VEDHA JOTHIKA D</h1><br></br>
        <p className="text-xl sm:text-2xl color">I'm a fresher</p>
      </div>
      <div className="flex justify-center sm:max-w-[50%] px-4">
        <img className="bg-slate-700 w-[150px] sm:w-[500px] h-auto rounded-full" src={girl} alt="profile pic" />
      </div>
    </div>
    </section>
  );
};


