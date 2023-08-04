import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getAllTodo: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetAllTodoQuery } = todoApi;
