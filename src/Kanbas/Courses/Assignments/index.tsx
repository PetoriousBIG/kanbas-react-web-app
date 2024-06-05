import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import RowControlButtons from "./RowControlButtons"
import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
export default function Assignments() {
    return (
    <div id="wd-assignments">
      <AssignmentsControls/><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3"/>                  
              ASSIGNMENTS
              <AssignmentControlButtons/>
            </div>
            <ul className="wd-lessons list-group rounded-0">
 
              <li className="wd-lesson list-group-item p-3 ps-1 border-green d-flex flex-row justify-content-end align-items-center">
                <div className="me-auto">
                  <div className="d-flex flex-row justify-content-start">
                    <div className="d-flex flex-row align-items-center">
                      <BsGripVertical className="me-2 fs-3 "/>
                      <GiNotebook className="text-success me-2"/>  
                    </div>
                    <div>
                      <h5><b><a href="#/Kanbas/Courses/1234/Assignments/123">A1</a></b></h5>
                      <h6> <span className="text-danger">Multiple Modules</span> |  <b>Not available until</b> May 6 at 12:00  | <br/> 
                      <b>Due</b> May 13 at 11:59pm  |  100 pts</h6>
                    </div>
                  </div>
                </div>
                <div>
                  <RowControlButtons/>
                </div>
              </li>

 
              <li className="wd-lesson list-group-item p-3 ps-1 border-green d-flex flex-row justify-content-end align-items-center">
                <div className="me-auto">
                  <div className="d-flex flex-row justify-content-start">
                    <div className="d-flex flex-row align-items-center">
                      <BsGripVertical className="me-2 fs-3 "/>
                      <GiNotebook className="text-success me-2"/>  
                    </div>
                    <div>
                      <h5><b><a href="#/Kanbas/Courses/1234/Assignments/123">A2</a></b></h5>
                      <h6> <span className="text-danger">Multiple Modules</span> |  <b>Not available until</b> May 13 at 12:00  | <br/> 
                      <b>Due</b> May 20 at 11:59pm  |  100 pts</h6>
                    </div>
                  </div>
                </div>
                <div>
                  <RowControlButtons/>
                </div>
              </li>

 
              <li className="wd-lesson list-group-item p-3 ps-1 border-green d-flex flex-row justify-content-end align-items-center">
                <div className="me-auto">
                  <div className="d-flex flex-row justify-content-start">
                    <div className="d-flex flex-row align-items-center">
                      <BsGripVertical className="me-2 fs-3 "/>
                      <GiNotebook className="text-success me-2"/>  
                    </div>
                    <div>
                      <h5><b><a href="#/Kanbas/Courses/1234/Assignments/123">A3</a></b></h5>
                      <h6> <span className="text-danger">Multiple Modules</span> |  <b>Not available until</b> May 20 at 12:00  | <br/> 
                      <b>Due</b> May 27 at 11:59pm  |  100 pts</h6>
                    </div>
                  </div>
                </div>
                <div>
                  <RowControlButtons/>
                </div>
              </li>
            </ul>
          </li>
        </ul>
    </div>
);}
