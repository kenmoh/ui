import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";

import YealyChart from "../../components/YearlyChart";

const Yeaaly = () => {
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Yeaaly" subtitle="Year Sales" />
      <Box
        width={"100%"}
        backgroundColor={theme.palette.background.alt}
        marginTop={3}
        height={500}
      >
        <YealyChart />
      </Box>
    </Box>
  );
};

export default Yeaaly;
