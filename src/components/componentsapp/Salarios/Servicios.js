import { getFsp, getPension, getSalud, getArl } from '../seguridadSocial/SeguridadSocial'

import { PORCENTAJE_BASE_SALARIAL_PRESTACION_SERVICIOS } from '../../config/Globals'
import { SALARIO_SERVICIOS } from '../../config/Types'




function calcularPrestacionServicios(salario, tipoDeRiesgoArl) {

    let getBaseSalarial = salario * PORCENTAJE_BASE_SALARIAL_PRESTACION_SERVICIOS

    let pension = getPension(getBaseSalarial, SALARIO_SERVICIOS)
    let salud = getSalud(getBaseSalarial, SALARIO_SERVICIOS)

    let fondoS = getFsp(salario, getBaseSalarial)

    let arl = getArl(salario, tipoDeRiesgoArl)

    let neto = Number(salario)
        - pension
        - salud
        - fondoS
        - arl

    let data = { pension: pension, salud: salud, fondoS: fondoS, arl: arl, neto: neto }

    console.log('datos:', data)
    return data
}

function obtenerPrestacionServicios(ingresoSalarial, otrosIngresos,tipoDeRiesgoArl) {

    let salario = ingresoSalarial + otrosIngresos

    let dataTable = calcularPrestacionServicios(salario,tipoDeRiesgoArl)

    return dataTable
}


export default obtenerPrestacionServicios;