
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/Mainlayout/MainLayout';
import Home from '../Pages/Home/Home';
import Error from '../Error/Error';
import Contact from '../Pages/Contact/Contact';
import About from '../Pages/About/About';
import SingleService from '../Components/SingleService';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import PrivateRoute from './PrivateRoute';
import Blog from '../Pages/Blog/Blog';
import Gallery from '../Pages/Gallery/Gallery';

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
            element:<PrivateRoute><SingleService></SingleService></PrivateRoute>,
            loader:()=>fetch('/concert.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path:'/gallery',
                element:<PrivateRoute><Gallery></Gallery></PrivateRoute>
            }
        ]
    }
])

export default MainRoute;