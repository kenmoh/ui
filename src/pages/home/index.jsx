import { Menu as MenuIcon } from "@mui/icons-material";
import FlexBetween from "../../components/FlextBetween";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  Stack,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import AppImage from "../../assets/3d_delivery.png";
import HowItWorks from "../../components/HowItWorks";

const Home = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const handleLogin = () => navigate("/signin");

  theme.typography.h1 = {
    fontSize: "2rem",
    "@media (min-width:600px)": {
      fontSize: "6rem",
      lineHeight: "7rem",
    },
  };
  theme.typography.body2 = {
    fontSize: "14px",
    "@media (min-width:600px)": {
      fontSize: "20px",
    },
  };

  return (
    <>
      <AppBar
        sx={{
          position: "static",
          background: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <FlexBetween>
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <MenuIcon />
            </IconButton>
          </FlexBetween>

          <FlexBetween>
            <Button
              sx={{ marginRight: "0.5rem", color: "#eee", fontWeight: "bold" }}
              onClick={console.log("Login")}
            >
              Contact Us
            </Button>
            <Button
              sx={{ marginRight: "0.5rem", color: "#eee", fontWeight: "bold" }}
              onClick={console.log("Login")}
            >
              About
            </Button>
            <Button
              sx={{
                marginRight: "0.5rem",
                color: "#eee",
                fontWeight: "bold",
                backgroundColor: "#6d9dc5",
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </FlexBetween>
        </Toolbar>
      </AppBar>

      <Box mx="2.5rem">
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h1"
                color="pink"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}
              >
                QuickPickup!
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}
              >
                Delivery
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  textAlign: "justify",
                }}
              >
                Made Easy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginTop: "1rem",
                  fontFamily: "Roboto",
                }}
              >
                <strong>QuickPickup </strong> brings convenience right to your
                doorstep, connecting vendors with a network of trusted
                dispatch(riders) companies ready to fulfill your everyday item
                delivery. From groceries to gadgets, meals to medications, and
                everything in between, we've got you covered.
              </Typography>

              <Box display="flex" flexWrap="wrap" gap={5}>
                <Button
                  variant="contained"
                  startIcon={<AndroidIcon />}
                  sx={{
                    padding: "1rem 3rem",
                    backgroundColor: "#6d9dc5",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    marginTop: "1.5rem",
                  }}
                >
                  Google Play
                </Button>

                <Button
                  variant="contained"
                  startIcon={<AppleIcon />}
                  sx={{
                    padding: "1rem 3rem",
                    backgroundColor: "#6d9dc5",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    marginTop: "1.5rem",
                  }}
                >
                  PlayStore
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              alt="profile"
              src={AppImage}
              sx={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        mx="auto"
        sx={{
          width: { xm: "100%", md: "50%" },
          padding: "1rem",
          borderRadius: "1rem",
        }}
      >
        <Typography
          variant="h1"
          color="white"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          How it works
        </Typography>
        <HowItWorks
          number="01"
          description="  Register as a vendor and start listing items for delivery or as
            dispatch(rider) company and start picking up items for delivery. You
            can only list item(s) or pickup item(s) when you verified your phone
            number and email upon registeration."
        />
        <HowItWorks
          number="02"
          description="  As a vendor, select the origin and destination of your item, calculate the distance. The distance is used to calculate the total cost of delivery. Your item is listed for delivery when you make payment"
        />
        <HowItWorks
          number="04"
          description="  As a rider, you can pickup item by simply clicking on the pickup button. Notify the vendor when the item is delivered by clicking on the delivered button."
        />
        <HowItWorks
          number="04"
          description="  As a vendr, when the delivery status of your item is marked as DELIVERED, ensure you confirm with the receipient before clicking on the RECEIVED BUTTON."
        />
        <HowItWorks
          number="05"
          description="  As a rider, funds are released to your wallet as soon a the order is marked RECEIVED by the vendor."
        />
      </Box>
    </>
  );
};

export default Home;
