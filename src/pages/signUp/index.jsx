import { useEffect } from "react";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, Box } from "@mui/material";
import Header from "../../components/Header";
import TextInput from "../../components/TextPut";
import { useAddUserMutation } from "../../state/authAPI";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import AppNavLink from "../../components/AppNavLink";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required()
    .label("Email"),
  username: yup.string().required().label("Username"),
  phoneNumber: yup
    .string()
    .required()
    .matches(phoneRegExp, "Enter a valid phone number")
    .max(11)
    .min(11)
    .label("Phone Number"),
  password: yup
    .string()
    .min(8, "Passworm must be at least 8 characters")
    .required()
    .label("Password"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [registerUser, { isLoading, isSuccess, error }] = useAddUserMutation();
  const onSubmit = (user) => {
    const data = new FormData();
    data.append("email", user.email.toLowerCase().trim());
    data.append("username", user.username);
    data.append("phone_number", user.phoneNumber);
    data.append("password", user.password);
    registerUser(data), reset();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Registration successful");
      navigate("/signin");
    }
    if (error) {
      toast.error(error.data.detail);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, error]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

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
          <Header title="Sing up" subtitle="Create a new account" />
          <form onSubmit={handleSubmit(onSubmit)}>
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
              name="username"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Username"
                  type="text"
                  onChange={onChange}
                  value={value || ""}
                  error={errors.username?.message}
                />
              )}
            />
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Phone Number"
                  type="text"
                  onChange={onChange}
                  value={value || ""}
                  error={errors.phoneNumber?.message}
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
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Register
              </Button>
            </Box>
          </form>
          <AppNavLink
            route="/signin"
            label="Login"
            text={`Already have an account`}
          />
        </Box>
      )}
    </Box>
  );
};

export default SignUp;
