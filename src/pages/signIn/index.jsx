import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ProgressBar from "../../components/ProgressBar";
import TextInput from "../../components/TextPut";
import { useLoginUserMutation } from "../../state/authAPI";
import Header from "../../components/Header";
import { setCredentials } from "../../state/authSlice";
import AppNavLink from "../../components/AppNavLink";

const schema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const handleLogin = async (user) => {
    const data = new FormData();
    data.append("username", user.email.trim());
    data.append("password", user.password.trim());
    const res = await loginUser(data);
    if (!res.error) {
      dispatch(setCredentials({ ...res }));
    }
    navigate("/");
  };

  useEffect(() => {
    if (userInfo && !error) {
      navigate("/");
    }
    if (error) {
      toast.error(error.data.detail);
    }
  }, [navigate, userInfo, error]);

  return (
    <Box
      height="90vh"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      {isLoading ? (
        <ProgressBar />
      ) : (
        <Box m="auto" width="22.5%">
          <Header title="Login" />
          <form onSubmit={handleSubmit(handleLogin)}>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Email"
                  onChange={onChange}
                  value={value || ""}
                  error={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Password"
                  type="password"
                  onChange={onChange}
                  value={value || ""}
                  error={errors.password?.message}
                />
              )}
            />
            <Box mt="1rem">
              <Button
                variant="contained"
                disableElevation
                fullWidth
                size="large"
                type="submit"
                sx={{
                  padding: "12px 0px",
                  backgroundColor: "#6d9dc5",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  marginTop: "1.5rem",
                }}
              >
                Login
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="end">
            <AppNavLink route="/forgot-password" label="Recover Password" />
          </Box>
          <AppNavLink
            route="/signup"
            label="Register"
            text={`Don't have an account ?`}
          />
        </Box>
      )}
    </Box>
  );
};

export default SignIn;
