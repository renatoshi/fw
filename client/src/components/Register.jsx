import * as React from "react";
import { useDispatch } from "react-redux";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Grid,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { register } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      register({
        email: email,
        password: password,
        loggedIn: false,
      })
      
    );
      navigate("/login")
    
  };

  const notify = () => toast.success('Signup Successful!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });


  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        spacing={2}
        paddingTop={20}
      >
        <Grid item>
            <Typography fontWeight="bold" paddingLeft={15} fontSize={25} paddingBottom={4}>Sign up</Typography>
          <form
            sx={{ width: "22rem" }}
            variant="outlined"
            onSubmit={(e) => handleSubmit(e)}
          >
            <Grid item>
              <Typography flex={1} alignSelf="center" fontWeight="bold">
                Email
              </Typography>
              <TextField
                placeholder="email"
                variant="outlined"
                type="email"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                sx={{ width: "22rem", marginTop: 1 }}
              />
            </Grid>
            <Typography
              flex={1}
              alignSelf="center"
              fontWeight="bold"
              marginTop={3}
            >
              Password
            </Typography>
            <OutlinedInput
              id="outlined-adornment-password"
              type="password"
              placeholder="password"
              variant="outlined"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{ width: "22rem" }}
            />
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "22rem", height: 40, marginTop: 3 }}
                onClick={notify}
              >
                Register
                <TrendingFlatIcon />
                
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <ToastContainer />
    </Box>
  );
};

export default Register;
