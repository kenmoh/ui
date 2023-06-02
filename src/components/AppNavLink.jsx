import { Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const AppNavLink = ({ route, label, text }) => {
  return (
    <Box mt="1rem" sx={{ display: "flex", gap: "5px" }}>
      <Typography>{text}?</Typography>
      <Link to={route} style={{ color: "white", fontWeight: "bolder" }}>
        {label}
      </Link>
    </Box>
  );
};

export default AppNavLink;
