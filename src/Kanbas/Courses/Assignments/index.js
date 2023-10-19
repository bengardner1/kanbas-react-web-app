import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  let counter = 1;
  return (
    <div>
      <input type = "text" placeholder= "Search for Assignments" class="w-25 form-control d-inline"/>
            <div class="float-end">
                <button type="button" class="btn kb-button-grey">+Group</button>
                <button type="button" class="btn btn-danger">+Assignment</button>
                <button type="button" class="btn kb-button-grey">
                    <i class="fa fa-solid fa-ellipsis-v"></i>
                </button>
            </div>
            <hr/>
    <ul class="list-group">
        <li class="list-group-item p-0">
        <h4 class="p-3 list-group-item-secondary mb-0"><i class="fa fa-solid fa-grip-vertical"></i> Assignments
            <div class="float-end"><span class="kb-rounded-corners d-inline p-2">40% of Total</span></div></h4> 
    <ul class="list-group kb-green-left-border">
        {courseAssignments.map((assignment) => (
          <li className="list-group-item d-flex align-items-center">
            <div class="kb-box-5 align-items-center">
                <i class="fa fa-solid fa-grip-vertical"></i>
                <i class="fa fa-solid fa-file text-success ps-3"></i>
            </div>
            <div class = "kb-box-90 ps-1">
                <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="kb-black-bold-link">
                <h5>A{counter++} - {assignment.title}</h5>
            </Link> 
            <p class="mb-0 fs-6 fw-light ps-1">
                Week 0 - Setup - Week Starting Monday September 5th <br/>
                Due Sep 18th, 2022 at 11:59pm | 100 pts
            </p>
            </div>
            <div class="kb-box-5">
                <i class="fa fa-solid fa-check text-success pe-4"></i>
                <i class="fa fa-solid fa-ellipsis-v"></i>
            </div>
        </li>
        ))}
      </ul>
    </li>
    </ul>
    </div>
  );
}
export default Assignments;