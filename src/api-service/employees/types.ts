import type {
  Address,
  EmployeeRole,
  Role,
  status,
} from "../../store/employee/employee.types";

export type LoginResponse = { token: string };
export type LoginPayload = { email: string; password: string };
export type employeeResponse = {};
export type employeeDetails = {
  email: string;
  name: string;
  age: number;
  address:{
    address:string;
    line2:string;
    houseNo:string
    pincode:string

  }
  password: string;
  role: string;
  departmentId: number;
  employeeId: string;
  dateOfJoining: string;
  experience: number;
  status: string;
};
