import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <ul className="list-group pt-3">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
            <div className="pb-6 mt-3">
          <li key={index} className="list-group-item-secondary pt-3 m-2 pb-6 kb-slight-rounded-corners">
            <div className="d-flex align-items-center">
              <i className="p-2 pe-3 fa fa-solid fa-grip-vertical"></i>
              <div>
                <h5 className="font-weight-bold d-inline">{module.name}</h5>
                <p className="ps-4 pb-3">{module.description}</p>
              </div>
              <div className="ms-auto pe-2 kb-push-up">
                <i className="p-2 fa fa-solid fa-check text-success"></i>
                <i className="p-2 fa fa-solid fa-plus"></i>
                <i className="p-2 fa fa-solid fa-grip-vertical"></i>
              </div>
            </div>
          </li>
          <br/>
          </div>
        ))}
    </ul>
  );
}

export default ModuleList;
