import {getVacaciones} from '../cargaPrestacional/CargaPrestacional'
import {getFsp,getPension,getSalud} from '../seguridadSocial/SeguridadSocial'

let saludP = {
    ordinario: 0.04,
    integral: 0.04,
    servicios: 0.125
}

let pensionP = {
    ordinario: 0.04,
    integral: 0.04,
    servicios:0.16
}

let baseSalarial = {
    integral: 0.7,
    servicios:0.4
}

function Integral(salario) {

    let getBaseSalarial = salario * baseSalarial.integral 

    return (
        salario
        + getVacaciones(salario)
        - getPension(getBaseSalarial, pensionP.integral)
        - getSalud(getBaseSalarial, saludP.integral)
        - getFsp(salario)
    )
}


console.log(Integral(4500000))

export default Integral;