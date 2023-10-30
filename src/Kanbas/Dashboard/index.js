import { Link } from "react-router-dom";
import { React, useState } from "react";
import db from "../Database";
import gluee from "../../gluee.jpeg";

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] =  useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses,
              { ...course,
                _id: new Date().getTime() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }}));};

  return (
    <div>
      <h3 class = "kb-text-grey kb-heading">Dashboard</h3><hr/>
      <div class="kb-no-left-margin kb-dashboard-container">
      <h4 className="kb-heading">Published Courses ({courses.length})</h4> <hr/>
      <h5>Course</h5>
      <input value={course.name} className="form-control" 
      onChange={(e) => setCourse({ ...course, name: e.target.value})}/>
      <input value={course.number} className="form-control" 
      onChange={(e) => setCourse({ ...course, number: e.target.value})}/>
      <input value={course.startDate} className="form-control" type="date" 
      onChange={(e) => setCourse({ ...course, startDate: e.target.value})}/>
      <input value={course.endDate} className="form-control" type="date" 
      onChange={(e) => setCourse({ ...course, endDate: e.target.value})}/>
      <button onClick={addNewCourse} className="btn">Add Course</button>
      <button onClick={updateCourse} >
        Update
      </button>
        <div className="d-flex flex-row flex-wrap kb-course">
            {courses.map((course) => (
            <div className="card kb-card">
                <img src={gluee} className="card-img-top" alt="..."></img>
                <div className="card-body"> 
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="link-styling">
                    <h5 className="card-title">{course.number} : {course.name}</h5>
                </Link>
                <p className="card-text">{course.number}<br/>{course.startDate} to {course.endDate}</p>
                <button onClick={(event) => {event.preventDefault(); setCourse(course);}}>
              Edit </button>
                <button onClick={(event) => {event.preventDefault(); deleteCourse(course._id);}}>
              Delete
            </button>
                </div>
            </div>
            ))}
            </div>
        </div>
    </div>
  );
}
export default Dashboard;


