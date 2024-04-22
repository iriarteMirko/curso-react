/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Guitar from './components/Guitar'
import { db } from './data/db'

function App() {

    // State
    const [auth, setAuth] = useState(false)
    //const [total, setTotal] = useState(0)
    //const [carrito, setCarrito] = useState([])

    // Efect
    useEffect(() => {
        console.log('Componente listo')
    }, [auth])
    
    console.log(auth)

    return (
        <>
            <Header />
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    <Guitar />
                    <Guitar />
                    <Guitar />
                    <Guitar />
                    <Guitar />
                    <Guitar />
                    <Guitar />
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