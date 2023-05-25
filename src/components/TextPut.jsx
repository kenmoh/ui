import { TextField, useTheme } from "@mui/material";

const TextInput = ({ type, label }) => {
  const theme = useTheme();
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      type={type}
      size="medium"
      margin="normal"
      fullWidth
    />
  );
};

export default TextInput;
