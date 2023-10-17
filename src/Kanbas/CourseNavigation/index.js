import { Link, useParams, useLocation } from "react-router-dom";


function CourseNavigation() {
  const links = [{Name : "Home", Link : "Home"}, 
                {Name : "Modules", Link : "Modules"},
                {Name : "Piazza", Link : "#"}, 
                {Name : "Zoom Meetings", Link : "#"}, 
                {Name : "Assignments", Link : "Assignments"}, 
                {Name : "Quizzes", Link : "#"}, 
                {Name : "Grades", Link : "Grades"},
                {Name : "People", Link : "#"}, 
                {Name : "Panopto Video", Link : "#"},
                {Name : "Discussions", Link : "#"}, 
                {Name : "Announcements", Link : "#"}, 
                {Name : "Pages", Link : "#"}, 
                {Name : "Files", Link : "#"}, 
                {Name : "Rubrics", Link : "#"}, 
                {Name : "Outcomes", Link : "#"}, 
                {Name : "Collaborations", Link : "#"}, 
                {Name : "Syllabus", Link : "#"},  
                {Name : "Settings", Link : "#"}];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div class="col-1 kb-small-left-padding kb-padding-right d-none d-lg-block">
    <ul className="kb-sidebar">
      {links.map((link, index) => (
        <li><Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link.Link}`}
          className={`link-styling ${pathname.includes(link.Name) && "kb-active"}`}>
          {link.Name}
        </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}


export default CourseNavigation;