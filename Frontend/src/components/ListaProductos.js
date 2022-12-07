import React, { useEffect, useState } from "react"
import axios from "axios"
import { Container } from "@mui/system"
import { Producto } from "./Producto"


export const ListaProductos = () => {

    const[productos,setProductos]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3050/productos').then(res=>{
            console.log(res.data)
            setProductos(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])


    const listaProductos=productos.map(producto=>{return(<div key={producto.id}><Producto product={producto}/></div>)})

    return (
        <Container maxWidth="md">
            {listaProductos}
        </Container>
    )
}