/**
 * Type definitions for the employee domain in the Redux store.
 * This file contains:
 * - Employee data structure and related types (Address, Role, Status)
 * - Redux action types and action interfaces
 * - State interface for the employee slice
 */

export interface Address {
  houseNo: string;
  address: string;
  line2: string;
  pincode: string;
}

export const EmployeeRole = {
  UI: "UI",
  UX: "UX",
  DEVELOPER: "DEVELOPER",
  HR: "HR",
} as const;

export type Role = (typeof EmployeeRole)[keyof typeof EmployeeRole];

export const EmployeeStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PROBATION: "PROBATION",
} as const;

export type status = (typeof EmployeeStatus)[keyof typeof EmployeeStatus];

export interface Employee {
  employeeId?: string;
  email?: string;
  employeeName?: string;
  age?: string;
  address?: Address;
  password?: string;
  Role?: String;
  joiningDate?: string;
  experience?: string;
  status?: string;
  departmentId?: number | string;
}

export const EMPLOYEE_ACTION_TYPES = {
  DELETE: "employee/DELETE",
  UPDATE: "employee/UPDATE",
  CREATE: "employee/CREATE",
} as const;

export type EmployeeActionTypes =
  (typeof EMPLOYEE_ACTION_TYPES)[keyof typeof EMPLOYEE_ACTION_TYPES];

export interface EmployeeState {
  employees: Employee[];
}

export interface DeleteEmployeeAction {
  type: typeof EMPLOYEE_ACTION_TYPES.DELETE;
  payload: string; // employee id
}

export interface UpdateEmployeeAction {
  type: typeof EMPLOYEE_ACTION_TYPES.UPDATE;
  payload: Employee;
}
export interface CreateEmployeeAction {
  type: typeof EMPLOYEE_ACTION_TYPES.CREATE;
  payload: Employee;
}

export type EmployeeAction =
  | DeleteEmployeeAction
  | UpdateEmployeeAction
  | CreateEmployeeAction;
