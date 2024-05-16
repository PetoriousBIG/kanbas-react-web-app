import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { Routes, Route, Navigate } from "react-router";
export default function Kanbas() {
    return (
      <div id="wd-kanbas">
        <table width="100%">
          <tr>
            <td valign="top">
              <KanbasNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/:id/*" element={<Courses />} />
              </Routes>
            </td>
          </tr>
        </table>
      </div>
  );}
  