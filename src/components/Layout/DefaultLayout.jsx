import { Box, CssBaseline } from "@mui/material";
import Header from "../Header";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DefaultLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DefaultLayout;
