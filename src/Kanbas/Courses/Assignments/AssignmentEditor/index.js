import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
       <div class="float-end"><i class="fa fa-solid fa-check text-success"></i><span class="text-success ps-2 pe-2">Published</span>
            <button type="button" class="btn kb-button-grey"><i class="fa fa-solid fa-ellipsis-v"></i></button></div> <br/> <br/>
        <hr/> 
        <label for="assname" class="form-label mb-0"><p class="mb-1">Assignment Name</p> </label>
    <input type="text" value={assignment.title} class="form-control" id="assname"/> <br/>
    <textarea placeholder="This is the assignment description." class="form-control" rows="6"></textarea> <br/>
            <div class = "container kb-fat-padding-r pb-6">
                <div class="row  pb-3">
                    <div class="col-3 text-end pt-1">
                        <label for="points" class="d-inline inline-label-input">Points</label>
                    </div>
                    <div class="col-9">
                        <input type="number" value = "100" id="points" class="form-control d-inline inline-label-input"/> 
                    </div>
                </div>
                <div class="row pb-4">
                    <div class="col-3 text-end pt-1">
                        <label for="group" class="d-inline">Assignment Group </label>
                    </div>
                    <div class="col-9">
                        <select class="form-select d-inline" id="group"><option>ASSIGNMENTS</option></select>
                    </div>
                </div>
                
                <div class="row pb-4">
                    <div class="col-3 text-end pt-1">
                        <label for="displaygrade">Display Grade As </label>
                    </div>
                    <div class="col-9">
                        <select class="form-select d-inline" id="displaygrade"><option>Percentage</option></select>
                    </div>
                </div>

                <div class="row pb-4">
                    <div class="col-3 text-end pt-1">
                        <label for="subtype">Submission Type  </label>
                    </div>
                    <div class="col-9 kb-thin-black-border-rounded">
                        <select class="form-select d-inline mt-4 ms-3 me-3 w-75" id="subtype"><option id="subtype">Online</option></select><br/><br/>
                        <div class="container ms-3 me-3">
                            <div class="form-check mb-4">
                                <input class="form-check-input" type="checkbox" value="Text Entry" id="textentry"/>
                                <label class="form-check-label" for="textentry">Text Entry</label>
                            </div>
                            
                            <div class="form-check mb-4">
                                <input class="form-check-input" type="checkbox" value="URL" id="wurl"/>
                                <label class="form-check-label" for="wurl">Website URL</label>
                            </div>
                            
                            <div class="form-check mb-4">
                                <input class="form-check-input" type="checkbox" value="Media" id="mediarecs"/>
                                <label class="form-check-label" for="mediarecs">Media Recordings</label>
                            </div>
                            
                            <div class="form-check mb-4">
                                <input class="form-check-input" type="checkbox" value="Student Annotations" id="studenta"/>
                                <label class="form-check-label" for="studenta">Student Annotations</label>
                            </div>
                            
                            <div class="form-check mb-4">
                                <input class="form-check-input" type="checkbox" value="File Uploads" id="fileus"/>
                                <label class="form-check-label" for="fileus">File Uploads</label>
                            </div>
                    </div>
                    </div>
                </div>
                <div class="row pb-4">
                    <div class="col-3 text-end pt-1">
                        Assign
                    </div>
                    <div class="col-9 kb-thin-black-border-rounded">
                        <div class = "container">
                        <p class="mt-2">Assign to </p>
                        <input class="form-control" type="text" value ="Everyone"/><br/>
                        Due <br/>
                        <input class="form-control" type="date" value="2021-01-01"/><br/>
                        <div class="row">
                            <div class="col-6">
                                Available From <br/>
                        <input class="form-control" type="date" value="2021-01-01"/>
                            </div>
                            <div class="col-6">
                                Until <br/>
                        <input class="form-control" type="date" value="2021-01-01"/><br/><br/>
                            </div>
                        </div>      
                        </div>
                    </div>
                    </div> <hr/>
                    <div class="float-end">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-danger">
                Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-success me-2">
                Save
            </button>
            </div>
                    </div> 
              
    </div>
  );
}


export default AssignmentEditor;