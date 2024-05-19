/** @format */

import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/configuraciones";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../ItemDetailContainer/ItemCount.css";
import "../checkout/Checkout.css";

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        toast.success("🦄 Compra realizada!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal(),
        };

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido).then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
        });
    };

    if (pedidoId) {
        return (
            <div className='container-checkout'>
                <h1 className='main-title'>Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        );
    }

    return (
        <div className='container-checkout'>
            <h1 className='main-title'>Finalizar compra</h1>
            <form className='formulario' onSubmit={handleSubmit(comprar)}>
                <input
                    type='text'
                    placeholder='Ingresá tu nombre'
                    {...register("nombre")}
                />
                <input
                    type='email'
                    placeholder='Ingresá tu e-mail'
                    {...register("email")}
                />
                <input
                    type='phone'
                    placeholder='Ingresá tu teléfono'
                    {...register("telefono")}
                />

                <button className='enviar' type='submit'>
                    Comprar
                    <ToastContainer />
                </button>
            </form>
        </div>
    );
};

export default Checkout;
