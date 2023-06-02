import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import profileImage from "../../assets/profileImage.jpg";
import FlexBetween from "../../components/FlextBetween";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetUserQuery, useSuspendUserMutation } from "../../state/userApi";
import { statusColors } from "../../theme";

const UserDetails = () => {
  const params = useParams();
  const { data } = useGetUserQuery(params.id, {
    refetchOnMountOrArgChange: true,
  });

  const [suspendUser] = useSuspendUserMutation({
    refetchOnMountOrArgChange: true,
  });
  const theme = useTheme();
  const handleSuspension = async () => {
    const res = await suspendUser(params.id);
    if (res.data.is_suspended) {
      toast.warning(
        `${
          res.data.username
            ? res.data.username.toUpperCase()
            : res.data.company_name.toUpperCase()
        } account deactivated!`
      );
    } else if (!res.data.is_suspended) {
      toast.success(
        `${
          res.data.username
            ? res.data.username.toUpperCase()
            : res.data.company_name.toUpperCase()
        } account activated!`
      );
    } else {
      toast.error(res.data.error.detail);
    }
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box mb="2.5rem">
        <Header title="User Details" />
      </Box>
      <Box
        sx={{
          width: "30rem",
          backgroundColor: theme.palette.background.alt,
          padding: "1.5rem",
          borderRadius: ".5rem",
        }}
        mt="4rem"
      >
        <Box
          mt="-6rem"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            alt="profile"
            src={profileImage}
            borderRadius="0.5rem"
            sx={{
              objectFit: "cover",
              width: "10rem",
              height: "10rem",
              borderRadius: "20rem",
            }}
          />
        </Box>

        <Box>
          {data?.username && (
            <>
              <FlexBetween m="10px 0px" gap="3rem">
                <Typography variant="h6">Username</Typography>
                <Typography variant="h6">{data.username}</Typography>
              </FlexBetween>
              <Divider orientation="column" />
            </>
          )}
          <FlexBetween m="10px 0px" gap="3rem">
            <Typography variant="h6">Email</Typography>
            <Typography variant="h6">{data?.email}</Typography>
          </FlexBetween>
          <Divider orientation="column" />
          <FlexBetween m="10px 0px" gap="3rem">
            <Typography variant="h6">Phone Number</Typography>
            <Typography variant="h6">{data?.phone_number}</Typography>
          </FlexBetween>
          <Divider orientation="column" />
          {data?.company_name && (
            <>
              <FlexBetween m="10px 0px" gap="3rem">
                <Typography variant="h6">Company Name</Typography>
                <Typography variant="h6">{data?.company_name}</Typography>
              </FlexBetween>
              <Divider orientation="column" />
            </>
          )}
          {data?.first_name && data?.last_name && (
            <>
              <FlexBetween m="10px 0px" gap="3rem">
                <Typography variant="h6">Full Name</Typography>
                <Typography variant="h6">
                  {data.first_name} {data.last_name}
                </Typography>
              </FlexBetween>
              <Divider orientation="column" />
            </>
          )}
          {data?.account_number && (
            <>
              <FlexBetween m="10px 0px" gap="3rem">
                <Typography variant="h6">Accounr Number</Typography>
                <Typography variant="h6">{data.account_number}</Typography>
              </FlexBetween>
              <Divider orientation="column" />
            </>
          )}
          {data?.bank_name && (
            <>
              <FlexBetween m="10px 0px" gap="3rem">
                <Typography variant="h6">Bank Name</Typography>
                <Typography variant="h6">{data.bank_name}</Typography>
              </FlexBetween>
              <Divider orientation="column" />
            </>
          )}
          {data?.account_type && (
            <>
              <FlexBetween m="10px 0px" gap="3rem">
                <Typography variant="h6">Account Type</Typography>
                <Typography variant="h6">Savings</Typography>
              </FlexBetween>
              <Divider orientation="column" />
            </>
          )}
          <FlexBetween m="10px 0px" gap="3rem">
            <Typography variant="h6">Role</Typography>
            <Typography variant="h6">{data?.user_type}</Typography>
          </FlexBetween>
          <Divider orientation="column" />
          <FlexBetween m="10px 0px" gap="3rem">
            <Typography variant="h6">Location</Typography>
            <Typography variant="h6">{data?.location}</Typography>
          </FlexBetween>
          <Divider orientation="column" />
          <FlexBetween m="10px 0px" gap="3rem">
            {data?.is_suspended ? (
              <>
                <Typography variant="h6">Suspended</Typography>
                <Typography
                  variant="h6"
                  sx={{
                    backgroundColor: statusColors.pending,
                    color: statusColors.pendingTextConlor,
                    width: "3rem",
                    textAlign: "center",
                    borderRadius: "5rem",
                  }}
                >
                  Yes
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="h6">Suspended</Typography>
                <Typography
                  variant="h6"
                  sx={{
                    backgroundColor: statusColors.success,
                    color: statusColors.successTextConlor,
                    width: "3rem",
                    textAlign: "center",
                    borderRadius: "5rem",
                  }}
                >
                  No
                </Typography>
              </>
            )}
          </FlexBetween>
          <Divider orientation="column" />
          <Box mt="1rem">
            <Button
              variant="outlined"
              disableElevation
              fullWidth
              size="large"
              type="submit"
              color="error"
              onClick={handleSuspension}
            >
              Suspend User
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDetails;
