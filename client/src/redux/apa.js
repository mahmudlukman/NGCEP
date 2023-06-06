import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apa = createApi({
  baseQuery: fetchBaseQuery({baseUrl: "https://ngcep.onrender.com"}),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers", "Transactions", "Geography", "Sales", "Admins", "Performance", "Dashboard"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"]
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"]
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"]
    }),
    getTransactions: build.query({
      query: ({page, pageSize, sort, search}) => ({
        url: "users/transactions",
        method: "Get",
        params: {page, pageSize, sort, search}
      }),
      providesTags: ["Transactions"]
    }),
    getGeography: build.query({
      query: () => "/geography",
      providesTags: ["Geography"]
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"]
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"]
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"]
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"]
    }),
  })
})

export const {useGetUserQuery, useGetProductsQuery, useGetCustomersQuery, useGetTransactionsQuery, useGetGeographyQuery, useGetSalesQuery, useGetAdminsQuery, useGetUserPerformanceQuery, useGetDashboardQuery} = apa;