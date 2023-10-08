import { useLoaderData, useParams } from "react-router-dom";
import Footer from "./Footer/Footer";


const SingleService = () => {
const {id} = useParams()
const data = useLoaderData()
// console.log(data,id);

    const service = data.find(service=> service.id ==id)

    const {image_url,price,description,name} = service
    
    return (
        <div >
         <div className="hero min-h-screen ">
  <div className="flex justify-center  items-center gap-8 flex-col lg:flex-row">
  
   <img src={image_url} className="w-[300px] md:w-[400px] lg:w-[600px] lg:h-[400px] rounded-lg shadow-2xl" />
 
    <div>
      <h1 className="text-5xl font-bold "> {name} !</h1>
      <p className="py-6 text-gray-500"> {description} </p>
      <p className="text-gray-500 text-lg font-medium"> This particular event will cause you <span className="text-blue-600 font-bold">{price}</span></p>
    </div>
  </div>
</div>

<Footer></Footer>
        </div>
    );
};

export default SingleService;