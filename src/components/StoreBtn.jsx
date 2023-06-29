import { Box, Typography } from "@mui/material";

const StoreBtn = ({ icon, text, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        padding: "0.5rem 3rem",
        backgroundColor: "#000",
        fontWeight: "bold",
        fontSize: "1rem",
        marginTop: "1.5rem",
        cursor: "pointer",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        border: "0.5px solid red",
      }}
    >
      {icon}
      <Typography sx={{ fontSize: "1.5rem" }}>{text}</Typography>
    </Box>
  );
};

export default StoreBtn;
