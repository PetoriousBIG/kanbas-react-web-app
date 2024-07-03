import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons(
  { assignmentId, deleteAssignment}:
  { assignmentId: string;
    deleteAssignment: (assignmentId: string) => void})
  {
  return (
    <div className="float-end d-flex flex-row align-items-center">
      <FaTrash className="text-danger fs-4 me-2" data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog"/>
      <GreenCheckmark/>
      <IoEllipsisVertical className="fs-4" />
      <div id="wd-delete-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Confirm delete</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal"/>
            </div>
            <div className="modal-body">
              <text>Are you sure you wish to delete this assignment?</text>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button onClick={() => deleteAssignment(assignmentId)} type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Delete Assignment
              </button>
            </div>
          </div>
        </div> 
      </div>
    </div>
);}

