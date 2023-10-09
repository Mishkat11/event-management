import toast from "react-hot-toast";
import Footer from "../../Components/Footer/Footer";


const Blog = () => {
    const handleClick=()=>{
        return toast.success('Blog details are coming soon')
    }
    return (
        <div>
                  <div className="bg-bg-blg   w-full  h-[200px]  bg-contain">
                <div 
                    className="relative flex justify-center items-center h-full bg-black/60 ">
                   <div>
                   <h1 className=" font-bold text-5xl text-white ">
                       Our Blog
                    </h1>
                    <p className="pt-3 text-center font-semibold text-white">Home / <span className="text-blue-600">Blog</span></p>
                   </div>
                </div>
                <div>

                </div>

            </div>

<div className="grid md:grid-cols-2 py-10 gap-2">

<div className="h-[500px]  bg-gray-200 p-8 space-y-4  pl-14">
    <h1 className="text-2xl font-semibold">Venue: <span className="text-blue-600 font-bold"> Grand Symphony Hall</span></h1>
    <h1 className="text-xl font-semibold">Location: <span className="text-blue-600 font-bold">Downtown Musicville</span> </h1>
    <p className="text-xl  ">
    Recently, I had the incredible opportunity to manage a spectacular concert at the renowned Grand Symphony Hall in the heart of Musicville's vibrant downtown area. The event, titled "Harmony Unleashed: A Night of Musical Magic," was a mesmerizing celebration of music that left a lasting impression on all attendees.
    </p>
    <button onClick={handleClick} className="btn btn-primary">Read More</button>
</div>
<div className="h-[500px] ">
    <img className="h-full" src="https://i.ibb.co/rwCDwf1/lovepik-concert-stage-scene-and-audience-picture-500653530.jpg" alt="" />
</div> 
<div className="h-[500px] ">
    <img className="h-full" src="https://i.ibb.co/1Qxs2cg/photo-1514525253161-7a46d19cd819.jpg" alt="" />
</div> 
<div className="h-[500px]  bg-gray-200 p-8 pl-14 space-y-4  pl-14">
    <h1 className="text-2xl font-semibold">Venue: <span className="text-blue-600 font-bold"> Harmony Park Amphitheater</span></h1>
    <h1 className="text-xl font-semibold">Location: <span className="text-blue-600 font-bold">Riverfront Plaza, Riverside City</span> </h1>
    <p className="text-xl  ">
    Rhythms of the City" is a vibrant outdoor concert series that takes place at the picturesque Harmony Park Amphitheater along the scenic Riverfront Plaza in Riverside City. This iconic venue offers a natural amphitheater setting with lush greenery and a view of the river. It's the perfect place to enjoy live music under the open sky with the cityscape as your backdrop
    </p>
    <button onClick={handleClick} className=" btn btn-primary">Read More</button>
</div>

<div className="h-[500px]  bg-gray-200 p-8 space-y-4">
    <h1 className="text-2xl font-semibold">Venue: <span className="text-blue-600 font-bold"> Electric Arena</span></h1>
    <h1 className="text-xl font-semibold">Location: <span className="text-blue-600 font-bold"> Downtown Rockville</span> </h1>
    <p className="text-xl  ">
    Rock Revolution Live" is an electrifying concert series hosted at the Electric Arena in the heart of Downtown Rockville. This dynamic venue boasts an industrial-chic vibe, state-of-the-art sound systems, and a pulsating atmosphere. It's the ultimate destination for rock enthusiasts to experience the power and energy of live music.
    </p>
    <button onClick={handleClick} className="btn btn-primary">Read More</button>
</div>
<div className="h-[500px] ">
    <img className="h-full" src="https://i.ibb.co/2cRmC59/audience-concert-crowd-dark.jpg" alt="" />
</div> 



</div>
<Footer></Footer>
        </div>
    );
};

export default Blog;