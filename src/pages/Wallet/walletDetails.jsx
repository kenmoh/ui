import { Box, Typography, useTheme, Container, Divider } from "@mui/material";
import Header from "../../components/Header";
import { useGetWalletQuery } from "../../state/walletApi";
import { useParams } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { statusColors } from "../../theme";

const WalletDetails = () => {
  const theme = useTheme();
  const params = useParams();
  const { data, isLoading } = useGetWalletQuery(params.id, {
    refetchOnMountOrArgChange: true,
  });

  const columns = [
    { field: "id", headerName: "Withdrawal Id", minWidth: 100, flex: 1 },

    {
      field: "withdrawal_amount",
      headerName: "Withdrawal Amount",
      minWidth: 100,
      flex: 1,
    },

    {
      field: "withdrawal_status",
      headerName: "Withdrawal Status",
      minWidth: 100,
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="inherit"
          sx={{
            backgroundColor:
              params.value === "completed"
                ? statusColors.success
                : statusColors.pending,

            padding: "2px 20px",
            borderRadius: "50px",
            textTransform: "capitalize",
            color:
              params.value === "completed"
                ? statusColors.successTextConlor
                : statusColors.pendingTextConlor,
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "created_at",
      headerName: "Date",
      minWidth: 100,
      flex: 1,
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box m="1.5rem 0rem">
        <Header title="Wallet Details" subtitle="Dispatch Walle Details" />
        <Box
          marginTop={2}
          sx={{
            width: "30rem",
            backgroundColor: theme.palette.background.alt,
            padding: "1rem",
            borderRadius: "0.25rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              gap: "5px",
              marginBottom: "5px",
            }}
          >
            <Typography variant="h4">NGN </Typography>
            <Typography fontWeight="bold" variant="h1">
              {data?.balance}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
            <Typography>{data?.user.company_name.toUpperCase()}</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography mt={1}>
              {data?.user.company_reg_number.toUpperCase()}
            </Typography>
          </Box>
        </Box>
        <Box
          mt={2}
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
            rows={data?.withdrawals || []}
            columns={columns}
            getRowId={(row) => row.id}
            slots={{ toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default WalletDetails;
