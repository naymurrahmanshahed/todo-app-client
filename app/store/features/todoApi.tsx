import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    getAllTodo: builder.query({
      query: () => "api/todos",
    }),

    createTodo: builder.mutation({
      query: (data) => ({
        url: "api/todos",
        method: "POST",
        body: data,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (_id) => ({
        url: `api/todos/${_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllTodoQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
