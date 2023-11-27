import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import '../vendors/fontawesome/css/all.css';
import '../vendors/css/bootstrap.min.css';
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { React, useState, useEffect } from "react";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin";
import Account from "./users/account";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "https://bg-kanbas-node-server-app-d9dfae0193b7.herokuapp.com/api/courses";
  const [course, setCourse] =  useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data,
      ...courses,]);
    setCourse({ name: "" });
  };
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };
    return(
      <Provider store={store}>
       <div className="row">
          <KanbasNavigation/>
          <div className="col-12 col-md-11 ms-4">
            <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="account" element={<Account/>} />
            <Route path="Dashboard" element={
               <Dashboard
               courses={courses}
               course={course}
               setCourse={setCourse}
               addNewCourse={addNewCourse}
               deleteCourse={deleteCourse}
               updateCourse={updateCourse}/>} />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
            <Route path="/signin" element={<Signin />} />
         </Routes>
         </div>
      </div>
      </Provider>
    );
 }
 export default Kanbas