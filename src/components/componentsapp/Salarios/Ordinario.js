import { getCesantias, getInteresesCesantias, getPrima, getVacaciones } from '../cargaPrestacional/CargaPrestacional'
import { getFsp, getPension, getSalud } from '../seguridadSocial/SeguridadSocial'
import {SALARIO_ORDINARIO} from '../../config/Types'

function calcularOrdinario(salario) {

    let vacaciones = getVacaciones(salario)
    let prima = getPrima(salario)
    let cesantias = getCesantias(salario)
    let intereses = getInteresesCesantias(salario)

    let pension = getPension(salario, SALARIO_ORDINARIO)
    
    let salud = getSalud(salario, SALARIO_ORDINARIO)
    
    let fondoS = getFsp(salario)

    let neto = Number(salario)
        + vacaciones
        + prima
        + cesantias
        + intereses
        - pension
        - salud
        - fondoS

    let data = { vacaciones: vacaciones, prima: prima, cesantias: cesantias, intereses: intereses, pension: pension, salud: salud, fondoS: fondoS, neto: neto }

    return data
}


function obtenerSalarioOrdinario(ingresoSalarial,otrosIngresos) {

    console.log(ingresoSalarial, otrosIngresos)

    let salario = ingresoSalarial + otrosIngresos

    let dataTable = calcularOrdinario(salario)
    console.log(dataTable)

    return dataTable
}

export default obtenerSalarioOrdinario;