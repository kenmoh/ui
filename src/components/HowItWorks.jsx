import { Box, Stack, Typography, useTheme } from "@mui/material";

const HowItWorks = ({ number, description }) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      gap={2}
      mt={5}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width="2.5rem"
        height="2.5rem"
        borderRadius="50%"
        border="1px solid #6d9dc5"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={"2rem"}
      >
        <Typography variant="h2">{number}</Typography>
      </Box>

      <Stack width="100%" spacing={5}>
        <Box
          backgroundColor={theme.palette.primary.main}
          p="1rem"
          borderRadius={"0.5rem"}
        >
          <Typography variant="body2" color="white" sx={{ fontWeight: "bold" }}>
            {description}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default HowItWorks;
