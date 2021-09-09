/// cesantias, prima, vacaciones, intereses cesantias

let diasTrabajados = 30
const interesesCesantias = 0.12

const getVacaciones = (salario) => (salario * diasTrabajados / 720)

const getPrima = (salario) => (salario * diasTrabajados / 360)

const getCesantias = (salario) => ((salario * diasTrabajados) / 360)

const getInteresesCesantias = (salario) => ((((salario * diasTrabajados) / 360) * interesesCesantias))

export {getCesantias,getInteresesCesantias,getPrima,getVacaciones};