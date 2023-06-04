import { useEffect } from 'react';
import { Box, useTheme } from "@mui/material";
import { getUsers } from '../../redux/features/authSlice';
import Header from '../../components/Header';
import { DataGrid } from "@mui/x-data-grid"
import { useDispatch, useSelector } from "react-redux";

const Customers = () => {
  const theme = useTheme();
  const { users, loading } = useSelector((state) => ({ ...state.auth }))

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [])
  // const { data, isLoading } = useGetCustomersQuery();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 0.5,
      // renderCell: (params) => {
      //   return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3")
      // }
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ]

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOMERS" subtitle="List of Customers" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            // borderRadius: "5rem"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none"
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          }
        }}
      >
        <DataGrid
          loading={loading || !users}
          getRowId={(row) => row._id}
          rows={users || []}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Customers