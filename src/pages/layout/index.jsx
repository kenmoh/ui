import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo ? (
    <Box width="100%" height="100%" display={isNonMobile ? "flex" : "block"}>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
      />
      <Box flexGrow={1}>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  ) : (
    <Navigate to="/signin" />
  );
};

export default Layout;
