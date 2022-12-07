import React from "react"
import {BarClient} from '../components/BarClient';
//import { Products } from "../components/Products";
import '../App.css';
import { ProductosClientes } from "../components/ProductosClientes";

export const Home = () => {
    return (
        <>
        <BarClient/>
        <ProductosClientes/>
        </>
    )
}