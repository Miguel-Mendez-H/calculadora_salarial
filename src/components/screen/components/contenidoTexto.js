import React from "react"

function obtenerGuiaApp() {
    return (
        <div>
            <h1>Calculadora Salarial</h1>
            <p>
                Esta calculadora te permite estimar el ingreso neto a partir de los ingresos brutos,
                de acuerdo con el esquema de pago pactado con tu compañía.
            </p>
            <h3>1. Ingresos Laborales</h3>
            <p>
                Digite su salario u honorarios percibidos
            </p>
            <h3>2. Otros Ingresos Laborales</h3>
            <p>
                Digite los demas ingresos percibidos por conceptos de:
               <li>Primas Ocasionales</li>
               <li>Partcipacion Utilidades</li>
               <li>Primas Extralegales</li>
               <li>Bonificaciones</li>
            </p>



        </div>
    )
}

export default obtenerGuiaApp
