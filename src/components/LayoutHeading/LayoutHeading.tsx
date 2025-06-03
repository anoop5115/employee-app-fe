import { IoMdAddCircle } from "react-icons/io";
import { SelectField } from "../SelectField/SelectField";
import "./LayoutHeading.css";
import { FaCirclePlus } from "react-icons/fa6";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { useState } from "react";

export const LayoutHeading = ({
  text,
  iscreate,
  isedit,
}: {
  text: string;
  iscreate?: boolean;
  isedit?: boolean;
}) => {
  const { id } = useParams();
  console.log("his", id);
  const [searchParam, setSearchParam] = useSearchParams("");
  const [selectedValue, setSelectedValue] = useState("");
  const setFilter = (condition: string) => {
    if (condition == "All") {
      setSearchParam("");
      return;
    }
    const newSearchParam = new URLSearchParams(searchParam);
    newSearchParam.set("filter", condition);
    setSearchParam(newSearchParam);
  };
  const navigate = useNavigate();
  return (
    <section className="heading_section">
      <div className="head-main">
        <h2>{text}</h2>
        {iscreate && (
          <div className="heading-end">
            <p>filter by</p>

            <select
              style={{ borderRadius: 30, height: 60 }}
              value={selectedValue}
              onChange={(e) => {
                setSelectedValue(e.target.value);
                setFilter(e.target.value);
              }}
            >
              <option hidden>Status</option>
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Probation">Probation</option>
            </select>
            <div
              onClick={() => {
                navigate("create");
              }}
              style={{
                display: "flex",
                backgroundColor: "#EAF9FF",
                padding: 5,
                borderRadius: 50,
              }}
            >
              <div style={{ marginRight: "auto" }}>
                <FaCirclePlus size={50} color="#03AEEE" />
              </div>
              <p style={{ backgroundColor: "#EAF9FF", borderRadius: 10 }}>
                Create Employee
              </p>
            </div>
          </div>
        )}
        {isedit && (
          <div className="heading-end">
            <div
              onClick={() => {
                navigate(`/employee/edit/${id}`);
              }}
              style={{
                display: "flex",
                backgroundColor: "#EAF9FF",
                padding: 5,
                borderRadius: 50,
              }}
            >
              <div style={{ marginRight: "auto" }}>
                <MdOutlineEdit size={40} color="#03AEEE" />
              </div>
              <p style={{ backgroundColor: "#EAF9FF", borderRadius: 10 }}>
                Edit
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
