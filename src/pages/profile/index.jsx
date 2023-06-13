import { useEffect } from "react";
import { Box, Button, useTheme } from "@mui/material";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import Header from "../../components/Header";
import TextInput from "../../components/TextPut";

const Profile = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleUpdate = async (user) => {
    const data = new FormData();
    data.append("firstName", user.email.trim());
    data.append("lastName", user.password.trim());
    data.append("email", user.password.trim());
    data.append("phoneNumber", user.password.trim());
    data.append("password", user.password.trim());
  };

  useEffect(() => {
    setValue("firstName", "Kenneth");
    setValue("lastName", "Asunumhe");
    setValue("email", "Kenneth.aremoh@email.com");
    setValue("phoneNumber", "09099009988");
  });
  const theme = useTheme();
  return (
    <Box m="1.5rem auto" width="30%" sx={{ flex: "column" }}>
      <Header title="UPDATE profile" />
      <form onSubmit={console.log("Update")}>
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
          name="firstName"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="First Name"
              onChange={onChange}
              value={value || ""}
              error={errors.firstName?.message}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Last Name"
              onChange={onChange}
              value={value || ""}
              error={errors.lastName?.message}
            />
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Phone Number"
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
              backgroundColor: "#6d9dc5",
              fontWeight: "bold",
              fontSize: "1rem",
              marginTop: "1.5rem",
            }}
          >
            Update
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Profile;
