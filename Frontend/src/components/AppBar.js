import React from "react";
import '../App.css'
import { Logo } from './Logo'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material';
const theme = createTheme({
  palette: {
    primary: {
      main: '#40b988',
      contrastText: 'white',
    },

    secondary: {
      main: '#69f0ae',
      contrastText: '#000000',
    },
  }})

export const AppBar = () => {
  return (
    
      <div className="topbar">
        <Logo />
        <div className="navigation">
        <ThemeProvider theme={theme}>
          <Button variant="outlined" size='small' color='primary' href="/"><ShoppingCartIcon fontSize="string"/></Button>
          <Button variant="text" size='small' color='primary' href="/login"><LoginIcon fontSize='string'/></Button>
        
    </ThemeProvider>
        </div>
      </div>
  )
};

