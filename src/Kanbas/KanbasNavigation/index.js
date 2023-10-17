import { Link, useLocation } from "react-router-dom";
import "../index.css";
import '../../vendors/fontawesome/css/all.css';
import '../../vendors/css/bootstrap.min.css';

import northeastern_logo from "../../northeasternlogo.png";

function KanbasNavigation() {
  const links = [{Name : "Account", Link : "Account", Iconclass : "fa-user kb-profile-icon"}, 
                 {Name : "Dashboard", Link : "Dashboard", Iconclass: "fa-weight"},
                 {Name : "Courses", Link : "Courses", Iconclass: "fa-book"},
                 {Name : "Calendar", Link : "Calendar", Iconclass: "fa-calendar"},
                 {Name : "Inbox", Link : "#", Iconclass: "fa-print"},
                 {Name : "History", Link : "#", Iconclass: "fa-clock"},
                 {Name : "Studio", Link : "#", Iconclass: "fa-play-circle"},
                 {Name : "Commons", Link : "#", Iconclass: "fa-copyright"},
                 {Name : "Help", Link : "#", Iconclass: "fa-question-circle"},  
                ];
  const { pathname } = useLocation();
  let style = "fa fa-solid fa-2x kb-icon "; 
  return (
    <div className="col-12 col-md-1 d-none d-xl-block kb-80-px-wide"> 
    <ul className = "kb-black-sidebar pt-2">
        <div> <img src={northeastern_logo} width="75px"/></div>
        {links.map((link, index) => (
            <div className={`${pathname.includes(link.Link) && "kb-selected-link"}`}>
                <li>
                <Link
                key = {index} to={`/Kanbas/${link.Link}`} className = "link-styling">
                <i className={`${style} ${link.Iconclass}`}></i> <br/>
                <span className={`${pathname.includes(link.Link) && "kb-selected-link-text"}`}>{link.Name}</span>
            </Link>
            </li>
            </div>
        ))} 
    </ul>
    </div>
  );
}
export default KanbasNavigation;