import {getCesantias,getInteresesCesantias,getPrima,getVacaciones} from '../cargaPrestacional/CargaPrestacional'
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

function Ordinario(salario) {

    return (
        salario
        + getVacaciones(salario)
        + getPrima(salario)
        + getCesantias(salario)
        + getInteresesCesantias(salario)
        - getPension(salario, pensionP.ordinario)
        - getSalud(salario, saludP.ordinario)
        - getFsp(salario)
    )
}

// function GetHtml(){
//     let salario = Ordinario(4500000)
//     return(
//         <div> {salario} </div>
//     )
// }

console.log(Ordinario(4500000))

export default Ordinario;