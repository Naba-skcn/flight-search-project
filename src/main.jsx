import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Root from './components/root/Root.jsx';
import Error from './components/error/Error.jsx';
import Home from './components/home/Home.jsx';
import FlightSearch from './components/flightSearch/FlightSearch.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
    ],
  },
  {
    path: "/search",
    element: <FlightSearch></FlightSearch>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
