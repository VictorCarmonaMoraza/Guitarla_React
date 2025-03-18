import { Fragment } from "react"
import React from 'react'

export default function Header() {

    const name = "Juan"
    const total = 100

    return (
        //Opcion 1
        // <Fragment>
        //     <p>Hola: {name}</p>
        //     <p>Total a pagar: {total}</p>
        // </Fragment>

        // //Opcion 2
        // <React.Fragment>
        //     <p>Hola: {name}</p>
        //     <p>Total a pagar: {total}</p>
        // </React.Fragment>

        //Opcion 3
        <>
            <p>Hola: {name}</p>
            <p>Total a pagar: {total}</p>
        </>
    )
}

