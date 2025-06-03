import type { Employee } from "../../store/employee/employee.types";
import BaseApi from "../api";

export const departmentApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDepartemtList: builder.query<Employee, void>({
      query: () => "/department",

      providesTags: ["DEPARTMENTS"],
    }),
  }),
});
export const { useGetDepartemtListQuery } = departmentApi;
