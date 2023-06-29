import { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  PersonAddAlt1Outlined,
  PieChartOutlined,
  AccountBalanceWalletOutlined,
  PeopleOutlineOutlined,
  ReorderOutlined,
  MonetizationOnOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlextBetween";

const navItems = [
  {
    name: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    name: "User Manager",
    icon: null,
  },

  {
    name: "Users",
    icon: <PeopleOutlineOutlined />,
  },
  {
    name: "Profile",
    icon: <PersonAddAlt1Outlined />,
  },

  {
    name: "Order Manager",
    icon: null,
  },
  {
    name: "Orders",
    icon: <ReorderOutlined />,
  },

  {
    name: "Transactions",
    icon: null,
  },
  {
    name: "Wallets",
    icon: <AccountBalanceWalletOutlined />,
  },
  {
    name: "Withdrawals",
    icon: <MonetizationOnOutlined />,
  },
  {
    name: "Analytics",
    icon: null,
  },
  {
    name: "Daily",
    icon: <TodayOutlined />,
  },
  {
    name: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    name: "Yearly",
    icon: <PieChartOutlined />,
  },
];

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    QuickPick
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ name, icon }) => {
                if (!icon) {
                  return (
                    <Typography
                      key={name}
                      sx={{ m: "2.25rem 0 1rem 3rem", fontWeight: "bold" }}
                    >
                      {name}
                    </Typography>
                  );
                }

                return (
                  <ListItem key={name} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${name}`.toLowerCase());
                        setActive(`${name}`.toLowerCase());
                      }}
                      sx={{
                        backgroundColor:
                          active === `${name}`.toLowerCase()
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === `${name}`.toLowerCase()
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === `${name}`.toLowerCase()
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={name} sx={{ ml: "-1.8rem" }} />
                      {active === `${name}`.toLowerCase() && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
