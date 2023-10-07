
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/Mainlayout/MainLayout';
import Home from '../Pages/Home/Home';
import Error from '../Error/Error';
import Contact from '../Pages/Contact/Contact';

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
            }
        ]
    }
])

export default MainRoute;