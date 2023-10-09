
import Marquee from "react-fast-marquee";
const Security = () => {
    return (
        <div className="py-6">
            <h1 className="font-bold text-4xl text-center">Security Services</h1>
            <h1 className="pb-5 text-center font-medium text-lg">We have some of the best Security Services</h1>
          <Marquee speed={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 border border-white">
<img className="h-[250px] w-full" src="https://i.ibb.co/28GTbq5/special-event-security-1024x683-1.jpg" alt="" />
<img className="h-[250px] w-full" src="https://i.ibb.co/17R3h67/event-security-10.jpg" alt="" />
<img className="h-[250px] w-full" src="https://i.ibb.co/JtJVXsM/concert-Security.jpg" alt="" />
<img className="h-[250px] w-full" src="https://i.ibb.co/NYbdG26/concert-security-guard-watching-the-stage.jpg" alt="" />
            </div>
          </Marquee>
        </div>
    );
};

export default Security;