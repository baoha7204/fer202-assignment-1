import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const pages = [
  { page: "Home", link: "/" },
  { page: "Login", link: "/login" },
  { page: "Logout", link: "/logout" },
];

const Header = () => {
  const { auth } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "right" }}>
            {pages.map((page) => {
              if (page.page === "Logout" && !auth?.user) {
                return null;
              }
              if (page.page === "Login" && auth?.user) {
                return null;
              }
              return (
                <Button
                  component={Link}
                  to={page.link}
                  key={page.page}
                  sx={{ color: (theme) => theme.palette.secondary.main }}
                >
                  {page.page}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
