import React from "react"
import {Bar} from '../components/Bar';
import { ListaProductos } from "../components/ListaProductos";
import '../App.css';
import { NuevoElemento } from "../components/NuevoElemento";


export const AdminProductos = () =>{
    return (
        <>
        <NuevoElemento enlace="/admin/add-product" titulo="nuevo producto"/>
        <Bar/>
        <ListaProductos/>
        </>
    )
}