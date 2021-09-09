import React from "react"
import GetNavbar from "./nav"
import './index.css'


import Calculadora from './caculadora'

function appHome() {
    return (
        <div className = 'ClaseCalculadora'>
         <GetNavbar></GetNavbar>
         <Calculadora></Calculadora>
        
        </div>
        
    )
}


export default appHome;