import { useSearchParams } from "react-router-dom";
import { EmployeeList } from "../../components/employeelist/employeelist";
import { LayoutHeading } from "../../components/LayoutHeading/LayoutHeading";

import type { Employee } from "../../store/employee/employee.types";
import { useGetEmployeeListQuery } from "../../api-service/employees/employess.api";
export let employees: Employee[] = [];

export const ListEmployeePage = () => {
  const hook = useGetEmployeeListQuery();

  const [getserchparams] = useSearchParams("");

  let filteredList = getserchparams.get("filter")
    ? hook.currentData.filter(
        (e) =>
          e.status?.toLowerCase() ===
          getserchparams.get("filter")?.toLowerCase()
      )
    : hook.currentData;

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
