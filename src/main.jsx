import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Orders from './components/Orders/Orders.jsx';
import Inventory from './components/Inventory/Inventoey.jsx';
import Login from './components/Login/Login.jsx';
import cartProductsLoader from './loders/cartProductsLoader.js';
import Checkout from './components/Checkout/Checkout.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: () => cartProductsLoader(),
      },
      {
        path: "inventory",
        element:<PrivateRoutes> <Inventory></Inventory></PrivateRoutes>
      },
      {
        path: "/checkout",
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
