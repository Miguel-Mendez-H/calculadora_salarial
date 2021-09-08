import React, { useState } from "react"
import './calculadora.css'

import ObtenerTablaCalduladora from './tabla'
import { ButtonGroup, Button, TextField, InputAdornment, InputLabel, Select, MenuItem } from '@material-ui/core'

import obtenerSalarioOrdinario from '../componentsapp/Salarios/Ordinario'
import obtenerPrestacionServicios from '../componentsapp/Salarios/Servicios'
import obtenerSalarioIntegral from '../componentsapp/Salarios/Integral'
import Accordion from './accordion'





function Calculadora() {

    const [salario, setSalario] = useState(0)
    const [otrosIngresos, setOtrosIngresos] = useState(0)
    const [tipoDeRiesgoArl, setTipoDeRiesgoArl] = useState(0)

    const [data, setData] = useState({})

    const handleChange = e => {
        
        setSalario(parseInt(e.target.value || 0))
        setData(obtenerSalarioOrdinario(salario, otrosIngresos))
        setData(obtenerSalarioIntegral(salario, otrosIngresos))
        setData(obtenerPrestacionServicios(salario, otrosIngresos,tipoDeRiesgoArl))
    }

    const handleChange2 = e => {
        setOtrosIngresos(parseInt(e.target.value || 0))
        setData(obtenerSalarioOrdinario(salario, otrosIngresos))
        setData(obtenerSalarioIntegral(salario, otrosIngresos))
        setData(obtenerPrestacionServicios(salario, otrosIngresos,tipoDeRiesgoArl))
    }

    const handleChange3 = e => {
        setTipoDeRiesgoArl(parseInt(e.target.value || 0))
        setData(obtenerPrestacionServicios(salario, otrosIngresos,tipoDeRiesgoArl))
    }

    return (
        <div className='containerCalculadora'>
            <div className='contenidoParrafo'>
                <Accordion></Accordion>
            </div>

            <div className='contenidoBotones-Tabla'>

                <div className='inputParaSalario'>
                    <TextField id="filled-basic"
                        label="Digite el Salario"
                        variant="filled"
                        type='number'
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                </div>
                <div className='inputParaOtrosIngresos'>
                    <TextField id="filled-basic"
                        label="Digite otros ingresos"
                        variant="filled"
                        type='number'
                        onChange={handleChange2}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                </div>

                <div className='SelectorArl'>
                    <InputLabel id="demo-simple-select-label">Tarifa ARL</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tipoDeRiesgoArl}
                        onChange={handleChange3}
                    >
                        <MenuItem value={0}>Riesgo 1 - 0.522%</MenuItem>
                        <MenuItem value={1}>Riesgo 2 - 1.044%</MenuItem>
                        <MenuItem value={2}>Riesgo 3 - 2.436%</MenuItem>
                        <MenuItem value={3}>Riesgo 4 - 4.350%</MenuItem>
                        <MenuItem value={4}>Riesgo 5 - 6.960%</MenuItem>
                    </Select>
                </div>

                <div className='contenidoBotones'>
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Button onClick={() => setData(obtenerSalarioOrdinario(salario, otrosIngresos))}>Ordinario</Button>
                        <Button onClick={() => setData(obtenerSalarioIntegral(salario, otrosIngresos))}>Integral</Button>
                        <Button onClick={() => setData(obtenerPrestacionServicios(salario, otrosIngresos,tipoDeRiesgoArl))}>Servicios</Button>
                    </ButtonGroup>
                </div>
                <div className='contenidoTabla'>
                    <ObtenerTablaCalduladora data={data}></ObtenerTablaCalduladora>
                </div>
            </div>
        </div>
    )
}

export default Calculadora;