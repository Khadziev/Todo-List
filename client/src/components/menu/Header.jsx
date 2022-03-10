import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, useLocation } from "react-router-dom";
import classnames from "classnames";
import { useSelector } from "react-redux";
import { logout } from "../../redux/features/application";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function Header() {
  const token = useSelector((state) => state.application.token);
  const { pathname } = useLocation();
  const classes = useStyles();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <div>
            <Toolbar>
              <Typography variant="h6" style={{ marginLeft: 370 }} noWrap>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/"
                >
                  Главная
                </NavLink>
              </Typography>
              <Typography
                className="classes.title"
                variant="h6"
                style={{ marginLeft: 120 }}
                noWrap
              >
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/registration"
                >
                  Регистрация
                </NavLink>
              </Typography>
              <Typography
                className="classes.title"
                variant="h6"
                style={{ marginLeft: 120 }}
                noWrap
              >
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  Авторизация
                </NavLink>
              </Typography>
              <Typography
                className="classes.title"
                variant="h6"
                style={{ marginLeft: 120 }}
                noWrap
              >
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  className={classnames(pathname === "/login")}
                  to={`/`}
                >
                  {" "}
                  Выйти
                </NavLink>
              </Typography>
            </Toolbar>
          </div>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
