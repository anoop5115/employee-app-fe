import { useParams } from "react-router-dom";
import { LayoutHeading } from "../components/LayoutHeading/LayoutHeading";

import "./Login/details.css";

import { useGetEmployeeByIdQuery } from "../api-service/employees/employess.api";
export const Details = () => {
  const statusColor = {
    probation: " #F5ECB8",
    active: " #D3F4BE",
    inactive: " #FFBFBF",
  };

  const { id } = useParams();
  const getEmployeeById = useGetEmployeeByIdQuery;
  const user = getEmployeeById(id).data;

  return (
    <div>
      <LayoutHeading
        isedit={true}
        text={`employee details of ${user?.name}`}
      ></LayoutHeading>
      <div className="mainbox">
        <div className="box1">
          <div className="individual">
            <h3>Employee Name</h3>
            <h5>{user?.name}</h5>
          </div>
          <div className="individual">
            <h3>Joining Date</h3>
            <h5>{user?.dateOfJoining}</h5>
          </div>
          <div className="individual">
            <h3>Experience</h3>
            <h5>{user?.experience}</h5>
          </div>
          <div className="individual">
            <h3>Role</h3>
            <h5>{user?.role}</h5>
          </div>
          <div className="individual innerindividual">
            <h3>Status</h3>
            <h5
              style={{
                backgroundColor: statusColor[user?.status?.toLowerCase()],
              }}
            >
              {user?.status}
            </h5>
          </div>
        </div>
        <div className="box2">
          <div className="individual">
            <h3>Address</h3>
            <h5>{user?.address?.houseNo}</h5>
            <h5>{user?.address?.address}</h5>
            <h5>{user?.address?.line2}</h5>
            <h5>{user?.address?.pincode}</h5>
          </div>
          <div className="individual">
            <h3>Employee ID</h3>
            <h5>{user?.id}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
