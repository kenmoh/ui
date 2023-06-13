import { Box, Container, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { toast } from "react-toastify";

import Header from "../../components/Header";
import { statusColors } from "../../theme";
import {
  useGetWithdrawalsQuery,
  useWithdrawalCompleteMutation,
} from "../../state/withdrawApi";
import { useState } from "react";
import FlexBetween from "../../components/FlextBetween";

const Withdrawal = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [rowId, setRowId] = useState("");
  const theme = useTheme();
  const { data, isLoading } = useGetWithdrawalsQuery();
  const [markPaymentComplete] = useWithdrawalCompleteMutation({
    refetchOnMountOrArgChange: true,
  });

  const handleRowClick = (params) => {
    params.row.id;
    setRowId(params.row.id);
    setShowIcon(!showIcon);
  };

  const handleDelete = async () => {
    const res = await markPaymentComplete(rowId);
    if (res.data) {
      toast.success("Payment Completed!");
    } else {
      toast.error(res.error.data.detail);
    }
  };

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
      field: "company_name",
      headerName: "Company Name",
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
    <Container maxWidth="xl">
      <Box m="1.5rem 0rem">
        <FlexBetween>
          <Header title="WITHDRAWALS" subtitle="Withdrawal History" />

          {showIcon && (
            <Tooltip placement="left" title="Payment Complete">
              <IconButton
                aria-label="delete"
                size="small"
                onClick={handleDelete}
              >
                <CheckCircleOutlineSharpIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          )}
        </FlexBetween>
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
            slots={{ toolbar: GridToolbar }}
            onRowClick={handleRowClick}
            disableRowSelectionOnClick
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Withdrawal;
