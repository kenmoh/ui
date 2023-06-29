import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import OverviewChart from "../../components/OverviewChart";

const Daily = () => {
  const theme = useTheme();
  return (
    <>
      <Box m="1.5rem 2.5rem">
        <Header title="daily" subtitle="Daily Analysis" />
        <Box
          width={"100%"}
          backgroundColor={theme.palette.background.alt}
          marginTop={3}
          height={500}
        >
          <OverviewChart />
        </Box>
      </Box>
    </>
  );
};

export default Daily;
