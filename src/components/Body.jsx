import { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import FlexBetween from "../components/FlextBetween";
import AppImage from "../../src/assets/delivery.png";

const Body = () => {
  return (
    <Box m="1.5rem 15rem">
      <Box>
        <FlexBetween>
          <Box>
            <Typography
              variant="h1"
              color="pink"
              sx={{
                fontWeight: "bold",
                fontSize: "4.5rem",
              }}
            >
              Fastest
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: "4.5rem",
              }}
            >
              Delivery &
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: "4.5rem",
              }}
            >
              Easy Pickup
            </Typography>
            <Typography>
              We connect dispatch riders and business owners We connect dispatch
              riders and business owners We connect dispatch riders and business
              owners
            </Typography>
          </Box>
          <Box
            component="img"
            alt="profile"
            src={AppImage}
            width="680px"
            sx={{ objectFit: "cover", marginRight: "-5rem" }}
          />
        </FlexBetween>
      </Box>
      <Box>Bottom</Box>
    </Box>
  );
};

export default Body;
