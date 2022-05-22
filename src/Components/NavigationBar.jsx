import React from 'react'
import { Nav } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <Nav className="mr-auto bg-dark" >
            <Nav.Link className='text-white' href="/" >Home</Nav.Link>
            <Nav.Link className='text-white text-capitalize' href="/form" >Crear un post</Nav.Link>
        </Nav>
    )
}

export default NavigationBar
