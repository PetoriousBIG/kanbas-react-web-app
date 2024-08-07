import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useParams, Link, Route, Routes } from "react-router-dom";
import AssignmentEditor from "./Editor";
export default function AssignmentsControls() 
  {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <Link to={`new`}>
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
      </Link>
      <button id="wd-publish-all-btn" className="btn btn-lg me-1 btn-secondary float-end"
        type="button">
        <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
        Group
      </button>
      <span style={{position: "absolute", left: "17.5%", top: "13%", fontSize: "20px"}}>
        <CiSearch />
      </span>

      <input id="wd-assignment-search" placeholder="&nbsp;&nbsp;&nbsp;Search..." className="form-control-lg rounded-1 border border-1"></input>

    </div>
  );
}