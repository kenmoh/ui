import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { TrendingUpOutlined } from "@mui/icons-material";

export const menus = [
  { name: "User Management", icon: null },
  { name: "Add user", icon: <AddOutlinedIcon /> },
  { name: "Users", icon: <PeopleOutlinedIcon /> },
  { name: "Orders", icon: <ReorderOutlinedIcon /> },
  { name: "Transactions", icon: null },
  { name: "Withdrawals", icon: <MonetizationOnOutlinedIcon /> },
  { name: "Wallets", icon: <AccountBalanceWalletOutlinedIcon /> },
  { name: "Performance", icon: null },
  { name: "Statistics", icon: <TrendingUpOutlined /> },
  { name: "Settings", icon: <SettingsOutlinedIcon /> },
];

export const logoutBtn = { name: "Logout", icon: <LogoutOutlinedIcon /> };
