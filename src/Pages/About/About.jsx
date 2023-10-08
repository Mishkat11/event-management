import Footer from "../../Components/Footer/Footer";
import { AiTwotoneLock } from 'react-icons/ai'
// import { FaTruck } from 'react-icons/fa'
import {  TbTicket } from 'react-icons/tb'
import { RiServiceFill } from 'react-icons/ri'
import Aos from "aos";
const About = () => {
    return (
        <div className="text-center">
           <h1 className="text-center font-bold text-4xl pt-10 pb-2">About Us </h1>
           <p className="text-center text-lg font-medium">At <span className="font-bold">Bong</span> Productions, we are the orchestrators of unforgettable concert experiences. With a passion for music and an unwavering commitment to excellence, we bring your musical dreams to life.</p>
           <div>
            <h1>
                
            </h1>
           </div>
           <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
           <div className="flex justify-center pb-2 pt-5 ">
        
        <img className="w-[500px]" src='https://i.ibb.co/SxPRGhG/photo-1524368535928-5b5e00ddc76b.jpg' alt="" />
       </div> 
           </div>
           <br />
                <hr />
                <br />
                <div className="pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="single-shipping">
                            <TbTicket className='text-center font-bold text-5xl mx-auto' />
                            <h3>Ticket Sales</h3>
                        </div>
                        <div className="single-shipping">
                            <RiServiceFill className='text-center font-bold text-5xl mx-auto' />
                            <h3>Food Services</h3>
                        </div>
                        <div className="single-shipping">
                            <AiTwotoneLock className='text-center font-bold text-5xl mx-auto' />
                            <h3>Security Services</h3>
                        </div>
                    </div>
                </div>
           <div>
           <Footer></Footer>
           </div>
        </div>
    );
};
Aos.init()
export default About;