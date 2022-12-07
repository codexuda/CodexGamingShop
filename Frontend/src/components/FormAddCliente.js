import { Add, ChevronLeft } from "@mui/icons-material"
import { ThemeProvider, Typography, Button, createTheme, TextField, Card} from "@mui/material";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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

export const FormAddCliente = () => {


    const [id, setId] = useState();
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [correo, setCorreo] = useState();
    const [direccion, setDireccion] = useState();
    const [telefono, setTelefono] = useState();
    const [edad, setEdad] = useState();
    const [identificacion, setIdentificacion] = useState();

    const agregarCliente = () => {
        const cliente= { id: parseInt(id), nombre, apellido, edad:parseInt(edad), direccion, telefono: parseInt(telefono), identificacion: parseInt(identificacion), correo };

        

        axios.post('http://localhost:3050/clientes', cliente)
            .then(res => {
                console.log("Cliente agregado")
                console.log(cliente)
                setTimeout(window.location.replace('/admin/clients'), 1000)

            }).catch(err => {
                console.log(err)
                //<Alert severity="error">Error agregando producto</Alert>
            })
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="formulario">
                <Card sx={{
                    width: 300,
                    height: 500,
                    backgroundColor: 'primary',
                    display: 'block',
                    textAlign: 'center',
                    p: 5,
                    //overflow:'scroll'
                }}><Link to='/'><Logo/></Link>
                    <Typography fontWeight={700}>Nuevo Cliente</Typography>

                    <TextField type="number" value={id} placevariant="standard" onChange={(e) => setId(e.target.value)} size="small" margin="dense" label="ID" />
                    <TextField value={nombre} placevariant="standard" onChange={(e) => setNombre(e.target.value)} size="small" margin="dense" fullWidth label="Nombre" />
                    <TextField value={apellido} placevariant="standard" onChange={(e) => setApellido(e.target.value)} size="small" margin="dense" fullWidth label="Apellido" />
                    <TextField value={direccion} placevariant="standard" onChange={(e) => setDireccion(e.target.value)} size="small" margin="dense" fullWidth label="Direccion" />
                    <TextField type="number" value={identificacion} placevariant="standard" onChange={(e) => setIdentificacion(e.target.value)} size="small" margin="dense" fullWidth label="Identificacion" />
                    <TextField type="number" value={edad} placevariant="standard" onChange={(e) => setEdad(e.target.value)} size="small" margin="dense" fullWidth label="Edad" />
                    <TextField type="number" value={telefono} placevariant="standard" onChange={(e) => setTelefono(e.target.value)} size="small" margin="dense" fullWidth label="Telefono" />
                    <TextField type="email" value={correo} placevariant="standard" onChange={(e) => setCorreo(e.target.value)} size="small" margin="dense" fullWidth label="Correo" />
                    
                    <Button size="small" href="/admin/clients" variant="contained" startIcon={<ChevronLeft />} sx={{ m: 1 }}>volver</Button>
                    <Button onClick={() => agregarCliente()} size="small" variant="contained" endIcon={<Add />} sx={{ m: 1 }}>agregar</Button>
                </Card>
            </div>
        </ThemeProvider>
    )
}