import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
         <div className="float-end">
            <button type = "button" class="btn kb-button-grey">
                <i class="fa fa-solid fa-file-alt"></i>  Import</button>
            <button type="button" class= "btn kb-button-grey"><i class="fa fa-solid fa-file-alt"></i>
                <select class ="kb-button-grey border-0"><option value = "Gradebook">
                Export</option></select></button>
            <button type = "button" class="btn kb-button-grey"><i class="fa fa-solid fa-sun"></i></button>
        </div>
        <br/>
        <br/>
        <div class="row">
            <div class="col-6">
                <h5>Student Names</h5> 
                <div class="form-group border">
                    <div class="input-group">
                        <div class="input-group-prepend">
                                <i class="fa fa-solid fa-search p-2 pt-2 text-secondary"></i>
                        </div>
                        <input type="text" class="form-control border-0" placeholder="Search Students"/>
                        <div class="float-end">
                            <button class="btn btn-secondary dropdown-toggle kb-grey-list-item text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="custom-caret"></span>
                        </button></div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <h5>Assignment Names</h5>
                <div class="form-group border">
                    <div class="input-group">
                        <div class="input-group-prepend">
                                <i class="fa fa-solid fa-search p-2 pt-2 text-secondary"></i>
                        </div>
                        <input type="text" class="form-control border-0" placeholder="Search Assignments"/>
                        <div class="float-end">
                            <button class="btn btn-secondary dropdown-toggle kb-grey-list-item text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="custom-caret"></span>
                        </button></div>
                    </div>
                </div>
            </div>
        </div>
        
        <br/> 
        <button type ="button" class="btn kb-button-grey mb-4">
            <i class="fa fa-filter"></i>   Apply Filters</button>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
            </tbody>
            </table>
            </div>
            </div>
            )
            }
export default Grades

