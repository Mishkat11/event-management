import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Navbar/Nav";
import Services from "./Services";

const Home = () => {
    const servicesData = useLoaderData()
   
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <div className="py-10">
                <h1 className="text-3xl text-center font-bold">Our Services</h1>
                <div className="grid md:grid-cols-2 gap-4">
{
    servicesData.map(services=> <Services key={services.id} services={services}></Services>)
}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;