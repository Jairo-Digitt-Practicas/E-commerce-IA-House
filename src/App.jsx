/** @format */
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categorias from "./components/paginas/Categorias.jsx";
import Promociones from "./components/paginas/Promociones.jsx";
import Sobre_Nosotros from "./components/paginas/Sobre_Nosotros.jsx";
import Contacto from "./components/paginas/Contacto.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route
                        path='/'
                        element={
                            <ItemListContainer saludo='Revisa el detalle de nuestros productos' />
                        }
                    />
                    <Route path='/categorias' element={<Categorias />} />
                    <Route
                        path='/categoria/:categoryid'
                        element={
                            <ItemListContainer saludo='Revisa el detalle de nuestros productos' />
                        }
                    />
                    <Route
                        path='/detail/:idProduct'
                        element={<ItemDetailContainer />}
                    />
                    <Route path='/promociones' element={<Promociones />} />
                    <Route path='/sobrenosotros' element={<Sobre_Nosotros />} />
                    <Route path='/contacto' element={<Contacto />} />

                    <Route
                        path='*'
                        element={<div>Error ruta no encontrada</div>}
                    />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
