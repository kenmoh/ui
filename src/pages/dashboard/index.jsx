import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import FlexBetween from "../../components/FlextBetween";

import {
  PeopleOutlineOutlined,
  ReorderOutlined,
  MonetizationOnOutlined,
} from "@mui/icons-material";
import CountCard from "../../components/CountCard";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="DASHBOARD" subtitle="Admin Dashboard" />
      <Box
        mt="1rem"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="1rem"
        gridAutoRows="6rem"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <CountCard icon={<PeopleOutlineOutlined />} title="Users" count={300} />
        <CountCard icon={<ReorderOutlined />} title="Orders" count={220} />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.5rem"
        >
          Chart Here
        </Box>
        <CountCard
          icon={<MonetizationOnOutlined />}
          title="Revenue"
          count={250}
        />
        <CountCard
          icon={<PeopleOutlineOutlined />}
          title="Pending Orders"
          count={200}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
