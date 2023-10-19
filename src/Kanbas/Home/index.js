import Modules from "../Courses/Modules";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="row">
        <div className="col-9">
        <Modules/>
        </div>
        <div className="col-3 d-none d-xxl-block">
            <h5>Course Status</h5>
                <button type="button" className="btn btn-secondary me-2">Unpublish</button>
                <button type="button" className="btn btn-success">Published</button>
                <ul className="list-group pt-2 pb-2">
                    <li className="list-group-item kb-grey-link ">
                        <Link href = "#" className="link-styling-black">Import Existing Content</Link></li>
                    <li className="list-group-item kb-grey-link ">
                        <Link href = "#" className="link-styling-black">Import From Commons</Link></li>
                    <li className="list-group-item kb-grey-link ">
                        <Link href = "#" className="link-styling-black">Choose Home Page</Link></li>
                    <li className="list-group-item kb-grey-link ">
                        <Link href = "#" className="link-styling-black">View Course Stream</Link></li>
                    <li className="list-group-item kb-grey-link ">
                        <Link href = "#" className="link-styling-black">New Announcement</Link></li>
                    <li className="list-group-item kb-grey-link ">
                        <Link href = "#" className="link-styling-black">New Analytics</Link></li>
                    <li className="list-group-item kb-grey-link ">
                        <Link href = "#" className="link-styling-black">View Course Notifications</Link></li>
                </ul>
                <h3>To Do </h3>
                <h4 className="kb-inline">Coming Up</h4> 
                <hr/>
                <ul className="p-0">
                    <li><Link href = "#" className="link-styling">Lecture CS4550.12631.202410 Sep 7 at 11:45am</Link></li>
                    <li><Link href = "#" className="link-styling">Lecture CS4550.12631.202410 Sep 11 at 11:45am</Link></li>
                    <li><Link href = "#" className="link-styling">CS5610 06 SP23 Lecture Sep 11 at 6pm</Link></li>
                </ul>
        </div>
    </div>
  );
}
export default Home;