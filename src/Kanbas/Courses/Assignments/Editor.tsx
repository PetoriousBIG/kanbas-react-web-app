import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment}
  from "./reducer";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = useSelector((state: any) => state.assignmentsReducer.assignments.find((assignment: any) => assignment._id === aid))
    const exists = assignment !== undefined
    const assignmentGroups = ["ASSIGNMENTS", "PROJECTS", "QUIZZES", "EXAMS"]
    const dispatch = useDispatch()
    const nav = useNavigate()

    const [assignmentTitle, setAssignmentTitle] = useState(exists ? assignment.title : "New Assignment");
    const [assignmentDescription, setAssignmentDescription] = useState(exists ? assignment.description : "New Description");
    const [assignmentAvailableDate, setAssignmentAvailableDate] = useState(exists ? assignment.available_date : new Date().toDateString());
    const [assignmentAvailableTime, setAssignmentAvailableTime] = useState(exists ? assignment.available_time : "12:00am");
    const [assignmentDueDate, setAssignmentDueDate] = useState(exists ? assignment.due_date : new Date().toDateString());
    const [assignmentDueTime, setAssignmentDueTime] = useState(exists ? assignment.due_time : "11:59pm");
    const [assignmentScore, setAssignmentScore] = useState(exists ? assignment.score : 100);
    const [assignmentGroup, setAssignmentGroup] = useState(exists ? assignment.group : assignmentGroups[0])
    const [assignmentUntilDate, setAssignmentUntilDate] = useState(exists ? assignment.until_date : new Date().toDateString())
    const [assignmentUntilTime, setAssignmentUntilTime] = useState(exists ? assignment.until_time : "11:59pm")

    return (
      <div id="wd-assignments-editor" className="container">
        <label htmlFor="wd-name" className="text-secondary"><strong>Assignment Name</strong></label>
        <input id="wd-name" className="form-control mt-3" value={assignmentTitle}
         onChange={(e) => setAssignmentTitle(e.target.value)}/>
        <textarea id="wd-description" className="form-control mt-4" value={assignmentDescription}
          onChange={(e) => setAssignmentDescription(e.target.value)}/>

        <div className="pt-4">
          <div className="row">
            <div className="col-2">
              <label htmlFor="wd-points"><h6>Points</h6></label>
            </div>
            <div className="col-10">
              <input id="wd-points" className="form-control" value={assignmentScore}
                onChange={(e) => setAssignmentScore(e.target.value)}/>
            </div>
          </div>

          <div className="row pt-4">
            <div className="col-2">
              <label htmlFor="wd-group"><h6>Assignment Group</h6></label>
            </div>
            <div className="col-10">
              <select name="wd-group" className="form-select" value={assignmentGroup}
                onChange={(e) => setAssignmentGroup(e.target.value)}>
                <option value="0">{assignmentGroups[0]}</option>
                <option value="1">{assignmentGroups[1]}</option>
                <option value="2">{assignmentGroups[2]}</option>
                <option value="3">{assignmentGroups[3]}</option>
              </select>
            </div>
          </div>

          <div className="row pt-4">
            <div className="col-2">
              <label htmlFor="wd-display-grade-as"><h6>Display Grade as</h6></label>
            </div>
            <div className="col-10">
              <select name="wd-display-grade-as" className="form-select">
                <option value="0">Percentage</option>
                <option value="1">Raw Number</option>
              </select>
            </div>
          </div>

          <div className="row pt-4">
            <div className="col-2">
              <label htmlFor="wd-submission-type"><h6>Submission Type</h6></label>
            </div>
            <div className="col-10 border border-rounded-3 pt-4">
              <select name="wd-submission-type" className="form-select m-1">
                <option value="0">Online</option>
                <option value="1">In Person</option>
                <option value="2">Carrier Pigeon</option>
              </select>
        
              <label className="pt-4"><b>Online Entry Options</b></label>
              <div className="checkbox pt-3">
                <input type="checkbox" id="wd-text-entry"/> <label htmlFor="wd-text-entry" className="ps-2">Text Entry</label>       
              </div>

              <div className="checkbox pt-3">
                <input type="checkbox" id="wd-website-url"/> <label htmlFor="wd-website-url" className="ps-2">Website URL</label>
              </div>

              <div className="checkbox pt-3">
                <input type="checkbox" id="wd-media-recordings"/> <label htmlFor="wd-media-recordings" className="ps-2">Media Recordings</label>
              </div>

              <div className="checkbox pt-3">
                <input type="checkbox" id="wd-student-annotation"/> <label htmlFor="wd-student-annotation" className="ps-2">Student Annotation</label>
              </div>

              <div className="checkbox pt-3 pb-3">
                <input type="checkbox" id="wd-file-upload"/> <label htmlFor="wd-file-upload" className="ps-2">File Uploads</label>
              </div>
            </div>
          </div>
          
          <div className="row pt-4">
            <div className="col-2">
              <label htmlFor="wd-submission-type"><h6>Assign</h6></label>
            </div>
            <div className="col-10 border border-rounded-1">
              <div className="pt-4">
                <strong>Assign to</strong>
                <input id="wd-assign-to" type="text" placeholder="Everyone" className="form-control"></input>
              </div>
              
              <div className="pt-4">
                <label htmlFor="wd-due-date"><strong>Due</strong></label> 
                <input id="wd-due-date" type="date" className="form-control" value={assignmentDueDate}
                  onChange={(e) => setAssignmentDueDate(e.target.value)}/>
              </div>

              <div className="container pt-4">
                <div className="row justify-content-between">
                  <div className="col">
                    <label htmlFor="wd-available-from"><strong>Available from</strong></label>
                  </div>
                  <div className="col">
                    <label htmlFor="wd-available-until"><strong>Until</strong></label>
                  </div>
                </div>
                <div className="row pb-4">
                  <div className="col">
                    <input id="wd-available-from" className="form-control" value={assignmentAvailableDate} type="date"
                      onChange={(e) => setAssignmentAvailableDate(e.target.value)}/>
                  </div>
                  <div className="col">
                    <input id="wd-available-until" className="form-control" value={assignmentUntilDate} type="date"
                      onChange={(e) => setAssignmentUntilDate(e.target.value)}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/*
          Solution for going back in webpage taken from:
          https://stackoverflow.com/questions/30915173/react-router-go-back-a-page-how-do-you-configure-history  

          See useNavigate solution.
        */}
        <div id="wd-editor-save" className="container pb-5">
          <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end" 
            onClick={(e) => {
              if (exists) {
                  dispatch(updateAssignment({_id: aid,
                                             title: assignmentTitle, 
                                             course: cid,
                                             available_date: assignmentAvailableDate,
                                             available_time: assignmentAvailableTime,
                                             until_date: assignmentUntilDate,
                                             until_time: assignmentUntilTime,
                                             due_date: assignmentDueDate,
                                             due_time: assignmentDueTime,
                                             score: assignmentScore,
                                             description: assignmentDescription,
                                             group: assignmentGroup}))
              } else {
                  dispatch(addAssignment({title: assignmentTitle, 
                                          course: cid,
                                          available_date: assignmentAvailableDate,
                                          available_time: assignmentAvailableTime,
                                          until_date: assignmentUntilDate,
                                          until_time: assignmentUntilTime,
                                          due_date: assignmentDueDate,
                                          due_time: assignmentDueTime,
                                          score: assignmentScore,
                                          description: assignmentDescription,
                                          group: assignmentGroup}))
              }
              nav(-1);}
              }>
            Save
          </button>        
          <button id="wd-editor-cancel" className="btn btn-lg me-1 btn-secondary float-end" onClick={() => nav(-1)} type="button">
            Cancel
          </button>

        </div>

        <div className="pt-5 pb-5">

        </div>
      </div>
);}
