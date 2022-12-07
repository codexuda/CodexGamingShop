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

export const FormAddProduct = () => {


    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [urlImagen, setUrlImagen] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [existencia, setExistencia] = useState('');

    const agregarProducto = () => {
        var producto = { id: parseInt(id), nombre, urlImagen, descripcion, precio: parseInt(precio), existencia: parseInt(existencia) };
        console.log(producto)

        axios.post('http://localhost:3050/productos', producto)
            .then(res => {
                console.log("Producto agregado")
                setTimeout(window.location.replace('/admin/products'), 1000)

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
                    height: 450,
                    backgroundColor: 'primary',
                    display: 'block',
                    textAlign: 'center',
                    p: 5
                }}><Link to='/'><Logo /></Link>
                    <Typography fontWeight={700}>Nuevo Producto</Typography>

                    <TextField type="number" value={id} onChange={(e) => setId(e.target.value)} size="small" margin="dense" required label="ID" />
                    <TextField value={nombre} onChange={(e) => setNombre(e.target.value)} size="small" margin="dense" fullWidth required label="Nombre" />
                    <TextField value={urlImagen} onChange={(e) => setUrlImagen(e.target.value)} size="small" margin="dense" fullWidth required label="Imagen" id="urlImagen" />
                    <TextField value={descripcion} onChange={(e) => setDescripcion(e.target.value)} size="small" margin="dense" fullWidth required label="Descripcion" id="descripcion" />
                    <TextField type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} size="small" margin="dense" fullWidth required label="Precio" id="precio" />
                    <TextField type="number" value={existencia} onChange={(e) => setExistencia(e.target.value)} size="small" margin="dense" fullWidth required label="Existencia" id="existencia" />

                    <Button size="small" href="/admin/products" variant="contained" startIcon={<ChevronLeft />} sx={{ m: 1 }}>volver</Button>
                    <Button onClick={() => agregarProducto()} size="small" variant="contained" endIcon={<Add />} sx={{ m: 1 }}>agregar</Button>
                </Card>
            </div>
        </ThemeProvider>
    )
}