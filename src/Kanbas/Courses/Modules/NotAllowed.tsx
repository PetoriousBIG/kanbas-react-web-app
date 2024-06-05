import { FaBan } from "react-icons/fa";
export default function NotAllowed() {
  return (
    <span className="me-1 position-relative">
      <FaBan style={{ top: "2px" }}
        className="text-black me-1 fs-5" />
    </span>
  );
}