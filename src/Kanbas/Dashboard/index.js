import { Link } from "react-router-dom";
import db from "../Database";
import gluee from "../../gluee.jpeg";

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h3 class = "kb-text-grey kb-heading">Dashboard</h3><hr/>
      <div class="kb-no-left-margin kb-dashboard-container">
      <h4 className="kb-heading">Published Courses ({courses.length})</h4> <hr/>
        <div className="d-flex flex-row flex-wrap kb-course">
            {courses.map((course) => (
            <div className="card kb-card">
                <img src={gluee} className="card-img-top" alt="..."></img>
                <div className="card-body"> 
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="link-styling">
                    <h5 className="card-title">{course.number} : {course.name}</h5>
                </Link>
                <p className="card-text">{course.number}<br/>{course.startDate} to {course.endDate}</p>
                </div>
            </div>
            ))}
            </div>
        </div>
    </div>
  );
}
export default Dashboard;


