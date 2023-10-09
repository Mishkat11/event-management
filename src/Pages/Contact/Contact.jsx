import Aos from "aos";
import Footer from "../../Components/Footer/Footer";
import { MdLocationOn } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
const Contact = () => {
    return (
        <div>
            <div className="bg-bg-contact   w-full  h-[200px] bg-contain">
                <div data-aos="fade-down"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="relative h-full bg-black/80 flex justify-center items-center">
                     <div>
                   <h1 className=" font-bold text-5xl text-white ">
                       Contact Us
                    </h1>
                    <p className="pt-3 text-center font-semibold text-white">Home / <span className="text-blue-600">Contact</span></p>
                   </div>
                </div>
                <div>

                </div>

            </div>


            <div className="my-16 ">
                <div className="grid md:grid-cols-3 gap-8  ml-10">
                    <div className="flex">
                        <MdLocationOn className="text-white bg-blue-600 rounded-[50%] p-2  text-6xl "></MdLocationOn>
                        <div className="pl-5">
                            <h1 className="text-xl font-bold">Address</h1>
                            <p className="text-gray-500 font-medium">Muradpur,Chattogram 4312,Bangladesh</p>
                        </div>
                    </div>
                    <div className="flex">
                        <FiPhone className="text-white bg-blue-600 rounded-[50%] p-2  text-6xl "></FiPhone>
                        <div className="pl-5">
                            <h1 className="text-xl font-bold">Phone</h1>
                            <p className="text-gray-500 font-medium">01888-88231 , O1603-421332</p>
                        </div>
                    </div>
                    <div className="flex">
                        <AiOutlineMail className="text-white bg-blue-600 rounded-[50%] p-2  text-6xl "></AiOutlineMail>
                        <div className="pl-5">
                            <h1 className="text-xl font-bold">Mail</h1>
                            <p className="text-gray-500 font-medium">bongproduction21@gamil.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-8">
                <h1 className="text-center text-4xl font-semibold pt-5">Our Location </h1>
                <p className="text-center font-medium text-sm pb-5"> We are Currently Located at Muradpur</p>
                <iframe width="100%"  height="400"  scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Muradpur%20Chattogram%20Bangladesh+(Bong%20Productions)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
            </div>
            <Footer></Footer>
        </div>
    );
};
Aos.init()
export default Contact;