import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";

import { statusColors } from "../../theme";
import { useNavigate } from "react-router-dom";
import { useGetOrdersQuery } from "../../state/orderApi";

const Orders = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { data, isLoading } = useGetOrdersQuery();

  const handleRowClick = (params) => {
    const { id } = params.row;
    navigate(`/orders/${id}`);
  };

  const columns = [
    { field: "id", headerName: "ID", minWidth: 100, flex: 1 },
    { field: "name", headerName: "Order Name", minWidth: 100, flex: 1 },
    { field: "origin", headerName: "Origin", minWidth: 100, flex: 1 },
    { field: "destination", headerName: "Destination", minWidth: 100, flex: 1 },
    { field: "distance", headerName: "Distance(km)" },
    { field: "total_cost", headerName: "Total Cost" },
    { field: "deduction", headerName: "Deduction" },
    { field: "amount_payable", headerName: "Payable" },
    {
      field: "order_status",
      headerName: "Order Status",
      minWidth: 100,
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="inherit"
          sx={{
            backgroundColor:
              params.value === "Picked up"
                ? statusColors.pickedUp
                : params.value === "Received"
                ? statusColors.success
                : statusColors.pending,
            padding: "2px 20px",
            borderRadius: "50px",
            textTransform: "capitalize",
            color:
              params.value === "Picked up"
                ? statusColors.pickedUpTextConlor
                : params.value === "Received"
                ? statusColors.successTextConlor
                : statusColors.pendingTextConlor,
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "payment_status",
      headerName: "Payment Status",
      minWidth: 100,
      flex: 1,
      renderCell: (params) => (
        <Typography
          variant="inherit"
          sx={{
            backgroundColor:
              params.value === "pending"
                ? statusColors.pending
                : params.value === "paid"
                ? statusColors.success
                : statusColors.danger,
            padding: "2px 20px",
            borderRadius: "50px",
            textTransform: "capitalize",
            color:
              params.value === "pending"
                ? statusColors.pendingTextConlor
                : params.value === "paid"
                ? statusColors.successTextConlor
                : statusColors.danger,
          }}
        >
          {params.value}
        </Typography>
      ),
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Orders" subtitle="All orders" />
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
          rows={data ? data.orders : []}
          columns={columns}
          getRowId={(row) => row.id}
          onRowClick={handleRowClick}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Orders;
