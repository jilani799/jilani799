import React from "react";
import Practic from "./components/Jilani/Practic";
import Practice from "./components/Forgotpassword/Practice";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Approuter=()=>{
    return(
    <BrowserRouter>
      <Routes>
          <Route path="/Practice" element={<Practice/>}/>
          <Route path="/Practic" element={<Practic/>}/>
      </Routes>
    </BrowserRouter>
    )
}
export default Approuter;