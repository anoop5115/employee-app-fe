import { MdDelete, MdOutlineEdit } from "react-icons/md";
import "./employeelist.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./employeelist.css";
import { useNavigate } from "react-router-dom";
import PopupModal from "../modal/modal";
import { useState } from "react";
import { useGetEmployeeListQuery } from "../../api-service/employees/employess.api";

export const EmployeeList = ({
  index,
  name,
  id,
  dateOfJoining,
  role,
  status,
  experience,
  height,
  backgroundcolor,
  isActionText,
  isActionButton,
}: {
  index?: number;
  name?: string;
  id?: string;
  dateOfJoining?: string;
  role?: string;
  status?: "PROBATION" | "ACTIVE" | "INACTIVE" | "Status" | String;
  experience?: string;
  height?: number;
  backgroundcolor?: string;
  isActionText?: boolean;
  isActionButton?: boolean;
}) => {
  console.log("thow sttus look like", status);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const statusColor = {
    probation: " #F5ECB8",
    active: " #D3F4BE",
    inactive: " #FFBFBF",
  };
  return (
    <div
      onClick={() => {
        navigate(`details/${id}`);
      }}
      className="Listhead"
      style={{
        height: height,
        backgroundColor: backgroundcolor,

        marginLeft: 300,
      }}
    >
      <ul>
        <li>{name}</li>
        <li>{id}</li>
        <li>{dateOfJoining}</li>
        <li>{role}</li>
        <li
          className="status-li"
          style={{ backgroundColor: statusColor[status?.toLowerCase()] }}
        >
          {status}
        </li>
        <li>{experience}</li>
        <li>
          {isActionButton && (
            <div>
              <button
                style={{ color: "red" }}
                onClick={(e) => {
                  setShowModal(true);

                  e.stopPropagation();
                }}
              >
                <MdDelete />
              </button>
              <button
                style={{ color: "blue" }}
                onClick={(e) => {
                  navigate(`edit/${id}`);
                  e.stopPropagation();
                }}
              >
                <MdOutlineEdit />
              </button>
              <PopupModal
                id={id}
                show={showModal}
                onClose={() => setShowModal(false)}
              />
              ;
            </div>
          )}
          {isActionText && <>Action</>}
        </li>
      </ul>
    </div>
  );
};
