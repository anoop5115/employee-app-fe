import { useNavigate, useSearchParams } from "react-router-dom";
import { EmployeeList } from "../../components/employeelist/employeelist";
import { LayoutHeading } from "../../components/LayoutHeading/LayoutHeading";
import { useState } from "react";
import { useSelector } from "react-redux";
import { type RootState } from "../../store/store";
import type {
  Employee,
  EmployeeState,
} from "../../store/employee/employee.types";
import { useGetEmployeeListQuery } from "../../api-service/employees/employess.api";
export let employees: Employee[] = [];

export const ListEmployeePage = () => {
  const hook = useGetEmployeeListQuery();
  console.log(hook.currentData);
 
  const employ = useSelector((state: EmployeeState) => state);

  console.log("list", employ.employees);
  let employees = employ.employee.employees;

  const [getserchparams, setsearchParam] = useSearchParams("");
  console.log(getserchparams.get("filter"));
  let filteredList = hook.currentData;
  // let filteredList = getserchparams.get("filter")
  //   ? employees.filter(
  //       (e) =>
  //         e.status?.toLowerCase() ===
  //         getserchparams.get("filter")?.toLowerCase()
  //     )
  //   : employees;

  console.log("here is the filtered list", filteredList);

  return (
    <>
      <LayoutHeading text="Employee List" iscreate={true}></LayoutHeading>
      <div style={{}}>
        <EmployeeList
          name={"Employee Name"}
         id={"Employee Id"}
          dateOfJoining={"joiningDate"}
          role={"Role"}
          status={"status"}
          experience={"Experience"}
          height={60}
          backgroundcolor="#EAF9FF"
          isActionButton={false}
          isActionText={true}
        ></EmployeeList>

        <div
          style={{
            maxHeight: 900,
            overflowY: "auto",
          }}
        >
          {filteredList?.map((emp, index) =>
            emp ? (
              <EmployeeList
                key={index}
                {...emp}
                height={60}
                backgroundcolor={index % 2 === 0 ? "#f9f9f9" : "#ffffff"}
                isActionButton={true}
                isActionText={false}
                index={index}
              />
            ) : null
          )}
        </div>
      </div>
    </>
  );
};
