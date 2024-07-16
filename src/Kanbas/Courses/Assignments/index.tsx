import React, { useEffect } from "react";
import * as client from "./client";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import RowControlButtons from "./RowControlButtons"
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import "./styles.css"
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment, deleteAssignment, setAssignments }
  from "./reducer";

export default function Assignments() {
    const { cid } = useParams();
    const dispatch = useDispatch()

    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    }
    useEffect(() => {
        fetchAssignments();
    }, []);

    const removeAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    }

    const saveAssignment = async (assignment: any) => {
        const status = await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    }

    const { assignments } = useSelector((state: any) => state.assignmentsReducer)
    console.log(assignments);

    return (
      <div id="wd-assignments">
        <div className="pb-5">
          <AssignmentsControls />   
        </div>
        <div>
          <ul id="wd-modules" className="list-group rounded-0 pt-5">
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2">
                <BsGripVertical className="me-2 fs-3"/>
                <IoIosArrowDropdownCircle />
                <span className="ms-2">ASSIGNMENTS</span>
                <AssignmentControlButtons/>
              </div>
              <ul className="wd-lessons list-group rounded-0">
                {assignments
                  .map((assignment: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1 border-green d-flex flex-row justify-content-end align-items-center"
                      key={assignment._id}>
                    <div className="me-auto">
                      <div className="d-flex flex-row justify-content-start">
                        <div className="d-flex flex-row align-items-center">
                          <BsGripVertical className="me-2 fs-3 "/>
                          <GiNotebook className="text-success me-2"/>  
                        </div>
                        <div>
                          <Link style={{ textDecoration: 'none'}} to={assignment._id}>
                            <h5 style={{ color: 'black' }}>
                              {!assignment.editing && assignment.title}
                              { assignment.editing && (
                                <input className="form-control w-50 d-inline-block"
                                  onChange={(e) => saveAssignment({ ...assignment, title: e.target.value })}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      saveAssignment({ ...assignment, editing: false});
                                    }
                                  }}
                                  value={assignment.title} />
                              )}
                            </h5>
                            <h6 style={{ color: 'black' }}><span className="text-danger">Multiple Modules</span> |  <b>Not available until</b> {assignment.available_date} at {assignment.available_time}  | 
                            <b> Due</b> {assignment.due_date} at {assignment.due_time}  |  {assignment.score} pts</h6>
                          </Link>
                        </div>

                      </div>
                    </div>
                    <div>
                      <RowControlButtons assignmentId={assignment._id}
                        deleteAssignment={(assignmentId) => {removeAssignment(assignmentId);
                      }}/>
                    </div>
                  </li>))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
}