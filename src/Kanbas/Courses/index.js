import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { Link, Navigate, Route, Routes, useLocation} from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import CourseNavigation from "../CourseNavigation";



function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const pathSeg = pathname.split('/').pop()
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
          <FaBars className="pt-2 pe-2 fa-2x kb-red"/>
            <nav aria-label="breadcrumb" className="d-inline kb-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item pt-3"><Link className="link-styling" to={`/Kanbas/Courses/${courseId}/Home`}>{course.number} 
                  </Link></li>
                  <li className="breadcrumb-item pt-3">{pathSeg}</li>
                </ol>
              </nav>
              <hr/>
        <div className="row">
        <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<h1>Modules</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>

        </div>
  );
}
export default Courses;