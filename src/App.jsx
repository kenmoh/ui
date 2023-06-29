import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard";
import Layout from "./pages/layout";
import Orders from "./pages/orders";
import Wallet from "./pages/Wallet";
import Withdrawal from "./pages/withdrawal";
import Users from "./pages/users";
import Profile from "./pages/profile";
import Monthly from "./pages/monthly";
import Daily from "./pages/daily";
import Yeaaly from "./pages/yearly";
import UserDetails from "./pages/userDetail";
import WithdrawalDetails from "./pages/withdrawalDetails";
import OrderDetails from "./pages/orderDetails";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import ForgotPassword from "./pages/forgotPassword";
import WalletDetails from "./pages/Wallet/walletDetails";
import Home from "./pages/home/index";

const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route element={<Layout />}>
              {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/wallets" element={<Wallet />} />
              <Route path="/wallets/:id" element={<WalletDetails />} />
              <Route path="/withdrawals" element={<Withdrawal />} />
              <Route path="/users" element={<Users />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/yearly" element={<Yeaaly />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/users/:id" element={<UserDetails />} />
              <Route path="/withdrawals/:id" element={<WithdrawalDetails />} />
              <Route path="/orders/:id" element={<OrderDetails />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
