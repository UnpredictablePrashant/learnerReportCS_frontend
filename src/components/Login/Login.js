import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = createTheme();
  const [type, setType] = React.useState("");
  const [url, setUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState();
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    setType(event.target.value);
    setUrl(`http://localhost:3000/${event.target.value}/login`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    await axios
      .post(url, data)
      .then((res) => {
        if (res.status === 200) {
          props.onLogin({
            isLoggedIn: true,
            userDetails: res.data.result,
            token: res.data.token,
          });
          if (res.data.result.userType === "admin") {
            navigate("/dashboard");
          }
        }
      })
      .catch((err) => {
        setIsError(true);
        setErrorMsg(err.response.data);
      });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={5}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={7}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              {isError && <Alert severity="error">{errorMsg}</Alert>}
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    User Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="User type"
                    onChange={handleChange}
                  >
                    <MenuItem value={"student"}>Student</MenuItem>
                    <MenuItem value={"faculty"}>Faculty</MenuItem>
                    <MenuItem value={"careerService"}>Career Services</MenuItem>
                    <MenuItem value={"admin"}>Admin</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};
export default Login;