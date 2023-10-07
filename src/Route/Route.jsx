
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/Mainlayout/MainLayout';
import Home from '../Pages/Home/Home';
import Error from '../Error/Error';
import Contact from '../Pages/Contact/Contact';
import About from '../Pages/About/About';
import SingleService from '../Components/SingleService';

const MainRoute = createBrowserRouter ([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/concert.json')
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
            path:'/service/:id',
            element:<SingleService></SingleService>,
            loader:()=>fetch('/concert.json')
            }
        ]
    }
])

export default MainRoute;