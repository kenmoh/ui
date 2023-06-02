import { TextField, Typography } from "@mui/material";
import { statusColors } from "../theme";

const TextInput = ({ type, label, error, ...otherProps }) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        type={type}
        size="medium"
        margin="normal"
        fullWidth
        {...otherProps}
        autoComplete="off"
      />
      <Typography sx={{ color: statusColors.danger }}>{error}</Typography>
    </>
  );
};

export default TextInput;
