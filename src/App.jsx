/*import './App.css';*/
import React from "react";
import LandingPage from './pages/LandingPage';
import Homepage from './pages/HomePage';
import Taskpage from "./pages/TaskPage";
import Contactpage from "./pages/ContactPage";
import {Route, Routes} from 'react-router-dom';
import { CONTACTPAGE, HOMEPAGE, TASKPAGE } from "./Routes"; //represent route path

function App() {
  return (
    <div className="todoapp">
      <Routes>
        <Route path={HOMEPAGE} element={<Homepage />} />
        <Route path={TASKPAGE} element={<Taskpage />} />
        <Route path={CONTACTPAGE} element={<Contactpage />} />  
        
        <Route path="*" element={<LandingPage/> } /> 
      </Routes>
    </div>
  );
}

export default App;
