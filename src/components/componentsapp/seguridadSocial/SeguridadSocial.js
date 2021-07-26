//Salud y pension

const SMMLV = 908526


const getPension = (salario, pensionP) => (salario * pensionP)

const getSalud = (salario, saludP) => (salario * saludP)

const getFsp = (salario) => {
    let fsp = 0
    let fspbase = salario / SMMLV

    if (fspbase >= 4 && fspbase < 16) {
        fsp = salario * 0.01
    } else if (fspbase >= 16 && fspbase < 17) {
        fsp = salario * 0.012

    } else if (fspbase >= 17 && fspbase < 18) {
        fsp = salario * 0.014

    } else if (fspbase >= 18 && fspbase < 19) {
        fsp = salario * 0.016

    } else if (fspbase >= 19 && fspbase < 20) {
        fsp = salario * 0.018
    } else if (fspbase >= 20) {
        fsp = salario * 0.02
    }

    return fsp
}

const getArl = (salario,arlP) => (salario * arlP)

export {getFsp,getPension,getSalud,getArl}