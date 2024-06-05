export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
        <br />
        <input id="wd-name" className="form-control" value="A1" />
        <br />
        <label id="wd-description" className="form-control">
          <br />
          
          <h6>The assignment is <span className="text-danger">available online.</span></h6> <br />
          Submit a link to the landing page of
          your Web application running on Netlify.
          The landing page should should include
          the following: <br />
          
          &#8226; Your full name and section<br />
          &#8226; Links to each of the lab assignments<br />
          &#8226; Links to the Kanbas application <br />
          &#8226; Links to all the relevant source code repositories <br /> <br />
          The Kanbas application should include a
          link to navigate back to the landing page.
        </label>
        <br />

        <div className="container">
          <div className="row">
            <div className="col-2 text-right">
              <label htmlFor="wd-points"><h6>Points</h6></label>
            </div>
            <div className="col-10">
              <input id="wd-points" className="form-control" value={100} />
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-2">
              <label htmlFor="wd-group"><h6>Assignment Group</h6></label>
            </div>
            <div className="col-10">
              <select name="wd-group" className="form-control">
                <option value="0">ASSIGNMENTS             </option>
                <option value="1">PROJECTS                </option>
                <option value="2">EXAMS                   </option>
                <option value="3">QUIZZES                 </option>
              </select>
            </div>
          </div>
        
          <br />

          <div className="row">
            <div className="col-2">
              <label htmlFor="wd-display-grade-as"><h6>Display Grade as</h6></label>
            </div>
            <div className="col-10">
              <select name="wd-display-grade-as" className="form-control">
                <option value="0">Percentage</option>
                <option value="1">Raw Number</option>
              </select>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-2">
              <label htmlFor="wd-submission-type"><h6>Submission Type</h6></label>
            </div>
            <div className="col-10 border border-rounded-1 pt-4">
              <select name="wd-submission-type" className="form-control m-1">
                <option value="0">Online</option>
                <option value="1">In Person</option>
                <option value="2">Carrier Pigeon</option>
              </select>
        
              <br />
              
              <b>Online Entry Options</b> <br /> <br />
              <div className="checkbox">
                <input type="checkbox" id="wd-text-entry"/> <label htmlFor="wd-text-entry">Text Entry</label>       
              </div>

              <br />

              <div className="checkbox">
                <input type="checkbox" id="wd-website-url"/> <label htmlFor="wd-website-url">Website URL</label>
              </div>

              <br />

              <div className="checkbox">
                <input type="checkbox" id="wd-media-recordings"/> <label htmlFor="wd-media-recordings">Media Recordings</label>
              </div>

              <br />

              <div className="checkbox">
                <input type="checkbox" id="wd-student-annotation"/> <label htmlFor="wd-student-annotation">Student Annotation</label>
              </div>

              <br />

              <div className="checkbox">
                <input type="checkbox" id="wd-file-upload"/> <label htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </div>
          </div>

          <br />
          
          <div className="row">
            <div className="col-2">
              <label htmlFor="wd-submission-type"><h6>Assign</h6></label>
            </div>
            <div className="col-10 border border-rounded-1">
              <br />
              <strong>Assign to</strong><br />
              <input id="wd-assign-to" type="text" placeholder="Everyone" className="form-control"></input>
              
              <br />
              <label htmlFor="wd-due-date"><strong>Due</strong></label> 
              <input id="wd-due-date" type="date" className="form-control"/>

              <br />

              <div className="container">
                <div className="row">
                  <div className="col">
                    <label htmlFor="wd-available-from"><strong>Available from</strong></label>
                  </div>
                  <div className="col">
                    <label htmlFor="wd-available-until"><strong>Until</strong></label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input id="wd-available-from" className="form-control" type="date"/>
                  </div>
                  <div className="col">
                    <input id="wd-available-until" className="form-control" type="date"/>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>

        <hr />
        <div id="wd-editor-save" className="container pb-5">
          <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
            Save
          </button>        
          <button id="wd-editor-cancel" className="btn btn-lg me-1 btn-secondary float-end"
            type="button">
            Cancel
          </button>

        </div>
        <br />
      </div>
);}
