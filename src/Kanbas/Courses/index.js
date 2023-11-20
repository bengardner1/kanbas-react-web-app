import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { Link, Navigate, Route, Routes, useLocation} from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import CourseNavigation from "../CourseNavigation";
import Modules from "./Modules";
import Home from "../Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const URL = "https://bg-kanbas-node-server-app-d9dfae0193b7.herokuapp.com/api/courses";
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const pathSeg = pathname.split('/').pop()
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  return (
    <div>
        <div className="pt-2">
            <nav aria-label="breadcrumb" className="d-inline kb-breadcrumb">
                <ol className="breadcrumb">
                    <li className="pb-2 pe-2 kb-nudge-up"><FaBars className="kb-red"/></li>
                  <li className="breadcrumb-item"><Link className="link-styling" to={`/Kanbas/Courses/${courseId}/Home`}>
                    {course.number} 
                  </Link></li>
                  <li className="breadcrumb-item">{pathSeg}</li>
                </ol>
              </nav>
              <hr/>
              </div>
    <div className="row">
        <CourseNavigation />
      <div className="col-10">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
    </div>

        </div>
  );
}
export default Courses;