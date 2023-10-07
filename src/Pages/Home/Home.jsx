import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";


import Services from "./Services";
import About from "../About/About";
import Security from "./Security";

const Home = () => {
    const servicesData = useLoaderData()
   
    return (
        <div>
          
            <Banner></Banner>
            <div className="py-10">
                <h1 className="text-3xl text-center font-bold">Our Services</h1>
                <div className="grid md:grid-cols-2 gap-4 pt-8">
{
    servicesData.map(services=> <Services key={services.id} services={services}></Services>)
}
                </div>
            </div>

<Security></Security>

            <About></About>
           
        </div>
    );
};

export default Home;