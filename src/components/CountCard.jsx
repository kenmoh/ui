import { Box, Typography, useTheme } from "@mui/material";

const CountCard = ({ title, icon, count }) => {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      p="1.5rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
    >
      {icon}
      <Box
        display="flex"
        alignItems="baseline"
        mt="0.5rem"
        justifyContent="space-between"
      >
        <Typography variant="h6">{title}</Typography>
        <Typography
          variant="h3"
          fontWeight="600"
          sx={{ color: theme.palette.secondary[200] }}
        >
          {count}
        </Typography>
      </Box>
    </Box>
  );
};

export default CountCard;
