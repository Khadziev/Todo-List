import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../redux/features/application";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  // container: {
  //     display: "flex",
  //     justifyContent: "space-between",
  //
  // },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "700",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textDecoration: "none",
  },
  slideImg: {
    width: "735px",
    height: "calc(100vh - 250px)",
  },
}));

export default function SignIn() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const signingIp = useSelector((state) => state.application.signingIp);
  const error = useSelector((state) => state.application.error);

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(auth(login, password, history));
  };

  const classes = useStyles();

  useEffect(() => {
    document.title = "??????????????????????";
  });

  return (
    <>
      <Container
        className={classes.container}
        component="main"
        maxWidth="1440px"
      >
        {error}
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ??????????
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              value={login}
              onChange={handleChangeLogin}
              required
              fullWidth
              id="login"
              label="??????????"
              name="login"
              autoComplete="login"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              value={password}
              onChange={handleChangePassword}
              required
              fullWidth
              name="password"
              label="????????????"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="?????????????????? ????????"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
              disabled={signingIp}
            >
              ??????????
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ???????????? ?????????????
                </Link>
              </Grid>
              <Grid item>
                <Link href="/registration" variant="body2">
                  {"????????????????????????????????????"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}

// import {useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {auth} from "../../redux/features/application";
//
// export default function SigninPage() {
//
//     const dispatch = useDispatch()
//
//     const [login, setLogin] = useState('')
//     const [password, setPassword] = useState('')
//
//     const signingIp = useSelector(state => state.application.signingIp)
//     const error = useSelector(state => state.application.error)
//
//     const handleChangeLogin = (e) => {
//         setLogin(e.target.value)
//     }
//
//     const handleChangePassword = (e) => {
//         setPassword(e.target.value)
//     }
//
//     const handleSubmit = () => {
//         dispatch(auth(login, password))
//     }
//     return (
//         <div>
//             {error}
//             <div>
//                 <input type="text" placeholder="type login" value={login} onChange={handleChangeLogin}/>
//             </div>
//             <div>
//                 <input type="password" placeholder="type login" value={password} onChange={handleChangePassword}/>
//             </div>
//             <button onClick={handleSubmit} disabled={signingIp}>??????????????????????</button>
//         </div>
//     )
// }
