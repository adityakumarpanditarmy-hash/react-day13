import React from "react";
import ReactDOM from "react-dom/client";
import About from "./src/about";
import Contact from "./src/contact";
import Home from "./src/home";
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import Github from "./src/github";
import { useParams } from "react-router-dom";




function App(){
 return (
   <>
    {/* <h1>Hello Coder Army</h1>  */}
   
   {/* 
  
   */}

   <BrowserRouter>

   <nav>
    <Link to="/">Home</Link>
    <br></br>
     <Link to="/contact">Contact</Link>
     <br></br>
      <Link to="/about">About</Link>
      {/* <Link to="/github/:name">Github</Link> */}
      <Link to="/github">Github</Link>
   </nav>
    <Routes>

   <Route path="/"element={<Home></Home>}> </Route>
   <Route path="/contact"element={ <Contact></Contact>}></Route>
   <Route path="/about"element={ <About></About>}></Route>

   <Route path="/github/:name" element={<Github></Github>}></Route> 

    </Routes>
   
   
   </BrowserRouter>

   
   
  
  </>
 )


}

























const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)