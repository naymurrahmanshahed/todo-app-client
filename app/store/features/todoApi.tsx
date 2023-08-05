import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getAllTodo: builder.query({
      query: () => "api/todos",
      providesTags: ["todo"],
    }),

    createTodo: builder.mutation({
      query: (data) => ({
        url: "api/todos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (_id) => ({
        url: `api/todos/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (id) => ({
        url: `api/todos/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetAllTodoQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todoApi;
