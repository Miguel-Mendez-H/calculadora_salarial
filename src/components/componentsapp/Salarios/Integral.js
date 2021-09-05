import {getVacaciones} from '../cargaPrestacional/CargaPrestacional'
import {getFsp,getPension,getSalud} from '../seguridadSocial/SeguridadSocial'

import {PORCENTAJE_BASE_SALARIAL_SALARIO_INTEGRAL} from '../../config/Globals'
import {SALARIO_INTEGRAL} from '../../config/Types'

function calcularSalarioIntegral(salario) {

    let getBaseSalarial = salario * PORCENTAJE_BASE_SALARIAL_SALARIO_INTEGRAL

    let vacaciones = getVacaciones(salario)
    let pension = getPension(getBaseSalarial, SALARIO_INTEGRAL)
    let salud = getSalud(getBaseSalarial, SALARIO_INTEGRAL)
    let fondoS = getFsp(salario, getBaseSalarial)

    let neto = Number(salario)
    +vacaciones
    -pension
    -salud
    -fondoS

    let data = {salario:salario,vacaciones:vacaciones,pension:pension,salud:salud,fondoS:fondoS,neto:neto}

    return data
}

function obtenerSalarioIntegral(ingresoSalarial,otrosIngresos) {

    let salario = ingresoSalarial + otrosIngresos
    
    let dataTable = calcularSalarioIntegral(salario)
    console.log(dataTable)

    return dataTable
}


export default obtenerSalarioIntegral;