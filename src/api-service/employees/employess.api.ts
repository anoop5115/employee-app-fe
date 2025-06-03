import { createApi } from "@reduxjs/toolkit/query";
import BaseApi from "../api";
import type { employeeDetails, employeeResponse } from "./types";

export const employeeApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<employeeResponse, void>({
      query: () => "/employee",
      providesTags: ["EMPLOYEES"],
    }),
    deleteEmployee: builder.mutation({
      query: ({ id }) => ({
        url: `/employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EMPLOYEES"],
    }),
    createEmployee: builder.mutation<employeeResponse, employeeDetails>({
      query: (payload) => ({
        url: "/employee",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["EMPLOYEES"],
    }),
    editEmployee: builder.mutation<
      void,
      { payload: employeeDetails; id: number }
    >({
      query: ({ payload, id }) => ({
        url: `/employee/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["EMPLOYEES"],
    }),
  }),
});
export const {
  useGetEmployeeListQuery,
  useCreateEmployeeMutation,
  useEditEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;
