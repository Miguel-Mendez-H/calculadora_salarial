/// cesantias, prima, vacaciones, intereses cesantias

let diasTrabajados = 30
const interesesCesantias = 0.12

const getVacaciones = (salario) => Math.round(salario * diasTrabajados / 720)

const getPrima = (salario) => Math.round(salario * diasTrabajados / 360)

const getCesantias = (salario) => Math.round((salario * diasTrabajados) / 360)

const getInteresesCesantias = (salario) => Math.round((((salario * diasTrabajados) / 360) * interesesCesantias))

export {getCesantias,getInteresesCesantias,getPrima,getVacaciones};