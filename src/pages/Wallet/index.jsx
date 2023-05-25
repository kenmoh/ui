import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useGetWalletsQuery } from "../../state/api";

const Wallet = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetWalletsQuery();
  const columns = [
    { field: "id", headerName: "User Id", minWidth: 100, flex: 1 },

    {
      field: "user",
      headerName: "Company Name",
      minWidth: 100,
      flex: 1,
      valueFormatter: (user) => user.value.company_name,
    },

    {
      field: "balance",
      headerName: "Balance",
      minWidth: 100,
      flex: 1,
    },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="WALLETS" subtitle="Dispatch user wallets" />
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
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default Wallet;