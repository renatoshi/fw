/* eslint-disable react/jsx-no-undef */
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import logo from "../logo/logo2.png"
import { Stack, Button  } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';


const Searchbar = styled('div')(({ theme }) => ({


  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Search() {

  let navigate = useNavigate();

  const dispatch = useDispatch()

  const handleLogout = (e) => {
    e.preventDefault()

    dispatch(logout())
    navigate("/")
  }

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='default'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to={"/"}>
            <img src={logo} alt="logo"/>
            </Link>
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 5 }}
            paddingRight={15}
          >
            <Link to={"/search"}  textDecoration= "none">
              <Typography variant='body1' fontWeight={"bold"} >Search</Typography>
            </Link>
            <Link to={"/profile"}  textDecoration= "none">
              <Typography variant='body1' fontWeight={"bold"}>Profile</Typography>
            </Link >
            {/* <Button variant="body1">Logout</Button> */}
            <Typography variant='body1' fontWeight={"bold"} onClick={(e)=> handleLogout(e)}>Logout</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
