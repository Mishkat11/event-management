import Footer from "../../Components/Footer/Footer";


const Gallery = () => {
    return (<>

<div className="bg-bg-blg   w-full  h-[200px]  bg-contain">
                <div 
                    className="relative flex justify-center items-center h-full bg-black/60 ">
                   <div>
                   <h1 className=" font-bold text-5xl text-white ">
                       Our Gallery
                    </h1>
                    <p className="pt-3 text-center font-semibold text-white">Home / <span className="text-blue-600">Gallery</span></p>
                   </div>
                </div>
                <div>

                </div>

            </div>

        <div className=" w-[80%] mx-auto py-5"> 


<p className="text-center text-3xl  font-semibold py-5">Enjoy Some of our Concert Images <br /> that we have <span className="text-blue-600 font-extrabold"> organized</span></p>
      <div className="carousel relative h-[500px] ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/9Zb77vg/photo-1501612780327-45045538702b.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/3ss0gwm/217117-a-black-and-white-shot-of-a-band-on-stage-with-row.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/svF2YPD/danny-howe-bn-D2b-Cvpik-unsplash.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/DRjHszX/muneeb-syed-4-M8u-If-PEZw-unsplash.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

        </div>


<div className="grid md:grid-cols-3 gap-3 pb-5">


<img className="h-[300px] w-full " src="https://i.ibb.co/T0StT6v/images.jpg" alt="" />
<img className="h-[300px] w-full " src="https://i.ibb.co/YZRSctV/istockphoto-1329876176-612x612.jpg" alt="" />
<img className="h-[300px] w-full " src="https://i.ibb.co/n7cFVQc/download-4.jpg" alt="" />
<img className="h-[300px] w-full " src="https://i.ibb.co/FYLCG8f/download-5.jpg" alt="" />
<img className="h-[300px] w-full " src="https://i.ibb.co/d03Nq2V/download-6.jpg" alt="" />
<img className="h-[300px] w-full " src="https://i.ibb.co/rwCDwf1/lovepik-concert-stage-scene-and-audience-picture-500653530.jpg" alt="" />

</div>






<Footer></Footer>
        </>
    );
};

export default Gallery;