import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { useState } from "react"
import { db } from "./data/db,js"

function App() {

    //console.log(db)

    const [data, setData] = useState(db)
    const [cart, setCard] = useState([])

    function addToCart(item) {
        //Cprobar que un lemento existe 
        const itemExists = cart.findIndex((guitar) => guitar.id === item.id)
        if (itemExists >= 0) {
            const updateCart = [...cart]
            updateCart[itemExists].quantity++
            setCard(updateCart)
        } else {
            item.quantity = 1
            setCard([...cart, item])
        }


    }


    return (
        <>
            <Header />

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((guitarras) => (
                        <Guitar
                            key={guitarras.id}
                            guitar={guitarras}
                            carrito={cart}
                            addCard={setCard}
                            addToCart={addToCart}
                        />
                    )
                    )}
                </div>
            </main>


            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
                </div>
            </footer>

        </>
    )
}

export default App
