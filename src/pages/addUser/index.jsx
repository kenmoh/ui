import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import TextInput from "../../components/TextPut";

const AddUser = () => {
  const theme = useTheme();
  return (
    <Box m="1.5rem auto" width="30%" sx={{ flex: "column" }}>
      <Header title="NEW USER" subtitle="Add new user" />
      <Box m="2rem auto">
        <TextInput label="Email" type="email" />
        <TextInput label="Username" type="text" />
        <TextInput label="Phone Number" type="text" />
        <TextInput label="Password" type="password" />
        <Button variant="contained" disableElevation fullWidth size="large">
          Add User
        </Button>
      </Box>
    </Box>
  );
};

export default AddUser;
