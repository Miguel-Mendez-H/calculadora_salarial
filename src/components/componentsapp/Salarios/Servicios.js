import { getFsp, getPension, getSalud, getArl} from '../seguridadSocial/SeguridadSocial'

let saludP = {
    ordinario: 0.04,
    integral: 0.04,
    servicios: 0.125
}

let pensionP = {
    ordinario: 0.04,
    integral: 0.04,
    servicios: 0.16
}

let baseSalarial = {
    integral: 0.7,
    servicios: 0.4
}

let arlP = {
    riesgo1: 0.00522,
    riesgo2: 0.01044,
    riesgo3: 0.02436,
    riesgo4: 0.0435,
    riesgo5: 0.06960
}

function Servicios(salario) {

    let getBaseSalarial = salario * baseSalarial.servicios

    return (
        salario
        - getPension(getBaseSalarial, pensionP.servicios)
        - getSalud(getBaseSalarial, saludP.servicios)
        - getFsp(salario)
        - getArl(salario, arlP.riesgo1)
        
    )
}


console.log(Servicios(4500000))

export default Servicios;