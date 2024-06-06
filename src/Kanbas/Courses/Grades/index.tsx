import GradesControls from "./GradesControls";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
export default function Grades() {
    return (
      <div id="wd-grades">
        <div className="container pt-2">
          <div className="row">
            <div className="col-12">
              <GradesControls/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="wd-student-names"><strong>Student Names</strong></label>
            </div>
            <div className="col">
              <label htmlFor="wd-assignment-names"><strong>Assignment Names</strong></label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="d-flex flex-row">
                <button className="border-0"> <CiSearch/> </button>
                <input id="wd-grades-student-names" className="form-select" type="text" placeholder="Search Students"></input>
              </div>
              <div>

              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-row">
                <button className="border-0"> <CiSearch/> </button>
                <input id="wd-grades-assignment-names" className="form-select" type="text" placeholder="Search Assignments"></input>
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-2">
            <button className="form-control btn btn-secondary"><CiFilter /> Apply Filters</button>
            </div>
          </div>

          <div id="wd-grades-table" className="pt-3">
            <table className="table table-striped border">
              <thead className="table-secondary">
                <tr className="bg-primary">
                  <th>Student Name</th>
                  <th className="text-center"><div>A1 SETUP</div><div>Out of 100</div></th>
                  <th className="text-center">A2 HTML Out of 100</th>
                  <th className="text-center">A3 CSS Out of 100</th>
                  <th className="text-center">A4 Bootstrap Out of 100</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><span className="text-danger">Jane Adams</span></td><td className="text-center">100%</td><td className="text-center">96.67%</td><td className="text-center">92.18%</td><td className="text-center">66.22%</td></tr>
                <tr><td><span className="text-danger">Christina Allen</span></td><td className="text-center">100%</td>
                    <td className="text-center"><input type="number" value="75"></input></td>
                    <td className="text-center">100%</td><td className="text-center">100%</td></tr>
                <tr><td><span className="text-danger">Samreen Ansari</span></td><td className="text-center">100%</td><td className="text-center">96.67%</td><td className="text-center">92.18%</td><td className="text-center">66.22%</td></tr>
                <tr><td><span className="text-danger">Han Bao</span></td><td className="text-center">100%</td><td className="text-center">96.67%</td><td className="text-center">88.03</td><td className="text-center">98.99%</td></tr>
                <tr><td><span className="text-danger">Mahi Sai Srinivas Bobbili</span></td><td className="text-center">100%</td><td className="text-center">96.67%</td><td className="text-center">98.37%</td><td className="text-center">100%</td></tr>
                <tr><td><span className="text-danger">Siran Cao</span></td><td className="text-center">100%</td><td className="text-center">100%</td><td className="text-center">100%</td><td className="text-center">100%</td></tr>
              </tbody>
            </table>
            </div>

        </div>
      </div>
);}
