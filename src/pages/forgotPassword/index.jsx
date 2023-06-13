import { Box, Button } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import Header from "../../components/Header";
import TextInput from "../../components/TextPut";
import ProgressBar from "../../components/ProgressBar";
import { useRecoverPassordMutation } from "../../state/authAPI";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const schema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [recoverPassword, { isLoading, error, isSuccess }] =
    useRecoverPassordMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = async (user) => {
    const data = new FormData();
    data.append("email", user.email.trim());
    const res = await recoverPassword(data);

    if (!res.error) {
      navigate("/");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error.data.detail);
    }
    if (isSuccess) {
      toast.success("Password reset link sent to your email.");
    }
  }, [error, isSuccess]);

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
          <Box mb="1.5rem">
            <Header title="Recover Password" />
          </Box>
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
                Send
              </Button>
            </Box>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default ForgotPassword;
