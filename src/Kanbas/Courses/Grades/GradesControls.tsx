import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
export default function GradesControls() {
    return (
      <div id="wd-grades-controls">
        <button id="wd-import-grades-btn" className="btn btn-lg btn-secondary me-1 float-end">
          <CiSettings />
        </button>
        <button id="wd-export-grades-btn" className="btn btn-lg btn-secondary me-1 float-end">
          <CiExport />
          &nbsp;Export
        </button>
        <button id="wd-import-grades-btn" className="btn btn-lg btn-secondary me-1 float-end">
          <CiImport />
          &nbsp;Import
        </button>
      </div>
);}