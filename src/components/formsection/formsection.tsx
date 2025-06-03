import { useParams, useNavigate } from "react-router-dom";
import { ClickButton } from "../Button/Button";
import { Inputtextfield } from "../Inputtextfield/Inputtestfield";
import { Labeltext } from "../label/Label";
import { SelectField } from "../SelectField/SelectField";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  useCreateEmployeeMutation,
  useEditEmployeeMutation,
  useGetEmployeeListQuery,
} from "../../api-service/employees/employess.api";
import { useGetDepartemtListQuery } from "../../api-service/department/department.api";

export const FormSection = () => {
  const hook = useGetEmployeeListQuery();

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = hook.currentData?.find((e) => e.id == id);
  console.log("usera", user);
  const [createEmployee] = useCreateEmployeeMutation();
  const [EditEmployee] = useEditEmployeeMutation();
  const department = useGetDepartemtListQuery();
  console.log("department data", department.currentData);
  const data = department.currentData;
  const deptnames = data?.map((item) => item.deptname);
  const ids = data?.map((item) => item.id);
  console.log("depts", deptnames);
  console.log("ids", ids);
  const [values, setValues] = useState({
    employeeName: user?.name || "",
    joiningDate: user?.dateOfJoining || "",
    experience: user?.experience || "",
    role: user?.role || "",
    age: user?.age || "",
    status: user?.status || "",
    password: user?.password,
    email: user?.email,
    employeeId: user?.employeeId,
    address: {
      houseNo: user?.address?.houseNo || "",
      address: user?.address?.address || "",
      line2: user?.address?.line2 || "",
      pincode: user?.address?.pincode || "",
    },
    departmentId: user?.department.deptname || "",
  });

  const updateAddressField = (field: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value,
      },
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };
  const edit = async () => {
    const payload = {
      email: values.email,
      name: values.employeeName,
      age: Number(values.age),
      address: {
        houseNo: values.address.houseNo,
        address: values.address.address,
        line2: values.address.line2,
        pincode: values.address.pincode,
      },
      password: values.password,
      role: values.role,
      departmentId: ids[deptnames.indexOf(values?.departmentId)],
      employeeId: values.employeeId,
      dateOfJoining: new Date(values.joiningDate).toISOString(), // ISO format
      experience: Number(values.experience),
      status: values.status,
    };
    console.log(payload);
    try {
      await EditEmployee({ payload, id }).unwrap();
      alert("Employee Edited");
      navigate("/employee");
    } catch (e) {}
  };
  const save = async () => {
    const payload = {
      email: values.email,
      name: values.employeeName,
      age: Number(values.age),
      address: {
        houseNo: values.address.houseNo,
        address: values.address.address,
        line2: values.address.line2,
        pincode: values.address.pincode,
      },
      password: values.password,
      role: values.role,
      departmentId: ids[deptnames.indexOf(values?.departmentId)],
      employeeId: values.employeeId,
      dateOfJoining: new Date(values.joiningDate).toISOString(),
      experience: Number(values.experience),
      status: values.status,
    };
    console.log(payload);
    try {
      await createEmployee(payload).unwrap();
      alert("Employee Created Successfully");
      navigate("/employee-list");
    } catch (e) {
      console.error("Failed to create employee:", e.data.message);
      alert("Failed to create employee");
    }
  };

  return (
    <section className="form-section">
      <form>
        <div className="div1">
          <div>
            <Labeltext label="Employee Name" />
            <Inputtextfield
              type="text"
              placeholder="Employee Name"
              value={values.employeeName}
              onInputChange={(val) => handleInputChange("employeeName", val)}
            />
          </div>

          <div>
            <Labeltext label="Email" />
            <Inputtextfield
              type="email"
              placeholder="Email"
              value={values.email}
              onInputChange={(val) => handleInputChange("email", val)}
            />
          </div>

          <div>
            <Labeltext label="Employee Id" />
            <Inputtextfield
              type="text"
              placeholder="Employee Id"
              value={values.employeeId}
              onInputChange={(val) => handleInputChange("employeeId", val)}
            />
          </div>

          <div>
            <Labeltext label="Password" />
            <Inputtextfield
              type="password"
              placeholder="Password"
              value={values.password}
              onInputChange={(val) => handleInputChange("password", val)}
            />
          </div>

          <div>
            <Labeltext label="Age" />
            <Inputtextfield
              type="number"
              placeholder="Age"
              value={values.age}
              onInputChange={(val) => handleInputChange("age", val)}
            />
          </div>

          <div>
            <Labeltext label="Joining Date" />
            <Inputtextfield
              type="date"
              placeholder="Joining Date"
              value={values.joiningDate}
              onInputChange={(val) => handleInputChange("joiningDate", val)}
            />
          </div>

          <div>
            <Labeltext label="Experience (Yrs)" />
            <Inputtextfield
              type="text"
              placeholder="Experience"
              value={values.experience}
              onInputChange={(val) => handleInputChange("experience", val)}
            />
          </div>

          <div>
            <Labeltext label="Role" />
            <SelectField
              value={values.role}
              options={["UI", "UX", "DEVELOPER", "HR"]} // Valid roles
              onInputChange={(val) => handleInputChange("role", val)}
            />
          </div>

          <div>
            <Labeltext label="Status" />
            <SelectField
              value={values.status}
              options={["Active", "INACTIVE", "PROBATION"]}
              onInputChange={(val) => handleInputChange("status", val)}
            />
          </div>
          <div>
            <Labeltext label="department" />
            <SelectField
              value={values?.departmentId}
              options={deptnames ?? []}
              onInputChange={(val) => handleInputChange("departmentId", val)}
            />
          </div>
          <div></div>
          <div></div>
          <div className="div3">
            <Labeltext label="Address" />
            <Inputtextfield
              type="text"
              placeholder="Flat No./House No."
              value={values.address.houseNo}
              onInputChange={(val) => updateAddressField("houseNo", val)}
            />
            <Inputtextfield
              type="text"
              placeholder="Address Line 1"
              value={values.address.address}
              onInputChange={(val) => updateAddressField("address", val)}
            />
            <Inputtextfield
              type="text"
              placeholder="Address Line 2"
              value={values.address.line2}
              onInputChange={(val) => updateAddressField("line2", val)}
            />
            <Inputtextfield
              type="text"
              placeholder="Pincode"
              value={values.address.pincode}
              onInputChange={(val) => updateAddressField("pincode", val)}
            />
          </div>
        </div>

        <div className="div2">
          <ClickButton
            type="button"
            label={id ? "Edit" : "Create"}
            fun={id ? edit : save}
          />
          <ClickButton label="Cancel" fun={() => navigate("/employee")} />
        </div>
      </form>
    </section>
  );
};
