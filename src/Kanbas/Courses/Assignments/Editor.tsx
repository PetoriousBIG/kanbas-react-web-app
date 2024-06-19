import { useParams, useNavigate } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { aid } = useParams();
    const assignment = db.assignments.filter((assignment: any) => assignment._id === aid)[0]
    const assignmentGroups = ["ASSIGNMENTS", "PROJECTS", "QUIZZES", "EXAMS"]
    const nav = useNavigate()

    return (
      <div id="wd-assignments-editor" className="container">
        <label htmlFor="wd-name" className="text-secondary"><strong>Assignment Name</strong></label>
        <input id="wd-name" className="form-control mt-3" defaultValue={assignment.title} />
        <textarea id="wd-description" className="form-control mt-4" defaultValue={assignment.description}/>

        <div className="pt-4">
          <div className="row">
            <div className="col-2">
              <label htmlFor="wd-points"><h6>Points</h6></label>
            </div>
            <div className="col-10">
              <input id="wd-points" className="form-control" defaultValue={assignment.score} />
            </div>
          </div>

          <div className="row pt-4">
            <div className="col-2">
              <label htmlFor="wd-group"><h6>Assignment Group</h6></label>
            </div>
            <div className="col-10">
              <select name="wd-group" className="form-select" defaultValue={assignment.group}>
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
                <input id="wd-due-date" type="date" className="form-control" defaultValue={assignment.due_date}/>
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
                    <input id="wd-available-from" className="form-control" defaultValue={assignment.available_date} type="date"/>
                  </div>
                  <div className="col">
                    <input id="wd-available-until" className="form-control" defaultValue={assignment.due_date} type="date"/>
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
          <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end" onClick={() => nav(-1)}>
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
