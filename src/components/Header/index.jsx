import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";

const pages = [
  { page: "Home", link: "/" },
  { page: "Login", link: "/login" },
];

const Header = () => {
  const { auth } = useAuth();
  const isAuth = Boolean(auth?.user);
  const logout = useLogout();
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
              if (page.page === "Login" && isAuth) {
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
            {isAuth && (
              <Button
                sx={{ color: (theme) => theme.palette.secondary.main }}
                onClick={() => logout()}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
