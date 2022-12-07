import { Save, ChevronLeft } from "@mui/icons-material"
import { ThemeProvider, Typography, Button, createTheme, Card, TextField } from "@mui/material";
import { Logo } from "./Logo";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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




export const FormEditProduct = () => {
    const idProducto = useParams().id;
    useEffect(() => {
        axios.get(`http://localhost:3050/productos/${idProducto}`).then(res => {
            console.log(res.data)
            setNombre(res.data.nombre)
            setUrlImagen(res.data.urlImagen)
            setDescripcion(res.data.descripcion)
            setPrecio(res.data.precio)
            setExistencia(res.data.existencia)
        }).catch(err => {
            console.log(err)
        })
    }, [idProducto])


    const [nombre, setNombre] = useState('');
    const [urlImagen, setUrlImagen] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState(0);
    const [existencia, setExistencia] = useState(0);




    const editarProducto = () => {

        const productoEdit = { id: parseInt(idProducto), nombre, urlImagen, descripcion, precio: parseInt(precio), existencia: parseInt(existencia) };

        axios.put('http://localhost:3050/productos', productoEdit)
            .then(res => {
                console.log("Producto editado correctamente")
                setTimeout(window.location.replace('/admin/products'), 1000)

            }).catch(err => {
                console.log("Error actualizando", err)
                //<Alert severity="error">Error agregando producto</Alert>
            })
    }

    return (

        <ThemeProvider theme={theme}>
            <div className="formulario">
                <Card sx={{
                    width: 300,
                    height: 350,
                    backgroundColor: 'primary',
                    display: 'block',
                    textAlign: 'center',
                    p: 5
                }}><Link to='/'><Logo /></Link>
                    <Typography fontWeight={700}>Editando producto: ID-{idProducto}</Typography>
                  

                    <TextField value={nombre} placevariant="standard" onChange={(e) => setNombre(e.target.value)} size="small" margin="dense" fullWidth label="Nombre" />
                    <TextField value={urlImagen} placevariant="standard" onChange={(e) => setUrlImagen(e.target.value)} size="small" margin="dense" fullWidth label="Imagen" />
                    <TextField value={descripcion} placevariant="standard" onChange={(e) => setDescripcion(e.target.value)} size="small" margin="dense" fullWidth label="Descripcion" />
                    <TextField type="number" value={precio} placevariant="standard" onChange={(e) => setPrecio(e.target.value)} size="small" margin="dense" fullWidth label="Precio" />
                    <TextField type="number" value={existencia} placevariant="standard" onChange={(e) => setExistencia(e.target.value)} size="small" margin="dense" fullWidth label="Existencia" />

                    <div>
                        <Button size="small" href="/admin/products" variant="contained" startIcon={<ChevronLeft />} sx={{ m: 1 }}>volver</Button>
                        <Button onClick={() => editarProducto()} size="small" variant="contained" endIcon={<Save />} sx={{ m: 1 }}>guardar</Button>
                    </div>
                </Card>
            </div>
        </ThemeProvider>


    )
}