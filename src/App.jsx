import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Layout from "./pages/layout";
import Orders from "./pages/orders";
import Wallet from "./pages/Wallet";
import Withdrawal from "./pages/withdrawal";
import Users from "./pages/users";
import AddUser from "./pages/addUser";
import Monthly from "./pages/monthly";
import Daily from "./pages/daily";
import Overview from "./pages/overview";
import UserDetails from "./pages/userDetail";
import WithdrawalDetails from "./pages/withdrawalDetails";
import OrderDetails from "./pages/orderDetails";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import ForgotPassword from "./pages/forgotPassword";

const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/wallets" element={<Wallet />} />
              <Route path="/withdrawals" element={<Withdrawal />} />
              <Route path="/users" element={<Users />} />
              <Route path="/new" element={<AddUser />} />
              <Route path="/overview" element={<Overview />} />
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
