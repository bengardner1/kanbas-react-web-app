import axios from "axios";
//const API_BASE = process.env.REACT_APP_API_BASE;
const API_BASE = "https://bg-kanbas-node-server-app-d9dfae0193b7.herokuapp.com/api";
const MODULES_URL = `${API_BASE}/modules`;
const COURSES_URL = `${API_BASE}/courses`;


// get all the modules for this course
export const findModulesForCourse = async (courseId) => {
  const URL = `${COURSES_URL}/${courseId}/modules`;
  console.log(URL);
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

// create a new module
export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module) => {
  const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};