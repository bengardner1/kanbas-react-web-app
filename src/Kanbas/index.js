import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import '../vendors/fontawesome/css/all.css';
import '../vendors/css/bootstrap.min.css';
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { React, useState } from "react";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
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
    return(
      <Provider store={store}>
       <div className="row">
          <KanbasNavigation/>
          <div className="col-12 col-md-11 ms-4">
            <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
               <Dashboard
               courses={courses}
               course={course}
               setCourse={setCourse}
               addNewCourse={addNewCourse}
               deleteCourse={deleteCourse}
               updateCourse={updateCourse}/>} />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
         </Routes>
         </div>
      </div>
      </Provider>
    );
 }
 export default Kanbas