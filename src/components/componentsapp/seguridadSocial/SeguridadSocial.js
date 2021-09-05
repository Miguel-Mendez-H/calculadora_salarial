//Salud y pension

const SMMLV = 908526

let pensionP = {
    SALARIO_ORDINARIO: 0.04,
    SALARIO_INTEGRAL: 0.04,
    SALARIO_SERVICIOS: 0.16
}

let saludP = {
    SALARIO_ORDINARIO: 0.04,
    SALARIO_INTEGRAL: 0.04,
    SALARIO_SERVICIOS: 0.125
}

let tiposDeRiesgo = {
    0: 0.00522,
    1: 0.01044,
    2: 0.02436,
    3: 0.0435,
    4: 0.06960
}

const getPension = (salario, tipoSalario) => Math.round(salario * pensionP[tipoSalario])

const getSalud = (salario, tipoSalario) => Math.round(salario * saludP[tipoSalario])

const getFsp = (salario, salarioBase = salario) => {

    let fsp = 0
    let fspbase = salario / SMMLV

    if (fspbase >= 4 && fspbase < 16) {
        fsp = Math.round(salarioBase * 0.01)
    } else if (fspbase >= 16 && fspbase < 17) {
        fsp = Math.round(salarioBase * 0.012)

    } else if (fspbase >= 17 && fspbase < 18) {
        fsp = Math.round(salarioBase * 0.014)

    } else if (fspbase >= 18 && fspbase < 19) {
        fsp = Math.round(salarioBase * 0.016)

    } else if (fspbase >= 19 && fspbase < 20) {
        fsp = Math.round(salarioBase * 0.018)
    } else if (fspbase >= 20) {
        fsp = Math.round(salarioBase * 0.02)
    }

    return fsp
}

const getArl = (salario, tipoDeRiesgo) => Math.round((salario * tiposDeRiesgo[tipoDeRiesgo]))

export { getFsp, getPension, getSalud, getArl}