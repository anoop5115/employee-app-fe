// import { useParams } from "react-router-dom";
// import { ClickButton } from "../Button/Button";
// import { Inputtextfield } from "../Inputtextfield/Inputtestfield";
// import { Labeltext } from "../label/Label";
// import { SelectField } from "../SelectField/SelectField";
// import { employees } from "../../Pages/listEmployeePage/listEmployeePage";
// import { useState } from "react";
// import store from "../../store/store";
// import { useDispatch, useSelector } from "react-redux";
// import type { EmployeeState } from "../../store/employee/employee.types";
// import { addEmployee } from "../../store/employee/employeeReducer";
// export const FormSection = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const employ = useSelector((state: EmployeeState) => state);
//   const user = employ.employee.employees?.find((e) => e.employeeId == id);
//   // console.log(user);
//   const [values, setValues] = useState({
// employeeName: user?.employeeName || "",
// joiningDate: user?.joiningDate || "",
// experience: user?.experience || "",
// role: user?.Role || "",
// age: user?.age || "",
// status: user?.status || "",
// password: user?.password,
// email: user?.email,
// employeeId: user?.employeeId,
// address: {
//   houseNo: user?.address.houseNo || "",
//   line1: user?.address.line1 || "",
//   line2: user?.address.line2 || "",
//   pincode: user?.address.pincode || "",
//     },
//   });
//   const updateAddressField = (field: string, value: string) => {
//     setValues((prev) => {
//       return { ...prev, address: { ...prev.address, [field]: value } };
//     });
//   };
//   const handleInputChange = (field: string, value: string) => {
//     setValues((prevValues) => ({
//       ...prevValues,
//       [field]: value,
//     }));
//   };
//   const save = () => {
//     console.log("see value", values);

//     const isEditMode = Boolean(id);
//     const action = {
//       // type: "employee/CREATE",
//       type: isEditMode ? "employee/UPDATE" : "employee/CREATE",
//       payload: values,
//     };
//     dispatch(addEmployee(values));

//     // employees.find((e, index) => {
//     //   if (e.employeeId == id) {
//     //     e.employeeName = values.employeeName;
//     //     e.experience = values.experience;
//     //     e.joiningDate = values.joiningDate;
//     //   }
//     // });
//     // console.log("gonna pri" + values);
//   };
//   return (
//     <>
//       <section className="form-section">
//         <form action="">
//           <div className="div1">
//             <div>
//               <Labeltext label="Employee Name"></Labeltext>

//               <Inputtextfield
//                 type="text"
//                 placeholder="Employee Name"
//                 value={values.employeeName}
//                 onInputChange={(val) => handleInputChange("employeeName", val)}
//               ></Inputtextfield>
//             </div>{" "}
//             <div>
//               <Labeltext label="Email"></Labeltext>

//               <Inputtextfield
//                 type="text"
//                 placeholder="Email"
//                 value={values.email}
//                 onInputChange={(val) => handleInputChange("email", val)}
//               ></Inputtextfield>
//             </div>
//             <div>
//               <Labeltext label="Employee Id"></Labeltext>

//               <Inputtextfield
//                 type="text"
//                 placeholder="Employee Id"
//                 value={values.employeeId}
//                 onInputChange={(val) => handleInputChange("employeeId", val)}
//               ></Inputtextfield>
//             </div>
//             <div>
//               <Labeltext label="password"></Labeltext>

//               <Inputtextfield
//                 type="password"
//                 placeholder="password"
//                 value={values.password}
//                 onInputChange={(val) => handleInputChange("password", val)}
//               ></Inputtextfield>
//             </div>
//             <div>
//               <Labeltext label="Age"></Labeltext>

//               <Inputtextfield
//                 type="number"
//                 placeholder="Age"
//                 value={values.age}
//                 onInputChange={(val) => handleInputChange("age", val)}
//               ></Inputtextfield>
//             </div>
//             <div>
//               <Labeltext label="Joining Date"></Labeltext>
//               <Inputtextfield
//                 type="date"
//                 value={values.joiningDate}
//                 placeholder="joining date"
//                 onInputChange={(val) => handleInputChange("joiningDate", val)}
//               ></Inputtextfield>
//             </div>
//             <div>
//               <Labeltext label="Experience(Yrs)"></Labeltext>

//               <Inputtextfield
//                 type="string"
//                 placeholder="Experience"
//                 value={values.experience}
//                 onInputChange={(val) => handleInputChange("experience", val)}
//               ></Inputtextfield>
//             </div>
//             <div className="div2">
//               <Labeltext label="Department"></Labeltext>
//               <SelectField
//                 options={["HR", "DEVELOPER", "DESIGNER"]}
//                 value={values.role}
//                 onInputChange={(val) => handleInputChange("role", val)}
//               ></SelectField>
//             </div>
//             <div>
//               <Labeltext label="Role"></Labeltext>
//               <SelectField
//                 value={values.role}
//                 options={["HR", "DEVELOPER", "DESIGNER"]}
//                 onInputChange={(val) => handleInputChange("role", val)}
//               ></SelectField>
//             </div>
//             <div className="div2">
//               <Labeltext label="Status"></Labeltext>

//               <SelectField
//                 options={["Active", "INACTIVE", "PROBATION"]}
//                 value={values.status}
//                 onInputChange={(val) => handleInputChange("status", val)}
//               ></SelectField>
//             </div>
//             <div className="div3">
//               <Labeltext label="Address"></Labeltext>

//               <Inputtextfield
//                 type="text"
//                 placeholder="Flat No./House No."
//                 value={values.address.houseNo}
//                 onInputChange={(val) => updateAddressField("houseNo", val)}
//               ></Inputtextfield>

//               <Inputtextfield
//                 type="text"
//                 placeholder="Address Line1"
//                 value={values.address.line1}
//                 onInputChange={(val) => updateAddressField("line1", val)}
//               ></Inputtextfield>

//               <Inputtextfield
//                 type="text"
//                 placeholder="Address Line2"
//                 value={values.address.line2}
//                 onInputChange={(val) => updateAddressField("line2", val)}
//               ></Inputtextfield>
//               <Inputtextfield
//                 type="text"
//                 placeholder="pincode"
//                 value={values.address.pincode}
//                 onInputChange={(val) => updateAddressField("pincode", val)}
//               ></Inputtextfield>
//             </div>
//           </div>

//           <div className="div2">
//             <div>
//               {/* {<ClickButton label={"create"} fun={save}></ClickButton>} */}
//               <ClickButton label={id ? "Edit" : "Create"} fun={save} />
//               <ClickButton label={"cancel"}></ClickButton>
//             </div>
//           </div>
//         </form>
//       </section>
//     </>
//   );
// };

import { useParams, useNavigate } from "react-router-dom";
import { ClickButton } from "../Button/Button";
import { Inputtextfield } from "../Inputtextfield/Inputtestfield";
import { Labeltext } from "../label/Label";
import { SelectField } from "../SelectField/SelectField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { EmployeeState } from "../../store/employee/employee.types";
import { addEmployee } from "../../store/employee/employeeReducer";
import {
  useCreateEmployeeMutation,
  useEditEmployeeMutation,
  useGetEmployeeListQuery,
} from "../../api-service/employees/employess.api";

export const FormSection = () => {
  const hook = useGetEmployeeListQuery();

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employ = useSelector((state: EmployeeState) => state);
  const user = hook.currentData.find((e) => e.id == id);
  console.log(user);

  console.log(user);
  const [createEmployee] = useCreateEmployeeMutation();
  const [EditEmployee] = useEditEmployeeMutation();

  const [values, setValues] = useState({
    // employeeName: "",
    // joiningDate: "",
    // experience: 0,
    // role: "",
    // age: "",
    // status: "",
    // password: "",
    // email: "",
    // employeeId: "",
    // department: "",
    // address: {
    //   houseNo: "",
    //   address: "",
    //   line2: "",
    //   pincode: "",
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
      role: values.role, // must be UI, UX, HR, or DEVELOPER
      departmentId: 1, // fixed key name
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
    } catch (e) {
      // console.error("Failed to create employee:", e);
      // alert("Failed to edit employee");
    }
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
      role: values.role, // must be UI, UX, HR, or DEVELOPER
      departmentId: 1, // fixed key name
      employeeId: values.employeeId,
      dateOfJoining: new Date(values.joiningDate).toISOString(), // ISO format
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
