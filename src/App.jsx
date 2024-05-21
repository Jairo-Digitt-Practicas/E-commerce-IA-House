/** @format */
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Promociones from "./components/paginas/Promociones.jsx";
import SobreNosotros from "./components/paginas/SobreNosotros.jsx";
import Contacto from "./components/paginas/Contacto.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./components/context/CartContext.jsx";
import Carrito from "./components/carrito/Carrito.jsx";
import Checkout from "./components/checkout/Checkout.jsx";

function App() {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <ItemListContainer saludo='Revisa el detalle de nuestros productos' />
                            }
                        />
                        <Route
                            path='/categoria/:idCategory'
                            element={
                                <ItemListContainer saludo='Revisa el detalle de nuestros productos' />
                            }
                        />
                        <Route
                            path='/detail/:idProduct'
                            element={<ItemDetailContainer />}
                        />
                        <Route path='/promociones' element={<Promociones />} />
                        <Route
                            path='/sobrenosotros'
                            element={<SobreNosotros />}
                        />
                        <Route path='/contacto' element={<Contacto />} />
                        <Route
                            path='*'
                            element={<div>Error ruta no encontrada</div>}
                        />
                        <Route path='/carrito' element={<Carrito />} />
                        <Route path='/checkout' element={<Checkout />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartProvider>
        </>
    );
}

export default App;
