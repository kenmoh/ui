import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetWithdrawQuery } from "../../state/api";
import Header from "../../components/Header";
import { statusColors } from "../../theme";

const Withdrawal = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetWithdrawQuery();

  const columns = [
    {
      field: "id",
      headerName: "Withrawal id",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "withdrawal_amount",
      headerName: "Withrawal Amount (ngn)",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "withdrawal_status",
      headerName: "Status",
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
    <Box m="1.5rem 2.5rem">
      <Header title="WITHDRAWALS" subtitle="Withdrawal History" />
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

export default Withdrawal;
