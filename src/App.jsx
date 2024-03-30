/** @format */
import CollapsibleExample from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
    return (
        <>
            <CollapsibleExample />
            <ItemListContainer
                greeting={
                    "Hola a todos nuestros clientes, revisen todos nuestros productos con descuento."
                }
            />
        </>
    );
}

export default App;
