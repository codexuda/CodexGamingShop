import { BarClient } from "../components/BarClient"
import { CartProducts } from "../components/CartProducts"

export const Cart = ({data})=>{
    return(
        <>
        <BarClient/>
        <CartProducts {...data}/>
        </>
    )
}