import { AddCircle } from "@mui/icons-material";
import { Button, createTheme, ThemeProvider} from "@mui/material";
import React from "react";
import "../App.css"

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

export const NuevoElemento = ({enlace,titulo}) => {
    return (
        <ThemeProvider theme={theme}>
            <div className="botonAgregar">
                <Button href={enlace} variant="contained" color='primary' endIcon={<AddCircle />} sx={{ textAlign:"center",width:"150px", p: "1" }}>{titulo}</Button>
            </div>
        </ThemeProvider>
    )
}