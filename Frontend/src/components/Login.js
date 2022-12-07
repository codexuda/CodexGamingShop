import React from "react";
import "../App.css";
import Login from "@mui/icons-material/Login";
import { ThemeProvider, Button, createTheme, TextField, Card} from "@mui/material";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

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
    },
});

export const LoginPage = () => {
    return (
        <div className="formulario">
            <ThemeProvider theme={theme}>
                <Card sx={{
                    width: 200,
                    height: 200,
                    backgroundColor: 'primary',
                    display: 'block',
                    textAlign: 'center',
                    p: 5
                }}>
                    <Link to='/'><Logo/></Link>

                    <TextField size="small" id="email" label="Email" sx={{mt:1}} />
                    <TextField size="small" id="password" label="Password" type="password" sx={{mt:2}}/>

                    <Button href="/admin" variant="outlined" endIcon={<Login />} sx={{mt:1}}>Log in</Button>

                </Card>
            </ThemeProvider>
        </div>
    );
}
