import React from 'react'
import {Routes,Route,Link}from "react-router-dom";
import Home from "./Home";
import Developpeurs from"./Developpeurs"

import Recruteurs from "./Recruteurs"
import Candidat from "./Candidat"
import IA from "./IA"
import Actualites_dev from "./Actualites_dev"

import Contact from "./Contact"
import FormulaireCandidat from "./FormulaireCandidat";
function AppRoutes(){

return(

  
  
   <Routes>
 <Route path="/"element={<Home/>}></Route>
<Route path="/Developpeurs"element={<Developpeurs/>}></Route>
<Route path="/Recruteurs"element={<Recruteurs/>}></Route>
<Route path="/Candidat"element={<Candidat/>}></Route>
<Route path="/Actualites_dev"element={<Actualites_dev/>}></Route>
<Route path="/IA"element={<IA/>}></Route>
<Route path="/Contact"element={<Contact/>}></Route>
 <Route path="/formulaire" element={<FormulaireCandidat />} />
   </Routes>




)
}
export default AppRoutes