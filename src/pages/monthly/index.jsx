import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import MonthlyChart from "../../components/MonthlyChart";

const Monthly = () => {
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Monthly" subtitle="Monthly Analysis" />
      <Box
        width={"100%"}
        backgroundColor={theme.palette.background.alt}
        marginTop={3}
        height={500}
      >
        <MonthlyChart />
      </Box>
    </Box>
  );
};

export default Monthly;
