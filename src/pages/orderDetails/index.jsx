import { Box, Divider, Typography } from "@mui/material";
import Header from "../../components/Header";
import profileImage from "../../assets/profileImage.jpg";
import FlexBetween from "../../components/FlextBetween";

const OrderDetails = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="order details" subtitle="View order details" />

      <Box width="450px" m="auto">
        <Box
          component="img"
          alt="profile"
          src={profileImage}
          width="450px"
          height="350px"
          borderRadius="0.5rem"
          sx={{ objectFit: "cover", marginRight: "0.5rem" }}
        />
        <FlexBetween m="10px 0px">
          <Typography variant="h4">Sender</Typography>
          <Typography variant="h4"> Kenneth</Typography>
        </FlexBetween>
        <Divider orientation="column" />
        <FlexBetween m="20px 0px">
          <Typography variant="h4">Sender Phone Number</Typography>
          <Typography variant="h4">090990099889</Typography>
        </FlexBetween>
        <Divider />
        <FlexBetween m="20px 0px">
          <Typography variant="h4">Dispatch Company</Typography>
          <Typography variant="h4"> Kwik</Typography>
        </FlexBetween>
        <Divider />
        <FlexBetween m="20px 0px">
          <Typography variant="h4">Dispatch Phone Number</Typography>
          <Typography variant="h4"> 090998899088</Typography>
        </FlexBetween>
        <Divider />
        <FlexBetween m="20px 0px">
          <Typography variant="h4">From</Typography>
          <Typography variant="h4">Ajah</Typography>
        </FlexBetween>
        <Divider />
        <FlexBetween m="20px 0px">
          <Typography variant="h4">To</Typography>
          <Typography variant="h4">Victoria Island</Typography>
        </FlexBetween>
        <Divider />
        <FlexBetween m="20px 0px">
          <Typography variant="h4">Total Cost</Typography>
          <Typography variant="h4">NGN 3599</Typography>
        </FlexBetween>
        <Divider />
      </Box>
    </Box>
  );
};

export default OrderDetails;
