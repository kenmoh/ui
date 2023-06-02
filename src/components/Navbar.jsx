import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import FlexxBetween from "../components/FlextBetween";
import { toggleMode } from "../state";
import profileImage from "../assets/profileImage.jpg";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { clearCredentials } from "../state/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const {
    userInfo: {
      data: { user },
    },
  } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(clearCredentials());
    // navigate("/signin");
  };
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexxBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexxBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search ..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexxBetween>
        </FlexxBetween>
        {/* RIGHT SIDE   */}
        <FlexxBetween>
          <Box
            component="img"
            alt="profile"
            src={profileImage}
            width="35px"
            height="35px"
            borderRadius="50%"
            sx={{ objectFit: "cover", marginRight: "0.5rem" }}
          />
          <Typography sx={{ marginRight: "3rem", color: "#aaa" }}>
            Hi {user.username.toUpperCase()}
          </Typography>
          <Button
            sx={{ marginRight: "0.5rem", color: "#aaa", fontWeight: "bold" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
          <IconButton onClick={() => dispatch(toggleMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexxBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
