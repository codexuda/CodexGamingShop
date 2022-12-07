import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { ThemeProvider, Typography, Button, createTheme, TextField, Card} from "@mui/material";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { useState } from "react";

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

export const DataCliente = () => {

    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [correo, setCorreo] = useState();
    const [direccion, setDireccion] = useState();
    const [telefono, setTelefono] = useState();
    const [edad, setEdad] = useState();
    const [identificacion, setIdentificacion] = useState();

    const pagar = () => {
        alert('Su compra ha sido confirmada')
        window.location.replace('/')
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="content">
                <Card sx={{
                    width: 300,
                    height: 500,
                    backgroundColor: 'primary',
                    display: 'block',
                    textAlign: 'center',
                    p: 5,
                    //overflow:'scroll'
                }}><Link to='/'><Logo/></Link>
                    <Typography fontWeight={700}>DATOS DEL CLIENTE</Typography>
                    
                    <TextField value={nombre} placevariant="standard" onChange={(e) => setNombre(e.target.value)} size="small" margin="dense" fullWidth label="Nombre" />
                    <TextField value={apellido} placevariant="standard" onChange={(e) => setApellido(e.target.value)} size="small" margin="dense" fullWidth label="Apellido" />
                    <TextField value={direccion} placevariant="standard" onChange={(e) => setDireccion(e.target.value)} size="small" margin="dense" fullWidth label="Direccion" />
                    <TextField type="number" value={identificacion} placevariant="standard" onChange={(e) => setIdentificacion(e.target.value)} size="small" margin="dense" fullWidth label="Identificacion" />
                    <TextField type="number" value={edad} placevariant="standard" onChange={(e) => setEdad(e.target.value)} size="small" margin="dense" fullWidth label="Edad" />
                    <TextField type="number" value={telefono} placevariant="standard" onChange={(e) => setTelefono(e.target.value)} size="small" margin="dense" fullWidth label="Telefono" />
                    <TextField type="email" value={correo} placevariant="standard" onChange={(e) => setCorreo(e.target.value)} size="small" margin="dense" fullWidth label="Correo" />
                    
                    <Button size="small" href="/cart" variant="contained" startIcon={<ChevronLeft />} sx={{ m: 1 }}>volver</Button>
                    <Button onClick={() => pagar()} size="small" variant="contained" endIcon={<ChevronRight />} sx={{ m: 1 }}>siguiente</Button>
                </Card>
            </div>
        </ThemeProvider>
    )
}