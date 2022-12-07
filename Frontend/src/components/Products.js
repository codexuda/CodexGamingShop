import React, { useEffect, useState } from "react"
import { Container } from "@mui/system"
import { Product } from "./Product"
import axios from "axios"

export const Products = () => {

    const[productos,setProductos]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3050/productos').then(res=>{
            console.log(res.data)
            setProductos(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    const listarProductos=productos.map(producto=>{return(<div key={producto._id}><Product product={producto}/></div>)})

    return (
        <Container maxWidth="md">
            {listarProductos}
        </Container>
    )
}