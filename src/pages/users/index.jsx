import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useGetUsersQuery } from "../../state/userApi";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { data, isLoading } = useGetUsersQuery();

  const handleRowClick = (params) => {
    const { id } = params.row;
    navigate(`/users/${id}`);
  };

  const columns = [
    { field: "email", headerName: "Email", minWidth: 100, flex: 1 },
    {
      field: "username",
      headerName: "Username",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      minWidth: 70,
      flex: 0.5,
    },
    {
      field: "user_type",
      headerName: "User Type",
      minWidth: 50,
      flex: 0.5,
    },
    {
      field: "company_name",
      headerName: "Company Name",
      minWidth: 50,
      flex: 0.5,
    },
    {
      field: "company_reg_number",
      headerName: "Reg Number",
      minWidth: 50,
      flex: 0.5,
    },
    {
      field: "is_suspended",
      headerName: "Suspended",
      minWidth: 50,
      flex: 0.5,
      type: "boolean",
    },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="USERS" subtitle="List of users" />
      <Box
        mt="20px"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            fontSize: "16px",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            fontWeight: "bold",
            textTransform: "uppercase",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          rows={data || []}
          columns={columns}
          getRowId={(row) => row.id}
          slots={{ toolbar: GridToolbar }}
          onRowClick={handleRowClick}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Users;
