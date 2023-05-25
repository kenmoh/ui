import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Header from "../../components/Header";
import TextInput from "../../components/TextPut";

const SignIn = () => {
  return (
    <Box m="1.5rem auto" width="30%" sx={{ flex: "column" }}>
      <Header title="Login" />
      <Box m="2rem auto">
        <TextInput label="Email" type="email" />
        <TextInput label="Password" type="password" />
        <Button variant="contained" disableElevation fullWidth size="large">
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
