// import type { Action } from "redux";

// import { act } from "react";

// import {
//   type EmployeeAction,
//   type EmployeeActionTypes,
//   type EmployeeState,
//   EMPLOYEE_ACTION_TYPES,
// } from "./employee.types";
// import { employees } from "../../Pages/listEmployeePage/listEmployeePage";

// const initialState: EmployeeState = {
//   employees: [],
// };
// const employeeReducer = (
//   state: EmployeeState = initialState,
//   action: EmployeeAction
// ) => {
//   switch (action.type) {
//     case EMPLOYEE_ACTION_TYPES.DELETE:
//       return {};
//     case EMPLOYEE_ACTION_TYPES.UPDATE:
//       return {
//         ...state,
//         employees: state.employees.map((emp) =>
//           emp.employeeId === action.payload.employeeId
//             ? { ...emp, ...action.payload }
//             : emp
//         ),
//       };
//     case EMPLOYEE_ACTION_TYPES.CREATE:
//       console.log({
//         ...state,
//         employees: [...state.employees, action.payload],
//       });
//       console.log("values" + action.payload.employeeName);

//       return {
//         ...state,
//         employees: [...state.employees, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export default employeeReducer;
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Employee, EmployeeState } from "./employee.types";

const initialState: EmployeeState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      console.log("payload***", action.payload);
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
