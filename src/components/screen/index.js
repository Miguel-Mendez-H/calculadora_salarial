import React from "react"
import {Navbar,Nav,Container} from 'react-bootstrap'
import Ordinario from "../componentsapp/Salarios/Ordinario"
import Integral from "../componentsapp/Salarios/Integral"
import Servicios from "../componentsapp/Salarios/Servicios"

// iba a tomar esto como app home como, base de la app, pero me quede pensando si cada cosita debia crearla aparte como nav.js, list,js, etc.js
//y despues invocarla a una verdadera app-home y juntarlo todo. 
function appHome() {
    return (
        <Navbar bg="dark" variant="dark"> 
            <Container>
                <Navbar.Brand href="#home">Calculadora Salarial</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#features">Contactenos</Nav.Link>
                    <Nav.Link href="#pricing">Mas..</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default appHome;