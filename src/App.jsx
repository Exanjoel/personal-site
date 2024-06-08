import React from "react";
import "./App.css";
import Intropage from "./intropage";
import About from "./about me";
import Contact from "./contact";
import Header from "./header";
import Bodymain from "./body";
import Footer from "./footer";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Intropage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
  ]);

  

  return (
    <>
      <React.StrictMode>
        <div className="lg:px-16 md:p-">
          <div className="">
            <Header />
          </div>
          <div className="h-full">
          
            <RouterProvider router={router} />
            
          </div>
          <div className="my-4 ">
            <Footer />
          </div>
        </div>
      </React.StrictMode>
    </>
  );
}

export default App;
