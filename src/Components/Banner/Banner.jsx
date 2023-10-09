
import Aos from "aos";
const Banner = () => {
    return (
        <div >
            <div className=" bg-bg-banner h-[450px] bg-cover bg-no-repeat overflow-x-clip ">
                {/* <img className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-slate-900 bg-blend-overlay h-[500px] w-full" src="/src/assets/rear-view-large-group-music-fans-front-stage-during-music-concert-by-night-copy-space.jpg" alt="" /> */}
               
               <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
    className="relative bg-black/60 h-full "
      >
                   <div className="h-1/2 mx-auto flex-row pt-36 text-white items-center px-10">
                   <h1 className="text-3xl  from-text-white to-text-blue-200 mr-20 font-semibold "> We make Concerts <br /> Look Beautiful and Enjoyable</h1>
                   <p className="pt-3 font-extrabold text-blue-400">Feel free to explore</p>
                   </div>

                </div>
            </div>
        </div>
    );
}
Aos.init()

export default Banner;