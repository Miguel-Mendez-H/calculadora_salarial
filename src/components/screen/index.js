import React from "react"
import GetNavbar from "./nav"


import Calculadora from './caculadora'

// iba a tomar esto como app home como, base de la app, pero me quede pensando si cada cosita debia crearla aparte como nav.js, list,js, etc.js
//y despues invocarla a una verdadera app-home y juntarlo todo. 
function appHome() {
    return (
        <div>
         <GetNavbar></GetNavbar>
         <Calculadora></Calculadora>
        
        </div>
        
    )
}


export default appHome;