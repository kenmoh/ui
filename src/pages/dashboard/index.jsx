import { Box } from "@mui/material";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import {
  PeopleOutlineOutlined,
  ReorderOutlined,
  MonetizationOnOutlined,
} from "@mui/icons-material";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="DASHBOARD" subtitle="Admin Dashboard" />
      <Box>
        <Box
          mt="1rem"
          sx={{
            width: "20rem",
            backgroundColor: theme.palette.background.alt,
            padding: "1rem",
            borderRadius: "0.25rem",
          }}
        >
          <Box
            sx={{
              width: "3rem",
              height: "3rem",
              backgroundColor: theme.palette.primary[400],
              padding: "1rem",
              borderRadius: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PeopleOutlineOutlined />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
