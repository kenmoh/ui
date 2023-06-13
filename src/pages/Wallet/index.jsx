import { Box, Container, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useGetWalletsQuery } from "../../state/walletApi";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { data, isLoading } = useGetWalletsQuery();

  const handleRowClick = (params) => {
    const { id } = params.row;
    navigate(`/wallets/${id}`);
  };
  const columns = [
    { field: "id", headerName: "Wallet Id", minWidth: 100, flex: 1 },

    {
      field: "user",
      headerName: "Company Name",
      minWidth: 100,
      flex: 1,
      valueFormatter: (user) => user.value.company_name,
    },

    {
      field: "balance",
      headerName: "Balance (NGN)",
      minWidth: 100,
      flex: 1,
    },
  ];
  return (
    <Container maxWidth="xl">
      <Box m="1.5rem 0rem">
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
            width: "100%",
          }}
        >
          <DataGrid
            loading={isLoading || !data}
            rows={data || []}
            columns={columns}
            getRowId={(row) => row.id}
            onRowClick={handleRowClick}
            slots={{ toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Wallet;
