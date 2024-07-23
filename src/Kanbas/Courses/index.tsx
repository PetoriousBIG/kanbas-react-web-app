import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import PeopleTable from "./People/Table";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";

export default function Courses({courses}: { courses: any[];}) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation()
    return (
      <div id="wd-courses">
        <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1"/>
          {course && course.name} &gt; {pathname.split("/")[4]}
        </h2>
        <hr />
        <br />
        <div className="d-flex">
          <div className="d-none d-md-block pe-5">
              <CoursesNavigation/>
          </div>
          
          <div className="flex-fill">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home /> } />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                <Route path="Grades" element={<Grades/>} />
                <Route path="People" element={<PeopleTable />} />
                <Route path="People/:uid" element={<PeopleTable />} />
              </Routes>
          </div>
        </div>
      </div>
  );}
  