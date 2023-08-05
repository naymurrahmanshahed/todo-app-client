import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
// import { RootState } from "../store";

export const todoApi = createApi({
  reducerPath: "todoApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),

  tagTypes: ["todo", "user"],
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
    createUser: builder.mutation({
      query: (data) => ({
        url: "api/user/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "api/user/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllTodoQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
  useCreateUserMutation,
  useLoginUserMutation,
} = todoApi;
