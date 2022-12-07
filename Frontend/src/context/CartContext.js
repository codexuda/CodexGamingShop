import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const addCarrito = (product) => {

        alert("Agregado al carrito")
        const productoExistente = carrito.find((item) => item.producto === product.id)

        if (productoExistente) {
            setCarrito(
                carrito.map((productoExistente) => {
                    if (productoExistente.producto === product.id) {
                        return {
                            ...productoExistente, cantidad: productoExistente.cantidad + 1
                        }
                    }
                    else return productoExistente;
                }

                )
            )
        } else {
            setCarrito([...carrito, {
                producto: product.id,
                valorUnitario: product.precio,
                cantidad: 1
            }
            ])

        }
    }
    return (
        <CartProvider value={{carrito, setCarrito, addCarrito}}>
            {children}
        </CartProvider>
    )
}