import React from 'react'
import { Nav } from 'react-bootstrap'

const NavigationBar = () => {
    const a = {
        color: '#000000',
    }
    return (
        <Nav className="mr-auto bg-light" >
            <Nav.Link href="/" style={a} >Home</Nav.Link>
            <Nav.Link href="/form" style={a} >Creacion De Formulario</Nav.Link>
        </Nav>


    )
}

export default NavigationBar
