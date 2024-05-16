export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
        <br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description">
          The assignment is available online
          Submit a link to the landing page of
          your Web application running on Netlify.
          The landing page should should include
          the following: Your full name and section
          Links to each of the lab assignments
          to all relevant source code repositories
          The Kanbas application should include a
          link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
        
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select name="wd-group">
              <option value="0">ASSIGNMENTS</option>
              <option value="1">PROJECTS</option>
              <option value="2">EXAMS</option>
              <option value="3">QUIZZES</option>
            </select>
          </td>
        </tr>

        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select name="wd-display-grade-as">
              <option value="0">Percentage</option>
              <option value="1">Raw Number</option>
            </select>
          </td>
        </tr>

        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select name="wd-submission-type">
              <option value="0">Online</option>
              <option value="1">In Person</option>
              <option value="2">Carrier Pigeon</option>
            </select>
          </td>
        </tr>

        <br />

        <tr>
          <td></td>
          <td align="justify" valign="top">
            Online Entry Options
          </td>
        </tr>

        <tr>
          <td></td>
          <td align="justify" valign="top">
            <input type="checkbox" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>
          </td>
        </tr>

        <tr>
          <td></td>
          <td align="justify" valign="top">
            <input type="checkbox" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>
          </td>
        </tr>

        <tr>
          <td></td>
          <td align="justify" valign="top">
            <input type="checkbox" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
          </td>
        </tr>

        <tr>
          <td></td>
          <td align="justify" valign="top">
            <input type="checkbox" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
          </td>
        </tr>
    
        <tr>
          <td></td>
          <td align="justify" valign="top">
            <input type="checkbox" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label><br/>
          </td>
        </tr>

        <br />

        <tr>
          <td align="right" valign="top"><label htmlFor="wd-assign-to">Assign</label></td>
          <td align="justify" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label><br/>
          </td>
        </tr>

        <tr>
          <td></td>
          <td align="justify" valign="top">
            <input id="wd-assign-to" type="text" placeholder="Everyone"></input><br/>
          </td>
        </tr>

        <br/>

        <tr>
          <td></td>
          <td align="justify" valign="top">
            <label htmlFor="wd-due-date">Due</label><br/>
          </td>
        </tr>

        <tr>
          <td></td>
          <td align="justify" valign="top">
            <input id="wd-due-date" type="date"/><br/>
          </td>
        </tr>

        <br/>
        
        <tr>
          <td></td>
          <td align="justify" valign="top">
            {/*Needed to align the until label to match the screenshot for the assignment, so I used &nbsp
               Learned this trick from https://blog.hubspot.com/website/html-space */}
            <label htmlFor="wd-available-from">Available from</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="wd-available-until">Until</label>
          </td>
        </tr>

        <tr>
          <td></td>
          <td align="justify" valign="top">
            <input id="wd-available-from" type="date"/> <input id="wd-available-until" type="date"/>
          </td>
        </tr>

      </table>
    </div>
);}
