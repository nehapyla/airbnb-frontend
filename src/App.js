import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Pools from './components/pools';
import Farms from './components/farms';
import Views from './components/views';
import Lakefront from './components/lakefront';
import Beachfront from './components/beachfront';
import Cabins from './components/cabins';
import Tinyhomes from './components/tinyhomes';
import Luxe from './components/luxe';
import Omg from './components/omg';
import CategRoom from './components/rooms';
import NextPage from './components/nextpage';
import Checkout from './components/checkout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/nextpage/:id",
      element: <NextPage/>,
    },
    {
      path: "/payment",
      element: <Checkout/>
    },
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Pools />
        },
        {
          path: "/farms",
          element: <Farms />
        },
        {
          path: "/views",
          element: <Views/>
        },
        {
          path: "/categroom",
          element: <CategRoom/>
        },
        {
          path: "/lakefront",
          element: <Lakefront/>
        },
        {
          path: "/omg",
          element: <Omg/>
        },
        {
          path: "/beachfront",
          element: <Beachfront/>
        },
        {
          path: "/cabins",
          element: <Cabins/>
        },
        {
          path: "/tinyhomes",
          element: <Tinyhomes/>
        },
        {
          path: "/luxe",
          element: <Luxe/>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;