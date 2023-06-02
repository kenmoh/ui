import { Box, Divider, Typography } from "@mui/material";
import Header from "../../components/Header";
import FlexBetween from "../../components/FlextBetween";
import { useParams } from "react-router-dom";
import { useGetOrderQuery } from "../../state/orderApi";

const OrderDetails = () => {
  const params = useParams();
  const { data } = useGetOrderQuery(params.id, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box mb="2.5rem">
        <Header title="order details" subtitle="View order details" />
      </Box>
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <Box
          component="img"
          alt="profile"
          src={data?.order_photo_url}
          width="450px"
          height="350px"
          borderRadius="0.5rem"
          sx={{ objectFit: "cover", marginRight: "0.5rem" }}
        />
        <Box>
          <FlexBetween m="10px 0px" gap="3rem">
            <Typography variant="h6">Item Name:</Typography>
            <Typography variant="h6">{data?.name}</Typography>
          </FlexBetween>
          <Divider orientation="column" />
          <FlexBetween m="10px 0px" gap="3rem">
            <Typography variant="h6">Sender:</Typography>
            <Typography variant="h6">{data?.vendor_username}</Typography>
          </FlexBetween>
          <Divider orientation="column" />
          <FlexBetween m="10px 0px" gap="3rem">
            <Typography variant="h6">Sender Phone Number:</Typography>
            <Typography variant="h6">{data?.owner_phone_number}</Typography>
          </FlexBetween>
          <Divider orientation="column" />
          <FlexBetween m="10px 0px" gap="3rem">
            <Typography variant="h6">Dispatch Comapny Name:</Typography>
            <Typography variant="h6">{data?.dispatch_company_name}</Typography>
          </FlexBetween>
          <Divider orientation="column" />
          <FlexBetween m="10px 0px" gap="3rem">
            <Typography variant="h6">Dispatch Company Phone:</Typography>
            <Typography variant="h6">
              {data?.dispatch_comapany_phone_number}
            </Typography>
          </FlexBetween>
          <Divider orientation="column" />
          <FlexBetween m="10px 0px" gap="3rem">
            <Typography variant="h6">Total Cost:</Typography>
            <Typography variant="h6">{data?.total_cost}</Typography>
          </FlexBetween>
          <Divider orientation="column" />
          <FlexBetween m="10px 0px" gap="3rem">
            <Typography variant="h6">Order Status:</Typography>
            <Typography variant="h6">{data?.order_status}</Typography>
          </FlexBetween>
          <Divider orientation="column" />
          <FlexBetween m="10px 0px" gap="3rem">
            <Typography variant="h6">Date:</Typography>
            <Typography variant="h6">{data?.updated_at}</Typography>
          </FlexBetween>
          <Divider orientation="column" />
        </Box>
      </Box>
      {/* <Typography variant="h6">{data.description}</Typography> */}
    </Box>
  );
};

export default OrderDetails;
