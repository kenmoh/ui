import { Box, useTheme, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";

import {
  PeopleOutlineOutlined,
  ReorderOutlined,
  MonetizationOnOutlined,
} from "@mui/icons-material";
import CountCard from "../../components/CountCard";
import { useGetStatsQuery } from "../../state/statsApi";
import OverviewChart from "../../components/OverviewChart";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data } = useGetStatsQuery({
    refetchOnMountOrArgChange: true,
  });

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
        <CountCard
          icon={<PeopleOutlineOutlined />}
          title="Users"
          count={data?.users || 0}
        />
        <CountCard
          icon={<ReorderOutlined />}
          title="Orders"
          count={data?.total_orders || 0}
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.5rem"
        >
          <OverviewChart />
        </Box>
        <CountCard
          icon={<MonetizationOnOutlined />}
          title="Revenue"
          count={data?.total_revenue || 0}
        />
        <CountCard
          icon={<PeopleOutlineOutlined />}
          title="Pending Orders"
          count={data?.pending_orders || 0}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
