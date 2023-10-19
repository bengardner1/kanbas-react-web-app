import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import '../vendors/fontawesome/css/all.css';
import '../vendors/css/bootstrap.min.css';
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return(
       <div className="row">
          <KanbasNavigation/>
          <div className="col-12 col-md-11 ms-4">
            <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
         </Routes>
         </div>
      </div>
    );
 }
 export default Kanbas