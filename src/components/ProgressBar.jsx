import { Box, CircularProgress } from "@mui/material";

const ProgressBar = () => {
  return (
    <Box
      m="auto"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default ProgressBar;
