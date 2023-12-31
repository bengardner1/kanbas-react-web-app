import {React, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer.js";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div>
    <div className="pb-6 mt-3 rounded">
    ` <li className="list-group-item list-group-item-secondary pt-3 m-2 pb-6 kb-slight-rounded-corners d-flex justify-content-center align-items-center">
        <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="btn btn-success m-2">Add</button>
        <button onClick={() => dispatch(updateModule(module))} className="btn btn-primary m-2">Update</button>
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
          className="form-control m-2"
        />
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
          className="form-control m-2"
        />
      </li>
    </div>
    <br/>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
            <div className="pb-6 mt-3 rounded">
          <li key={index} className="list-group-item list-group-item-secondary pt-3 m-2 pb-6 kb-slight-rounded-corners">
            <div className="d-flex align-items-center">
              <i className="p-2 pe-3 fa fa-solid fa-grip-vertical"></i>
              <div>
                <h5 className="font-weight-bold d-inline">{module.name}</h5>
                <p className="ps-4 pb-3">{module.description}</p>
              </div>
              <div className="ms-auto pe-2 kb-push-up">
              <button className="btn-info btn m-1"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
              <button className="btn-danger btn m-1"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
                {/* <i className="p-2 fa fa-solid fa-check text-success"></i>
                <i className="p-2 fa fa-solid fa-plus"></i>
                <i className="p-2 fa fa-solid fa-grip-vertical"></i> */}
              </div>
            </div>
          </li>
          <br/>
          </div> 
        ))}</div>
  );
}

export default ModuleList;
